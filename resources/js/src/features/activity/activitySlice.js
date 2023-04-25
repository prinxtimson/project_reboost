import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import activityService from "./activityService";

const initialState = {
    activities: [],
    activity: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getActivities = createAsyncThunk(
    "activity/get-activities",
    async (args, thunkAPI) => {
        try {
            return await activityService.getActivities();
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

export const getMyActivities = createAsyncThunk(
    "activity/get-my-activities",
    async (args, thunkAPI) => {
        try {
            return await activityService.getMyActivities();
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

export const activitySlice = createSlice({
    name: "activity",
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
            .addCase(getActivities.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getActivities.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.activities = action.payload;
                state.message = "Activities fetched";
            })
            .addCase(getActivities.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getMyActivities.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getMyActivities.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.activities = action.payload;
                state.message = "Activities fetched";
            })
            .addCase(getMyActivities.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset } = activitySlice.actions;
export default activitySlice.reducer;
