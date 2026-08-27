export type QualityRating = "AGAIN" | "HARD" | "GOOD" | "EASY";

export interface SM2State {
  repetitions: number;
  interval: number; // in days
  ease: number; // base 2.5
  status: "New" | "Learning" | "Review" | "Known";
}

export interface SM2Result extends SM2State {
  nextReview: Date;
}

/**
 * SuperMemo SM-2 Algorithm adaptation for B1 Vocabulary Learning
 * Rating mapping:
 * AGAIN = quality 1 (reset repetition)
 * HARD  = quality 2 (small interval increase)
 * GOOD  = quality 3 (normal interval multiplier)
 * EASY  = quality 5 (bonus interval boost)
 */
export function calculateSM2(
  rating: QualityRating,
  currentState: SM2State
): SM2Result {
  let { repetitions, interval, ease } = currentState;
  let q = 3;

  switch (rating) {
    case "AGAIN":
      q = 1;
      break;
    case "HARD":
      q = 2;
      break;
    case "GOOD":
      q = 3;
      break;
    case "EASY":
      q = 5;
      break;
  }

  // Update Ease Factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  ease = ease + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (ease < 1.3) ease = 1.3;

  if (q < 3) {
    // Incorrect / Struggle
    repetitions = 0;
    interval = 1; // repeat tomorrow
  } else {
    // Correct
    if (repetitions === 0) {
      interval = 1;
    } else if (repetitions === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease);
    }
    repetitions += 1;
  }

  // Determine status
  let status: SM2State["status"] = "Learning";
  if (repetitions >= 5 || interval >= 21) {
    status = "Known";
  } else if (repetitions >= 1) {
    status = "Review";
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    repetitions,
    interval,
    ease: Number(ease.toFixed(2)),
    status,
    nextReview,
  };
}
