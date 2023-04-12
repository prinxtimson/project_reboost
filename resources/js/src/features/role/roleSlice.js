import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import roleService from "./roleService";

const initialState = {
    roles: null,
    domains: null,
    privileges: null,
    role: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getRoles = createAsyncThunk(
    "role/get-roles",
    async (args, thunkAPI) => {
        try {
            return await roleService.getRoles();
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

export const getDomains = createAsyncThunk(
    "role/get-domains",
    async (args, thunkAPI) => {
        try {
            return await roleService.getDomains();
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

export const getPrivileges = createAsyncThunk(
    "role/get-privileges",
    async (args, thunkAPI) => {
        try {
            return await roleService.getPrivileges();
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

export const editRole = createAsyncThunk(
    "role/edit-role",
    async (data, thunkAPI) => {
        try {
            return await roleService.editRole(data);
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

export const defaultRole = createAsyncThunk(
    "role/default-role",
    async (data, thunkAPI) => {
        try {
            return await roleService.defaultRole(data);
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

export const deleteRole = createAsyncThunk(
    "role/delete-roles",
    async (data, thunkAPI) => {
        try {
            return await roleService.deleteRole(data);
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

export const roleSlice = createSlice({
    name: "role",
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
            .addCase(getRoles.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRoles.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.roles = action.payload;
                state.type = action.type;
            })
            .addCase(getRoles.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getDomains.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getDomains.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.domains = action.payload;
                state.type = action.type;
            })
            .addCase(getDomains.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getPrivileges.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getPrivileges.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.privileges = action.payload;
                state.type = action.type;
            })
            .addCase(getPrivileges.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(editRole.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(editRole.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.role = action.payload;
                state.type = action.type;
            })
            .addCase(editRole.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(defaultRole.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(defaultRole.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.role = action.payload;
                state.type = action.type;
            })
            .addCase(defaultRole.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deleteRole.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deleteRole.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                const ind = state.roles.findIndex(
                    (val) => val.id === action.payload
                );
                state.roles.splice(ind, 1);
                state.roles = [...state.roles];
                state.type = action.type;
            })
            .addCase(deleteRole.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset } = roleSlice.actions;
export default roleSlice.reducer;
