import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import docsService from "./docsService";

const initialState = {
    documents: null,
    document: null,
    file: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getMyDocuments = createAsyncThunk(
    "document/get-my-documents",
    async (args, thunkAPI) => {
        try {
            return await docsService.getMyDocuments();
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

export const getUserDocs = createAsyncThunk(
    "document/get-user-documents",
    async (uid, thunkAPI) => {
        try {
            return await docsService.getUserDocs(uid);
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

export const saveDocs = createAsyncThunk(
    "document/save-documents",
    async (data, thunkAPI) => {
        try {
            return await docsService.saveDocs(data);
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

export const updateDocs = createAsyncThunk(
    "document/update-documents",
    async (data, thunkAPI) => {
        try {
            return await docsService.updateDocs(data);
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

export const saveFile = createAsyncThunk(
    "document/save-file",
    async (data, thunkAPI) => {
        try {
            return await docsService.saveFile(data);
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

export const updateFile = createAsyncThunk(
    "document/update-file",
    async (data, thunkAPI) => {
        try {
            return await docsService.updateFile(data);
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

export const deleteDocs = createAsyncThunk(
    "document/delete-documents",
    async (id, thunkAPI) => {
        try {
            return await docsService.deleteDocs(id);
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

export const docsSlice = createSlice({
    name: "document",
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
            .addCase(getMyDocuments.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getMyDocuments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.documents = action.payload;
                state.type = action.type;
            })
            .addCase(getMyDocuments.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getUserDocs.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getUserDocs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.documents = action.payload;
                state.type = action.type;
            })
            .addCase(getUserDocs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveDocs.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveDocs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.document = action.payload;
                state.type = action.type;
            })
            .addCase(saveDocs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(updateDocs.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(updateDocs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.document = action.payload;
                state.type = action.type;
            })
            .addCase(updateDocs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveFile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveFile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.file = action.payload;
                state.type = action.type;
            })
            .addCase(saveFile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(updateFile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(updateFile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.document = action.payload;
                state.type = action.type;
            })
            .addCase(updateFile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deleteDocs.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deleteDocs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
                state.type = action.type;
            })
            .addCase(deleteDocs.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset } = docsSlice.actions;
export default docsSlice.reducer;
