
import { PayloadAction } from '@reduxjs/toolkit'
import { State } from '../types/types'

export const reducers = {
  setCounter: (state: State, action: PayloadAction<number>) => {
    state.counter = action.payload
  }
}