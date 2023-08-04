import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { homeReducer } from '../../modules/home/redux'


const makeStore = () =>
  configureStore({
    reducer: {
      home: homeReducer
    },
    devTools: true
  })

const store = makeStore()

export type AppDispatch = typeof store.dispatch
export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action>
export default store