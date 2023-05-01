import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchService from "./searchService";

const initialState = {
    data: null,
    type: "",
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};

export const getSearch = createAsyncThunk(
    "search/get-search",
    async (data, thunkAPI) => {
        try {
            return await searchService.getSearch(data);
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

export const getShortLists = createAsyncThunk(
    "search/get-shortlist",
    async (args, thunkAPI) => {
        try {
            return await searchService.getShortLists();
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

export const getShortListsByDate = createAsyncThunk(
    "search/get-shortlist-by-date",
    async (args, thunkAPI) => {
        try {
            return await searchService.getShortListsByDate();
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

export const getFavourites = createAsyncThunk(
    "search/get-favourites",
    async (args, thunkAPI) => {
        try {
            return await searchService.getFavourites();
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

export const getRecruiterShortLists = createAsyncThunk(
    "search/get-recruiter-shortlist",
    async (id, thunkAPI) => {
        try {
            return await searchService.getRecruiterShortLists(id);
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

export const getCandidateFavourites = createAsyncThunk(
    "search/get-candidate-favourites",
    async (id, thunkAPI) => {
        try {
            return await searchService.getCandidateFavourites(id);
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

export const getSearchAnalytics = createAsyncThunk(
    "search/get-search-analytics",
    async (data, thunkAPI) => {
        try {
            return await searchService.getSearchAnalytics(data);
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

export const saveShortLists = createAsyncThunk(
    "search/save-shortlist",
    async (data, thunkAPI) => {
        try {
            return await searchService.saveShortLists(data);
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

export const saveFavourites = createAsyncThunk(
    "search/save-favourites",
    async (data, thunkAPI) => {
        try {
            return await searchService.saveFavourites(data);
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

export const getRequest = createAsyncThunk(
    "search/get-request",
    async (args, thunkAPI) => {
        try {
            return await searchService.getRequest();
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

export const getRequestList = createAsyncThunk(
    "search/get-request-list",
    async (args, thunkAPI) => {
        try {
            return await searchService.getRequestList();
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

export const getRecruiterRequest = createAsyncThunk(
    "search/get-recruiter-request",
    async (id, thunkAPI) => {
        try {
            return await searchService.getRecruiterRequest(id);
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

export const getRecruiterRequestList = createAsyncThunk(
    "search/get-recruiter-request-list",
    async (id, thunkAPI) => {
        try {
            return await searchService.getRecruiterRequestList(id);
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

export const getCandidatesRequestList = createAsyncThunk(
    "search/get-candidate-request-list",
    async (id, thunkAPI) => {
        try {
            return await searchService.getCandidatesRequestList(id);
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

export const saveRequest = createAsyncThunk(
    "search/save-request",
    async (data, thunkAPI) => {
        try {
            return await searchService.saveRequest(data);
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

export const saveAllRequest = createAsyncThunk(
    "search/save-all-request",
    async (data, thunkAPI) => {
        try {
            return await searchService.saveAllRequest(data);
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

export const toggleRequestApproval = createAsyncThunk(
    "search/toggle-request-approval",
    async (id, thunkAPI) => {
        try {
            return await searchService.toggleRequestApproval(id);
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

export const getToken = createAsyncThunk(
    "search/get-token",
    async (args, thunkAPI) => {
        try {
            return await searchService.getToken();
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

export const getTokenPage = createAsyncThunk(
    "search/get-token-page",
    async (args, thunkAPI) => {
        try {
            return await searchService.getTokenPage();
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

export const getPages = createAsyncThunk(
    "search/get-pages",
    async (args, thunkAPI) => {
        try {
            return await searchService.getPages();
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

export const saveSnippet = createAsyncThunk(
    "search/save-snippet",
    async (data, thunkAPI) => {
        try {
            return await searchService.saveSnippet(data);
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

export const deletePages = createAsyncThunk(
    "search/delete-shortlist",
    async (id, thunkAPI) => {
        try {
            return await searchService.deletePages(id);
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

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.type = "";
            state.message = "";
        },
        clear: (state) => {
            state.data = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getSearch.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getSearch.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getSearch.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getShortLists.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getShortLists.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getShortLists.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getShortListsByDate.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getShortListsByDate.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getShortListsByDate.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getFavourites.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getFavourites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getFavourites.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getCandidateFavourites.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getCandidateFavourites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getCandidateFavourites.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getCandidatesRequestList.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getCandidatesRequestList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getCandidatesRequestList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getPages.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getPages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getPages.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getRecruiterRequest.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRecruiterRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getRecruiterRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getRecruiterRequestList.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRecruiterRequestList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getRecruiterRequestList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getRecruiterShortLists.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRecruiterShortLists.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getRecruiterShortLists.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getRequest.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getRequestList.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getRequestList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getRequestList.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getSearchAnalytics.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getSearchAnalytics.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getSearchAnalytics.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveShortLists.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveShortLists.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(saveShortLists.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getToken.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getToken.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getToken.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(getTokenPage.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(getTokenPage.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(getTokenPage.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveFavourites.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveFavourites.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(saveFavourites.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveRequest.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(saveRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveAllRequest.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveAllRequest.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(saveAllRequest.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(toggleRequestApproval.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(toggleRequestApproval.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(toggleRequestApproval.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(saveSnippet.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(saveSnippet.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(saveSnippet.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            })
            .addCase(deletePages.pending, (state, action) => {
                state.isLoading = true;
                state.type = action.type;
            })
            .addCase(deletePages.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.data = action.payload;
                state.type = action.type;
            })
            .addCase(deletePages.rejected, (state, action) => {
                state.isLoading = false;
                state.isError = true;
                state.type = action.type;
                state.message = action.payload;
            });
    },
});

export const { reset, clear } = searchSlice.actions;
export default searchSlice.reducer;
