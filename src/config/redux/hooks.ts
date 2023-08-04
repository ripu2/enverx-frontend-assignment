import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { PayloadAction } from '@reduxjs/toolkit'
import { AppDispatch, AppState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppMultiDispatch = () => {
  const dispatch = useDispatch<AppDispatch>()

  return function (actions: PayloadAction<any>[]) {
    for (const action of actions) dispatch(action)
  }
}
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector