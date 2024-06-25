import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

enum CreatedStatus {
  None,
  PreLaunch,
  Created,
  Draft
}

interface Actions {
  update: () => void
}
interface State {
  status: CreatedStatus
}

const initialState = {
  status: CreatedStatus.None
}
export const useQuizzesCreatedStore = create<State & Actions>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,
        update: () => {}
      }),
      {
        name: 'createdStore'
      }
    )
  )
)
