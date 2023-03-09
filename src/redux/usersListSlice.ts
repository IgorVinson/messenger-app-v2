import {createSlice, createAsyncThunk, AsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers= createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get('http://localhost:8080/users');
    return response.data;
});

const usersListSlice = createSlice({
    name: 'users',
    initialState: {
        data: [],
        isLoading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.isLoading = false;
            });
    },
});

export const usersListReducer = usersListSlice.reducer;

