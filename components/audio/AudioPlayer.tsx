"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Eye, EyeOff } from "lucide-react";

interface AudioPlayerProps {
  audioUrl?: string;
  transcript: string;
  ttsFallbackText?: string;
}

export function AudioPlayer({ audioUrl, transcript, ttsFallbackText }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100); 
  const [speed, setSpeed] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Ref to track the absolute character index we are currently playing
  const charIndexOffsetRef = useRef(0);
  // Full text to speak
  const fullText = ttsFallbackText || transcript;
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speakText = (startIndex: number) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();

    // Adjust startIndex to nearest space if possible to avoid cutting words
    let adjustedIndex = startIndex;
    if (adjustedIndex > 0 && adjustedIndex < fullText.length && fullText[adjustedIndex] !== " ") {
      const nextSpace = fullText.indexOf(" ", adjustedIndex);
      if (nextSpace !== -1) adjustedIndex = nextSpace;
    }

    const textToSpeak = fullText.substring(adjustedIndex);
    if (!textToSpeak.trim()) {
      setIsPlaying(false);
      return;
    }

    charIndexOffsetRef.current = adjustedIndex;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = "de-DE";
    utterance.rate = speed;
    
    // Mute by setting volume to 0
    utterance.volume = isMuted ? 0 : 1;

    utterance.onend = () => {
      setIsPlaying(false);
      setCurrentTime(fullText.length);
    };

    currentUtteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsPlaying(true);
  };

  // Smoothly animate the progress bar for TTS since onboundary is flaky on some OS/Browsers
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const isTTS = !audioUrl;
    if (isPlaying && isTTS) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          // Assume ~15 chars per second at 1x speed
          const charsPerSec = 15 * speed;
          const charsPer100ms = charsPerSec / 10;
          const next = prev + charsPer100ms;
          if (next >= fullText.length) {
             return prev; // Let onend handle the finish
          }
          return next;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, audioUrl, speed, fullText.length]);

  const togglePlay = () => {
    if (audioRef.current && audioUrl) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // Fallback Web Speech Synthesis
      if ("speechSynthesis" in window) {
        if (isPlaying) {
          window.speechSynthesis.pause(); // Just pause it
          setIsPlaying(false);
        } else {
          // If paused, resume
          if (window.speechSynthesis.paused) {
             window.speechSynthesis.resume();
             setIsPlaying(true);
          } else {
             // Start from beginning or current offset
             if (currentTime >= fullText.length) {
               setCurrentTime(0);
               speakText(0);
             } else {
               speakText(currentTime);
             }
          }
        }
      }
    }
  };

  const handleSpeedChange = () => {
    const speeds = [0.75, 1, 1.25];
    const nextSpeed = speeds[(speeds.indexOf(speed) + 1) % speeds.length];
    setSpeed(nextSpeed);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextSpeed;
    } else {
      if (isPlaying) {
        speakText(currentTime); // Restart with new speed
      }
    }
  };
  
  const handleMuteChange = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
       audioRef.current.muted = !isMuted;
    } else {
       if (isPlaying) {
         speakText(currentTime); // Restart with new volume
       }
    }
  };

  const replay = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      setCurrentTime(0);
      speakText(0);
    }
  };

  // Convert char index to "fake time" (assuming ~15 chars per second for display)
  const formatTime = (value: number, isCharIndex: boolean = false) => {
    let secs = value;
    if (isCharIndex) {
      // Estimate time: rate 1 = ~15 chars/sec
      secs = value / (15 * speed);
    }
    if (isNaN(secs) || !isFinite(secs)) secs = 0;
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const isTTS = !audioUrl;
  const maxRange = isTTS ? fullText.length : duration;

  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md space-y-4">
      {audioUrl && (
        <audio
          ref={audioRef}
          src={audioUrl}
          onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime || 0)}
          onLoadedMetadata={() => setDuration(audioRef.current?.duration || 120)}
          onEnded={() => setIsPlaying(false)}
        />
      )}

      {/* Main Control Panel */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-full bg-primary hover:bg-slate-800 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 shrink-0"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
          </button>

          {/* Replay */}
          <button
            onClick={replay}
            title="Phát lại từ đầu"
            className="p-2.5 rounded-full text-slate-600 hover:bg-slate-100 transition shrink-0"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Speed Selector */}
          <button
            onClick={handleSpeedChange}
            className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200 hover:bg-slate-200 transition shrink-0"
          >
            Tốc độ {speed}x
          </button>
        </div>

        {/* Scrub bar / Progress */}
        <div className="w-full sm:flex-1 flex items-center gap-3">
          <span className="text-xs font-mono font-medium text-slate-500 min-w-[36px]">
            {formatTime(currentTime, isTTS)}
          </span>
          <input
            type="range"
            min="0"
            max={maxRange}
            value={currentTime}
            onChange={(e) => {
              const val = Number(e.target.value);
              setCurrentTime(val);
              if (audioRef.current) {
                audioRef.current.currentTime = val;
              } else {
                if (isPlaying) {
                   speakText(val); // Scrub!
                }
              }
            }}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <span className="text-xs font-mono font-medium text-slate-500 min-w-[36px]">
            {formatTime(maxRange, isTTS)}
          </span>
        </div>

        {/* Volume & Mute */}
        <button
          onClick={handleMuteChange}
          className="p-2.5 rounded-full text-slate-600 hover:bg-slate-100 transition hidden sm:block shrink-0"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>

      {/* Transcript toggle */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-bold">Bài đọc đính kèm (Transcript):</span>
        <button
          onClick={() => setShowTranscript(!showTranscript)}
          className="flex items-center gap-1.5 text-xs font-bold text-primary hover:text-accent transition"
        >
          {showTranscript ? (
            <>
              <EyeOff className="w-4 h-4" /> Ẩn bài đọc tiếng Đức
            </>
          ) : (
            <>
              <Eye className="w-4 h-4" /> Hiển thị bài đọc tiếng Đức
            </>
          )}
        </button>
      </div>

      {/* Hidden Transcript Content */}
      {showTranscript && (
        <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl text-xs leading-relaxed text-slate-700 font-medium animate-in fade-in">
          <p className="whitespace-pre-line">{transcript}</p>
        </div>
      )}
    </div>
  );
}
