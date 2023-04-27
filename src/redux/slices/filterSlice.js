import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId: 0,
  currentPage: 1,
  totalPages: 0,
  sort: {
    name: 'популярністю',
    sortProperty: 'rating',
  },
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload
    },

    setSort(state, action) {
      state.sort = action.payload
    },

    setCurrentPage(state, action) {
      state.currentPage = action.payload
    },

    setTotalPages(state, action) {
      state.totalPages = action.payload
    },
  },
})

export const { setCategoryId, setSort, setCurrentPage, setTotalPages } =
  filterSlice.actions

export default filterSlice.reducer
