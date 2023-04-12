import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import profileService from "./profileService";

const initialState = {
    profile: null,
    skills: [],
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getMyProfile = createAsyncThunk(
    "profile/get",
    async (args, thunkAPI) => {
        try {
            return await profileService.getMyProfile();
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

export const saveStatus = createAsyncThunk(
    "profile/save-status",
    async (data, thunkAPI) => {
        try {
            return await profileService.saveStatus(data);
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

export const getSkillSet = createAsyncThunk(
    "profile/get-skill-set",
    async (args, thunkAPI) => {
        try {
            return await profileService.getSkillSet();
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

export const deleteProfile = createAsyncThunk(
    "profile/delete",
    async (args, thunkAPI) => {
        try {
            return await profileService.deleteProfile();
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

export const profileSlice = createSlice({
    name: "profile",
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
            .addCase(getMyProfile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getMyProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.profile = action.payload;
                state.type = action.type;
            })
            .addCase(getMyProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveStatus.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveStatus.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.profile = action.payload;
                state.type = action.type;
            })
            .addCase(saveStatus.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deleteProfile.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deleteProfile.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.profile = null;
                state.type = action.type;
            })
            .addCase(deleteProfile.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getSkillSet.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getSkillSet.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.skills = action.payload;
                state.type = action.type;
            })
            .addCase(getSkillSet.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset } = profileSlice.actions;
export default profileSlice.reducer;
