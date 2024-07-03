export interface CommonTabProps {
  onChangePage: (index: number) => void
  index: number
  count: number
}

export interface OptionItem {
  content?: string
  pic?: string
  order: number
  scoring: number
}


export interface QuestionItem {
  id: string
  index: number
  title?: string
  img?: string
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
  pic: string
  hint: string
  questions: QuestionItem[]
}
