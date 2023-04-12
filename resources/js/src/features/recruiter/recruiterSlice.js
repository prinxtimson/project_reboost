import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import recruiterService from "./recruiterService";

const initialState = {
    recruiters: null,
    recruiter: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getRecruiters = createAsyncThunk(
    "recruiter/get-recruiters",
    async (args, thunkAPI) => {
        try {
            return await recruiterService.getRecruiters();
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
    "recruiter/get-next-page",
    async (url, thunkAPI) => {
        try {
            return await recruiterService.getNextPage(url);
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

export const getRecruiterByUserId = createAsyncThunk(
    "recruiter/get-recruiter-by-user-id",
    async (uid, thunkAPI) => {
        try {
            return await recruiterService.getRecruiterByUserId(uid);
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

export const saveRecruiters = createAsyncThunk(
    "recruiter/save-recruiters",
    async (data, thunkAPI) => {
        try {
            return await recruiterService.saveRecruiters(data);
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

export const editRecruiters = createAsyncThunk(
    "recruiter/edit-recruiters",
    async (data, thunkAPI) => {
        try {
            return await recruiterService.editRecruiters(data);
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

export const deleteRecruiters = createAsyncThunk(
    "recruiter/del-recruiters",
    async (id, thunkAPI) => {
        try {
            return await recruiterService.deleteRecruiters(id);
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

export const recruiterSlice = createSlice({
    name: "recruiter",
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
            .addCase(getRecruiters.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRecruiters.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.recruiters = action.payload;
                state.type = action.type;
            })
            .addCase(getRecruiters.rejected, (state, action) => {
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
                state.recruiters = action.payload;
                state.type = action.type;
            })
            .addCase(getNextPage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getRecruiterByUserId.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRecruiterByUserId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.recruiter = action.payload;
                state.type = action.type;
            })
            .addCase(getRecruiterByUserId.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveRecruiters.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveRecruiters.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.recruiter = action.payload;
                state.type = action.type;
            })
            .addCase(saveRecruiters.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(editRecruiters.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editRecruiters.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.recruiter = action.payload;
                state.type = action.type;
            })
            .addCase(editRecruiters.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deleteRecruiters.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deleteRecruiters.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.message = action.payload;
                state.type = action.type;
            })
            .addCase(deleteRecruiters.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset } = recruiterSlice.actions;
export default recruiterSlice.reducer;
