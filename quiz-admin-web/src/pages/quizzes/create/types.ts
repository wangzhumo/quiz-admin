import type { ImageModel } from "@/model/types";

export interface CommonTabProps {
  onChangePage: (index: number) => void
  index: number
  count: number
}

export interface OptionItem {
  content?: string
  pic?: ImageModel
  order: number
  scoring: number
}

export interface QuestionItem {
  id: string
  index: number
  title?: string
  img?: ImageModel
  description?: string
  ignore: boolean
  order: number
  options: OptionItem[]
  type: QuestionType
  next: number
  orientation: 'horizontal' | 'vertical'
  edit: boolean
}

export enum QuestionType {
  /// yes or no
  TrueOrFalse = 0,
  /// rating
  Rating = 1,
  /// most match
  Matching = 2,
  /// custom
  Custom = 3
}

export interface Quizzes {
  name: string
  description: string
  startAt: number
  endAt: number
  status: number
  sort: number
  tag: string
  flag: number
  creator: string
  pic: ImageModel
  hint: string
  questions: QuestionItem[]
}

export enum ResultType {
  Markdown = 1,
  Html = 2,
  Image = 3
}

export interface ResultDetail {
  order: number
  data: string
  lock: boolean
}

export interface ResultItem {
  name: string
  type: ResultType
  order: number
  desc: ResultDetail[]
}

export interface Results {
  results: ResultItem[]
}

export enum CalcMode {
  Match = 1,
  Sun = 2
}

export interface Calculate {
  mode: CalcMode
  match: CalcMatch[]
  exec?: string
}

export interface CalcMatch {
  rules: CalcMatchRule[]
  resultOrder: number
}
export type CalcMatchRuleType = 'eq' | 'gr' | 'le' | 'gre' | 'lee'
export interface CalcMatchRule {
  mode: CalcMatchRuleType
  value: number
  order: number
}
