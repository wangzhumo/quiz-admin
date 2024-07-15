import type { Calculate, QuestionItem, ResultItem } from "@/pages/quizzes/create/types";

export interface CalculateComponentProps {
  result: ResultItem[],
  question: QuestionItem[],
  className?: string,
  calculate: Calculate
}
