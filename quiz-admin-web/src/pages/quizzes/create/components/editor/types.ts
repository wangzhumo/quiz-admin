import type { OptionItem, QuestionItem } from "@/pages/quizzes/create/types";

export interface OptionCommonProps {
  question: QuestionItem,
  options: OptionItem[],
  order: number
}