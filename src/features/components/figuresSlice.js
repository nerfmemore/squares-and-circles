import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";


const initialState = {
    figures: [],
    status: 'idle',
    error: null,
}

export const fetchFigures = createAsyncThunk('figure/fetchFigures', () => {
    return axios
        .get('https://raw.githubusercontent.com/mSnus/test-task/main/data/test.json')
        .then((response) => response.data)
})

const figuresSlice = createSlice({
    name: 'figure',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchFigures.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchFigures.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.figures = action.payload
            })
            .addCase(fetchFigures.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default figuresSlice.reducer

export const selectAllFigures = (state) => state.figures.figures