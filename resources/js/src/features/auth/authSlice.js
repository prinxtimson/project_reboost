import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
    user: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
    try {
        return await authService.login(data);
    } catch (err) {
        const msg =
            (err.response && err.response.data && err.response.data.message) ||
            err.response.data ||
            err.message ||
            err.toString();

        return thunkAPI.rejectWithValue(msg);
    }
});

export const getMe = createAsyncThunk("auth/get-me", async (args, thunkAPI) => {
    try {
        return await authService.getMe();
    } catch (err) {
        const msg =
            (err.response && err.response.data && err.response.data.message) ||
            err.response.data ||
            err.message ||
            err.toString();

        return thunkAPI.rejectWithValue(msg);
    }
});

export const editMe = createAsyncThunk(
    "auth/edit-me",
    async (args, thunkAPI) => {
        try {
            return await authService.editMe(args);
        } catch (err) {
            const msg =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.response.data ||
                err.message ||
                err.toString();

            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const editPassport = createAsyncThunk(
    "auth/edit-passport",
    async (args, thunkAPI) => {
        try {
            return await authService.editPassport(args);
        } catch (err) {
            const msg =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.response.data ||
                err.message ||
                err.toString();

            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const deletePassport = createAsyncThunk(
    "auth/delete-passport",
    async (args, thunkAPI) => {
        try {
            return await authService.deletePassport(args);
        } catch (err) {
            const msg =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.response.data ||
                err.message ||
                err.toString();

            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
});

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.type = "";
            state.message = "";
        },
        updatePassport: (state, action) => {
            state.user.passport = action.payload;
        },
        clear: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(logout.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(editMe.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user = action.payload;
                state.message = "Personal details have been saved";
            })
            .addCase(editMe.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(editPassport.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editPassport.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user.passport = action.payload;
                state.message = "Profile picture uploaded successfully";
            })
            .addCase(editPassport.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(deletePassport.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deletePassport.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user.passport = null;
                state.message = "Profile picture deleted successfully";
            })
            .addCase(deletePassport.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(getMe.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user = action.payload;
            })
            .addCase(getMe.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
                state.user = null;
            });
    },
});

export const { reset, updatePassport, clear } = authSlice.actions;
export default authSlice.reducer;
