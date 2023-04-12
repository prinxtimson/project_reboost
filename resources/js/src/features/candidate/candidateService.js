const axios = window.axios;

const API_URL = "/api/v1/profile/candidates";

const getCandidates = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

const getNextPage = async (url) => {
    const res = await axios.get(url);
    return res.data;
};

const saveCandidates = async (data) => {
    const res = await axios.post(API_URL, data);
    return res.data;
};

const getCandidateByUserId = async (uid) => {
    const res = await axios.get(`${API_URL}/${uid}`);
    return res.data;
};

const editCandidates = async (data) => {
    const res = await axios.put(API_URL, data);
    return res.data;
};

const deleteCandidates = async (id) => {
    const res = await axios.delete(`${API_URL}/remove/${id}`);
    return res.data;
};

const candidateService = {
    getCandidates,
    getNextPage,
    saveCandidates,
    getCandidateByUserId,
    editCandidates,
    deleteCandidates,
};

export default candidateService;
