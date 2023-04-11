import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  activeFilter: 0,
  sort: {
    name: 'популярністю',
    sortProperty: 'rating',
  },
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setActiveFilter(state, action) {
      state.activeFilter = action.payload
    },
    setSortItems(state, action) {
      state.sort = action.payload
    },
    setFitlers(state, action) {
      state.sort = action.payload.sort
      state.activeFilter = Number(action.payload.activeFilter)
    },
  },
})

export const { setActiveFilter, setSortItems, setFitlers } = filterSlice.actions

export default filterSlice.reducer
