import { Search } from './types'
import { createSlice } from '@reduxjs/toolkit'

const initialState: Search = {
  searchResult: { searchInput: '', searchArr: [] },
}

const searchSlice = createSlice({ name: 'search', initialState, reducers: {} })

export const {} = searchSlice.actions

export default searchSlice.reducer
