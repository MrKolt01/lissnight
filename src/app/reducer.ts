import { combineReducers } from '@reduxjs/toolkit'
import player from '../features/player/playerSlice'

const reducer = combineReducers({
  player,
})

export type RootState = ReturnType<typeof reducer>

export default reducer
