import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "./taskService";

const initialState = {
    tasks: [],
    task: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getTasks = createAsyncThunk(
    "task/get-tasks",
    async (args, thunkAPI) => {
        try {
            return await taskService.getTasks();
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

export const getMyTasks = createAsyncThunk(
    "task/get-my-tasks",
    async (args, thunkAPI) => {
        try {
            return await taskService.getMyTasks();
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

export const getTask = createAsyncThunk(
    "task/get-task",
    async (args, thunkAPI) => {
        try {
            return await taskService.getTask(args);
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

export const updateTask = createAsyncThunk(
    "task/update-task",
    async (args, thunkAPI) => {
        try {
            return await taskService.updateTask(args);
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

export const assignTask = createAsyncThunk(
    "task/assign-task",
    async (args, thunkAPI) => {
        try {
            return await taskService.assignTask(args);
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

export const markTaskComplete = createAsyncThunk(
    "task/mark-task",
    async (args, thunkAPI) => {
        try {
            return await taskService.markTaskComplete(args);
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

export const archiveTask = createAsyncThunk(
    "task/archive-task",
    async (args, thunkAPI) => {
        try {
            return await taskService.archiveTask(args);
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

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.type = "";
            state.message = "";
        },
        clear: (state) => {
            state.tasks = [];
            state.task = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTasks.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.tasks = action.payload;
            })
            .addCase(getTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getMyTasks.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getMyTasks.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.tasks = action.payload;
            })
            .addCase(getMyTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getTask.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.task = action.payload;
                state.message = "Task fetched successful";
            })
            .addCase(getTask.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(markTaskComplete.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(markTaskComplete.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.task = action.payload;
                state.message = "Task marked complete";
            })
            .addCase(markTaskComplete.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(assignTask.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(assignTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.task = action.payload;
                state.message = "Task assign successful";
            })
            .addCase(assignTask.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(updateTask.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.type = action.type;
                state.task = action.payload;
                state.message = "Task updated successful";
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(archiveTask.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(archiveTask.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.task = action.payload;
                const ind = state.tasks.findIndex(
                    (val) => val.id === action.payload.id
                );
                state.tasks.splice(ind, 1);
                state.tasks = [...state.tasks];
                state.type = action.type;
                state.message = "Task archive successful";
            })
            .addCase(archiveTask.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset, clear } = taskSlice.actions;
export default taskSlice.reducer;
