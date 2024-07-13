import {createSlice} from "@reduxjs/toolkit";
import {NewUser, usersAPI} from "../../api/UsersAPI/usersAPI";
import {createAppAsyncThunk} from "../../hooks/hooks";

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    isAuthenticated: false,
    status: 'idle' as RequestStatusType,
    error: null as string | null,
}

export const loginUser = createAppAsyncThunk<string, NewUser>(
    'loginSlice/loginUser',
    async (data, thunkAPI) => {
        const {rejectWithValue} = thunkAPI;
        try {
            const {token} = await usersAPI.loginUser(data).then(res => res.data);
            return token;
        } catch (e) {
            const error = e as {message: string};
            return rejectWithValue(error.message);
        }
    }
)


const loginSlice = createSlice({
    name: "loginSlice",
    initialState: initialState,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(
            loginUser.pending,
            (state) => {
                state.status = 'loading';
                state.error = null;
            });
        builder.addCase(
            loginUser.fulfilled,
            (state, action) => {
                state.status = 'succeeded';
                state.isAuthenticated = true;
                localStorage.setItem('token', action.payload);
            });
        builder.addCase(
            loginUser.rejected,
            (state, action) => {
                state.status = 'failed';
                if (action.payload) {
                    state.error = action.payload;
                }
            }
        )
    }
})

export const {logout, login} = loginSlice.actions;
export default loginSlice.reducer;