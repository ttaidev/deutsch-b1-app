export type ListeningQuestionType = "multiple_choice" | "true_false" | "fill_blank";

export interface ListeningQuestion {
  id: number;
  question: string;
  type: ListeningQuestionType;
  options?: string[]; // For multiple_choice and true_false
  correct: string; // The correct option string or the exact word for fill_blank
  explanation: string;
}

export interface ListeningExercise {
  id: string;
  title: string;
  level: string;
  topic: string;
  duration: string;
  type: string; // e.g., "Hội thoại ngắn", "Điền từ vào chỗ trống", "Độc thoại dài"
  transcript: string;
  questions: ListeningQuestion[];
}

import { HOEREN_T1_FULL } from "./data_t1";
import { HOEREN_T2_FULL } from "./data_t2";
import { HOEREN_T3_FULL } from "./data_t3";

export const HOEREN_EXERCISES: ListeningExercise[] = [
  ...HOEREN_T1_FULL,
  ...HOEREN_T2_FULL,
  ...HOEREN_T3_FULL
];
