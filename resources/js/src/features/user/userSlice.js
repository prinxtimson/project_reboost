import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

const initialState = {
    users: null,
    user: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getUsers = createAsyncThunk(
    "user/get-users",
    async (args, thunkAPI) => {
        try {
            return await userService.getUsers();
        } catch (err) {
            const msg =
                (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString();

            return thunkAPI.rejectWithValue(msg);
        }
    }
);

export const getUserByName = createAsyncThunk(
    "user/get-user-by-name",
    async (data, thunkAPI) => {
        try {
            return await userService.getUserByName(data.name, data.type);
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

export const editUser = createAsyncThunk(
    "user/edit-user",
    async (data, thunkAPI) => {
        try {
            return await userService.editUser(data);
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

export const updateUser = createAsyncThunk(
    "user/update-user",
    async (data, thunkAPI) => {
        try {
            return await userService.updateUser(data);
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

export const changePassword = createAsyncThunk(
    "user/change-password",
    async (data, thunkAPI) => {
        try {
            return await userService.changePassword(data);
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

export const editUserRole = createAsyncThunk(
    "user/edit-user-role",
    async (data, thunkAPI) => {
        try {
            return await userService.editUserRole(data);
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

export const addNewUser = createAsyncThunk(
    "user/add-new-user",
    async (data, thunkAPI) => {
        try {
            return await userService.addNewUser(data);
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

export const verifyNewUser = createAsyncThunk(
    "user/verify-new-user",
    async (data, thunkAPI) => {
        try {
            return await userService.verifyNewUser(data);
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

export const forgotPassword = createAsyncThunk(
    "user/forgot-password",
    async (data, thunkAPI) => {
        try {
            return await userService.forgotPassword(data);
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

export const userVerification = createAsyncThunk(
    "user/user-verification",
    async (data, thunkAPI) => {
        try {
            return await userService.userVerification(data);
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

export const resetPassword = createAsyncThunk(
    "user/reset-password",
    async (data, thunkAPI) => {
        try {
            return await userService.resetPassword(data);
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

export const regenerateToken = createAsyncThunk(
    "user/regenerate-token",
    async (data, thunkAPI) => {
        try {
            return await userService.regenerateToken(data);
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

export const deleteUser = createAsyncThunk(
    "user/delete-user",
    async (data, thunkAPI) => {
        try {
            return await userService.deleteUser(data);
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

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.type = "";
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.users = action.payload;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getUserByName.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getUserByName.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user = action.payload;
            })
            .addCase(getUserByName.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(editUser.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user = action.payload;
            })
            .addCase(editUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(updateUser.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(updateUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.users = action.payload;
            })
            .addCase(updateUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(changePassword.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(changePassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(changePassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(editUserRole.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editUserRole.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(editUserRole.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(addNewUser.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(addNewUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.user = action.payload;
            })
            .addCase(addNewUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(verifyNewUser.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(verifyNewUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(verifyNewUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(forgotPassword.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(userVerification.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(userVerification.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(userVerification.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(resetPassword.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(regenerateToken.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(regenerateToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(regenerateToken.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deleteUser.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.users = action.payload;
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset } = userSlice.actions;
export default userSlice.reducer;
