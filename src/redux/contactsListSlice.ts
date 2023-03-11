import {createSlice, createAsyncThunk, AsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts= createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:8080/users');
    return response.data;
});

const contactsListSlice = createSlice({
    name: 'contacts',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContacts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchContacts.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const contactsListReducer = contactsListSlice.reducer;

