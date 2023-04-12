const axios = window.axios;

const API_URL = "/api/v1/docs";

const getMyDocuments = async () => {
    const res = await axios.get(API_URL);

    return res.data;
};

const getUserDocs = async (uid) => {
    const res = await axios.get(`${API_URL}/uid/${uid}`);

    return res.data;
};

const saveDocs = async (data) => {
    const res = await axios.post(API_URL, data);

    return res.data;
};

const updateDocs = async (data) => {
    const res = await axios.put(API_URL, data);

    return res.data;
};

const saveFile = async (data) => {
    const res = await axios.post(`${API_URL}/file`, data);

    return res.data;
};

const updateFile = async (data) => {
    const res = await axios.put(`${API_URL}/file`, data);

    return res.data;
};

const deleteDocs = async (id) => {
    const res = await axios.delete(`${API_URL}/remove/${id}`);

    return res.data;
};

const docsService = {
    getMyDocuments,
    getUserDocs,
    saveDocs,
    updateDocs,
    saveFile,
    updateFile,
    deleteDocs,
};

export default docsService;
