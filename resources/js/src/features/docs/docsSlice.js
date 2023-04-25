import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import docsService from "./docsService";

const initialState = {
    documents: [],
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
    async (args, thunkAPI) => {
        try {
            let file = await docsService.saveFile(args);
            const data = {
                file,
                name: file.name,
                private: false,
            };
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

export const archiveDocs = createAsyncThunk(
    "document/archive-documents",
    async (id, thunkAPI) => {
        try {
            return await docsService.archiveDocs(id);
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
        setDocument: (state, action) => {
            state.document = action.payload;
        },
        clear: (state) => {
            state.documents = [];
            state.document = null;
            state.file = null;
            state.type = "";
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
                state.documents = [action.payload, ...state.documents];
                state.message = "Document upload successful";
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
            .addCase(archiveDocs.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(archiveDocs.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const ind = state.documents.findIndex(
                    (val) => val.id === action.payload.id
                );
                state.documents.splice(ind, 1);
                state.documents = [...state.documents];
                state.message = "Document archived successful";
                state.type = action.type;
            })
            .addCase(archiveDocs.rejected, (state, action) => {
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
                const ind = state.documents.findIndex(
                    (val) => val.id === action.payload.id
                );
                state.documents.splice(ind, 1);
                state.documents = [...state.documents];
                state.message = "Document deleted successful";
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

export const { reset, setDocument, clear } = docsSlice.actions;
export default docsSlice.reducer;
