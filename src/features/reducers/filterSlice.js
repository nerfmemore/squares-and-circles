import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    circle: true,
    square: true,
    red: true,
    green: true,
    blue: true,
    yellow: true,
    theme: 'all',
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        changer: (state, action) => {
            state[action.payload] = !state[action.payload];
        },
        themeChanger: (state, action) => {
            state.theme = action.payload;
        }
    }
})

export const {changer, themeChanger} = filtersSlice.actions;

export default filtersSlice.reducer;
export const selectAllFilters = (state) => state.filters;