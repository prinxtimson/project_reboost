import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import candidateService from "./candidateService";

const initialState = {
    candidates: null,
    candidate: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getCandidates = createAsyncThunk(
    "candidate/get-candidates",
    async (args, thunkAPI) => {
        try {
            return await candidateService.getCandidates();
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

export const getNextPage = createAsyncThunk(
    "candidate/get-next-page",
    async (url, thunkAPI) => {
        try {
            return await candidateService.getNextPage(url);
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

export const getCandidateByDate = createAsyncThunk(
    "candidate/get-candidate-by-date",
    async (uid, thunkAPI) => {
        try {
            return await candidateService.getCandidateByDate(uid);
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

export const getCandidateByUserId = createAsyncThunk(
    "candidate/get-candidate-by-user-id",
    async (uid, thunkAPI) => {
        try {
            return await candidateService.getCandidateByUserId(uid);
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

export const saveCandidates = createAsyncThunk(
    "candidate/save-candidates",
    async (data, thunkAPI) => {
        try {
            return await candidateService.saveCandidates(data);
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

export const editCandidates = createAsyncThunk(
    "candidate/edit-candidates",
    async (data, thunkAPI) => {
        try {
            return await candidateService.editCandidates(data);
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

export const deleteCandidates = createAsyncThunk(
    "candidate/del-candidates",
    async (id, thunkAPI) => {
        try {
            return await candidateService.deleteCandidates(id);
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

export const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.type = "";
            state.message = "";
        },
        clear: (state) => {
            state.candidate = null;
            state.candidates = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCandidates.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getCandidates.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.candidates = action.payload;
                state.type = action.type;
            })
            .addCase(getCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getCandidateByDate.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getCandidateByDate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.candidates = action.payload;
                state.type = action.type;
            })
            .addCase(getCandidateByDate.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getNextPage.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getNextPage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.candidates = action.payload;
                state.type = action.type;
            })
            .addCase(getNextPage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getCandidateByUserId.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getCandidateByUserId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.candidate = action.payload;
                state.type = action.type;
            })
            .addCase(getCandidateByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveCandidates.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveCandidates.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.candidate = action.payload;
                state.type = action.type;
            })
            .addCase(saveCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(editCandidates.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editCandidates.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.candidate = action.payload;
                state.type = action.type;
            })
            .addCase(editCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deleteCandidates.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deleteCandidates.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
                state.type = action.type;
            })
            .addCase(deleteCandidates.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset, clear } = candidateSlice.actions;
export default candidateSlice.reducer;
