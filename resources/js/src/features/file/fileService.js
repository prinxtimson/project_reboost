const axios = window.axios;

const API_URL = "/api/users/file";

const getUserFile = async (id) => {
    const res = await axios.get(`${API_URL}/cid/${id}`);

    return res.data;
};

const getUserPassport = async (id) => {
    const res = await axios.get(`${API_URL}/subscription/${id}/passport`);

    return res.data;
};

const saveUserFile = async (data) => {
    const res = await axios.post(`${API_URL}`, data);

    return res.data;
};

const editUserFile = async (data) => {
    const res = await axios.put(`${API_URL}/edit/${data.id}`, data);

    return res.data;
};

const deleteUserFile = async (data) => {
    const res = await axios.delete(`${API_URL}/remove/${data.id}`);

    return res.data;
};

const fileService = {
    getUserFile,
    getUserPassport,
    saveUserFile,
    editUserFile,
    deleteUserFile,
};

export default fileService;
