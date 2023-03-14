import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    storedNumberOfColumns: 4
}

const columnsSlice = createSlice({
    name: 'columns',
    initialState,
    reducers: {
        changeNumberOfColumns: (state, action) => {
            state.storedNumberOfColumns = action.payload;
        }
    }
})

export default columnsSlice.reducer;
export const storedNumberOfColumns = (state) => state.columns.storedNumberOfColumns;
export const {changeNumberOfColumns} = columnsSlice.actions;