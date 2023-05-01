const axios = window.axios;

const API_URL_SEARCH = "/api/v1/search";
const API_URL_REQUEST = "/api/v1/request";
const API_URL_PAGE = "/api/v1/snippets";

const getSearch = async (data) => {
    const res = await axios.post(API_URL_SEARCH, data);
    return res.data;
};

const getShortLists = async () => {
    const res = await axios.get(`${API_URL_SEARCH}/shortlist`);
    return res.data;
};

const getShortListsByDate = async () => {
    const res = await axios.get(`${API_URL_SEARCH}/shortlist/by-date`);
    return res.data;
};

const getFavourites = async () => {
    const res = await axios.get(`${API_URL_SEARCH}/favourite`);
    return res.data;
};

const getRecruiterShortLists = async (id) => {
    const res = await axios.get(`${API_URL_SEARCH}/shortlist/${id}`);
    return res.data;
};

const getCandidateFavourites = async (id) => {
    const res = await axios.get(`${API_URL_SEARCH}/favourite/${id}`);
    return res.data;
};

const getSearchAnalytics = async (id) => {
    const res = await axios.get(`${API_URL_SEARCH}/terms/${id}`);
    return res.data;
};

const saveShortLists = async (data) => {
    const res = await axios.post(`${API_URL_SEARCH}/shortlist`, data);
    return res.data;
};

const saveFavourites = async (data) => {
    const res = await axios.post(`${API_URL_SEARCH}/favourite`, data);
    return res.data;
};

const getRequest = async () => {
    const res = await axios.get(API_URL_REQUEST);
    return res.data;
};

const getRequestList = async () => {
    const res = await axios.get(`${API_URL_REQUEST}/list`);
    return res.data;
};

const getRecruiterRequest = async (id) => {
    const res = await axios.get(`${API_URL_REQUEST}/rid/${id}`);
    return res.data;
};

const getRecruiterRequestList = async (id) => {
    const res = await axios.get(`${API_URL_REQUEST}/list/rid/${id}`);
    return res.data;
};

const getCandidatesRequestList = async (id) => {
    const res = await axios.get(`${API_URL_REQUEST}/list/cid/${id}`);
    return res.data;
};

const saveRequest = async (data) => {
    const res = await axios.post(API_URL_REQUEST, data);
    return res.data;
};

const toggleRequestApproval = async (id) => {
    const res = await axios.get(`${API_URL_REQUEST}/toggle/${id}`);
    return res.data;
};

const saveAllRequest = async (data) => {
    const res = await axios.post(`${API_URL_REQUEST}/all`, data);
    return res.data;
};

const getToken = async () => {
    const res = await axios.get(`${API_URL_SEARCH}/token`);
    return res.data;
};

const getTokenPage = async () => {
    const res = await axios.get(`${API_URL_PAGE}/name/token`);
    return res.data;
};

const saveSnippet = async (data) => {
    const res = await axios.post(API_URL_PAGE, data);
    return res.data;
};

const getPages = async () => {
    const res = await axios.get(API_URL_PAGE);
    return res.data;
};

const deletePages = async (id) => {
    const res = await axios.delete(`${API_URL_PAGE}/remove/${id}`);
    return res.data;
};

const searchService = {
    getSearch,
    getShortLists,
    getFavourites,
    getShortListsByDate,
    getCandidateFavourites,
    getCandidatesRequestList,
    getPages,
    getRecruiterRequest,
    getRecruiterRequestList,
    getRecruiterShortLists,
    getSearchAnalytics,
    saveShortLists,
    saveFavourites,
    getRequest,
    getRequestList,
    saveRequest,
    toggleRequestApproval,
    saveAllRequest,
    getToken,
    getToken,
    saveSnippet,
    getTokenPage,
    deletePages,
};

export default searchService;
