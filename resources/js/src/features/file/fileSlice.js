import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import fileService from "./fileService";

const initialState = {
    passport: null,
    files: null,
    file: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getUserFile = createAsyncThunk(
    "file/get-user-file",
    async (id, thunkAPI) => {
        try {
            return await fileService.getUserFile(id);
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

export const getUserPassport = createAsyncThunk(
    "file/get-user-passport",
    async (id, thunkAPI) => {
        try {
            return await fileService.getUserPassport(id);
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

export const saveUserFile = createAsyncThunk(
    "file/save-user-file",
    async (data, thunkAPI) => {
        try {
            return await fileService.saveUserFile(data);
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

export const editUserFile = createAsyncThunk(
    "file/edit-user-file",
    async (data, thunkAPI) => {
        try {
            return await fileService.editUserFile(data);
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

export const deleteUserFile = createAsyncThunk(
    "file/delete-user-file",
    async (id, thunkAPI) => {
        try {
            return await fileService.deleteUserFile(id);
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

export const fileSlice = createSlice({
    name: "file",
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
            .addCase(getUserFile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getUserFile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.files = action.payload;
                state.type = action.type;
            })
            .addCase(getUserFile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getUserPassport.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getUserPassport.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.passport = action.payload;
                state.type = action.type;
            })
            .addCase(getUserPassport.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveUserFile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveUserFile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.file = action.payload;
                state.type = action.type;
            })
            .addCase(saveUserFile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(editUserFile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editUserFile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.file = action.payload;
                state.type = action.type;
            })
            .addCase(editUserFile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deleteUserFile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deleteUserFile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
                state.type = action.type;
            })
            .addCase(deleteUserFile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset } = fileSlice.actions;
export default fileSlice.reducer;
