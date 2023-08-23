import { createSlice } from '@reduxjs/toolkit';

const filterState = { filter: '' };

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,
  reducers: {
    filterContacts: {
      reducer: (state, action) => {
        state.filter = action.payload;
      },
    },
  },
});

export const { filterContacts } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
