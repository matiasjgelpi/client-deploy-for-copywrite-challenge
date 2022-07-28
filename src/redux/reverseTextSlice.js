import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const addReverseText = createAsyncThunk('reverseText/addReverseText', async (text) => {
    const response = await axios(`http://localhost:4000/iecho?text=${text}`);
    return response.data;
});

const reverseTextSlice = createSlice({
    name: 'reverseText',
    initialState: {
        listOfReverseText: [],
        status:'null',
    },
    extraReducers: {
        [addReverseText.pending]: (state, action) => {
            state.status = 'loading';
        },
        [addReverseText.fulfilled]: (state, action) => {
            state.listOfReverseText = [...state.listOfReverseText, action.payload];
            state.status = 'success';
        },
        [addReverseText.rejected]: (state, action) => {
            state.status = 'failed';
        },

    },
})

export default reverseTextSlice.reducer;
