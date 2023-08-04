import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './state'
import { reducers } from './hooks'
import { AppState } from '../../../config/redux/store'

export const HomeSlice = createSlice({
  name: 'home',
  initialState,
  reducers
})

export const homeActions = HomeSlice.actions
export const homeReducer = HomeSlice.reducer
export const selectHome = (state: AppState) => state.home
export default HomeSlice.reducer