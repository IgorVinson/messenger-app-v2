import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import SetHostname from "@/config";

const hostname = SetHostname()

export const fetchMessages= createAsyncThunk('messages/fetchMessages', async () => {
    const response = await axios.get(`${hostname}/messages`);
    return response.data;
});

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMessages.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchMessages.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchMessages.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const messagesReducer = messagesSlice.reducer;


