import type { OptionItem, QuestionItem } from "@/pages/quizzes/create/types";
import { QuestionType } from "@/pages/quizzes/create/types";
import { produce } from "immer";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

enum CreatedStatus {
  None = 0,
  PreLaunch = 1,
  Created = 2,
  Draft = 3
}

interface Actions {
  updateQuestion: (question: QuestionItem) => void
  updateOption: (order: number, options: OptionItem[]) => void
  swapQuestionOrder: (currentOrder: number, targetOrder: number) => void
  addNewQuestion: (type: QuestionType) => void
  removeQuestion: (order: number) => void
  generateQuestion: (questions: string[]) => void
}
interface State {
  status: CreatedStatus
  questions: QuestionItem[]
}
const defaultOptions: Record<number, OptionItem[]> = {
  0: [
    {
      content: 'option 1',
      scoring: 0,
      order: 0
    },
    {
      content: 'option 2',
      scoring: 1,
      order: 1
    }
  ],
  1: [
    {
      content: 'option 1',
      scoring: 0,
      order: 0
    },
    {
      content: 'option 2',
      scoring: 1,
      order: 1
    },
    {
      content: 'option 3',
      scoring: 2,
      order: 3
    }
  ],
  2: [
    {
      content: 'option 1',
      scoring: 0,
      order: 0
    },
    {
      content: 'option 2',
      scoring: 1,
      order: 1
    }
  ]
}
const initialState = {
  status: CreatedStatus.None,
  defaultOptions: defaultOptions,
  questions: []
}
export const useQuizzesCreatedStore = create<State & Actions>()(
  devtools(
    immer(set => ({
      ...initialState,
      addNewQuestion: (type: QuestionType) =>
        set(
          state => {
            // Add an item to current questions.
            state.questions = produce(state.questions, draft => {
              draft.push({
                index: state.questions.length,
                ignore: false,
                order: state.questions.length,
                options: initialState.defaultOptions[type.valueOf()],
                type: type,
                id: state.questions.length.toString(),
                title: `Question ${state.questions.length}`,
                orientation: 'vertical',
                edit: false
              } as QuestionItem)
            })
          },
          false,
          { type: 'addDefaultQuestion' }
        ),
      removeQuestion: (order: number) => {
        set(state => {
          state.questions = produce(state.questions, draft => {
            // remove current
            // reset order value
            draft.splice(order, 1)
            draft.forEach((element, index) => {
              if (index >= order) {
                element.index = index
                element.order = index
              }
            })
            return draft
          })
        })
      },
      updateQuestion: (question: QuestionItem) => {
        set(
          state => {
            state.questions = produce(state.questions, draft => {
              const findIndex = state.questions.findIndex(value => {
                return value.order === question.order
              })
              if (findIndex >= 0) {
                draft[findIndex] = {
                  ...state.questions[findIndex],
                  ...question
                }
              }
              return draft
            })
          },
          false,
          {
            type: 'updateQuestion'
          }
        )
      },
      generateQuestion: (questions: string[]) => {
        set(state => {
          // if empty,just add
          state.questions = produce(state.questions, draft => {
            const oldQuestionLen = state.questions.length
            const newQuestions = questions.map((v, index) => {
              return {
                index: index + oldQuestionLen,
                title: v,
                type: QuestionType.TrueOrFalse,
                options:
                  initialState.defaultOptions[
                    QuestionType.TrueOrFalse.valueOf()
                  ],
                order: index + oldQuestionLen,
                ignore: false
              } as QuestionItem
            })
            return draft.concat(newQuestions)
          })
        })
      },
      updateOption: (order: number, options: OptionItem[]) => {
        set(state => {
          state.questions = produce(state.questions, draft => {
            if (draft.length > order) {
              draft[order].options = options
              return draft
            }
          })
        })
      },
      swapQuestionOrder: (currentOrder: number, targetOrder: number) => {
        set(state => {
          // order and change order
          state.questions = produce(state.questions, draft => {
            // return draft
            draft.forEach((value, index) => {
              const min = Math.min(currentOrder, targetOrder)
              const max = Math.max(currentOrder, targetOrder)
              if (index === currentOrder) {
                value.order = targetOrder
                value.index = targetOrder
              } else if (targetOrder > currentOrder) {
                if (index > min && index <= max) {
                  value.order -= 1
                  value.index -= 1
                }
              } else {
                if (index >= min && index < max) {
                  value.order += 1
                  value.index += 1
                }
              }
            })
            draft.sort((a, b) => a.order - b.order)
            return draft
          })
        })
      }
    })),
    {
      name: 'createdQuestion',
      store: 'createdQuestion'
    }
  )
)
