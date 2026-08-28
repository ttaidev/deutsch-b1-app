export function playSuccessSound() {
  if (typeof window === "undefined" || !window.AudioContext) return;

  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create oscillator
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    // Beautiful Ding sound settings
    osc.type = "sine";
    osc.frequency.setValueAtTime(800, audioCtx.currentTime); // High pitch start
    osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1); // Pitch goes slightly up
    
    // Volume envelope
    gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.05); // Quick fade in
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5); // Smooth fade out

    osc.start(audioCtx.currentTime);
    osc.stop(audioCtx.currentTime + 0.6);
  } catch (e) {
    console.error("Audio playback failed", e);
  }
}
