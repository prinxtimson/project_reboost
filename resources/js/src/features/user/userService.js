const axios = window.axios;

const API_URL = "/api/users";

const getUsers = async () => {
    const res = await axios.get(API_URL);

    return res.data;
};

const getAdmins = async (data) => {
    if (data) {
        const res = await axios.get(
            `${API_URL}/admin?order_by=${data.orderBy}&sort_by=${data.sortBy}`
        );

        return res.data;
    } else {
        const res = await axios.get(`${API_URL}/admin`);

        return res.data;
    }
};

const searchAdmins = async (query) => {
    const res = await axios.get(`${API_URL}/admin/search?query=${query}`);

    return res.data;
};

const getCandidates = async (data) => {
    if (data) {
        const res = await axios.get(
            `${API_URL}/candidate?order_by=${data.orderBy}&sort_by=${data.sortBy}`
        );

        return res.data;
    } else {
        const res = await axios.get(`${API_URL}/candidate`);

        return res.data;
    }
};

const searchCandidates = async (query) => {
    const res = await axios.get(`${API_URL}/candidate/search?query=${query}`);

    return res.data;
};

const getRecruiters = async (data) => {
    if (data) {
        const res = await axios.get(
            `${API_URL}/recruiter?order_by=${data.orderBy}&sort_by=${data.sortBy}`
        );

        return res.data;
    } else {
        const res = await axios.get(`${API_URL}/recruiter`);

        return res.data;
    }
};

const searchRecruiters = async (query) => {
    const res = await axios.get(`${API_URL}/recruiter/search?query=${query}`);

    return res.data;
};

const getNextPage = async (url) => {
    const res = await axios.get(url);

    return res.data;
};

const getUserByName = async (name, type) => {
    const res = await axios.get(`${API_URL}/s/${name}/${type}`);

    return res.data;
};

const editUser = async (data) => {
    const res = await axios.put(`${API_URL}/${data.id}`, data);

    return res.data;
};

const updateUser = async (data) => {
    const res = await axios.put(`${API_URL}/edit/${data.id}`, data);

    return res.data;
};

const changePassword = async (data) => {
    const res = await axios.post(`${API_URL}/changePwd`, data);

    return res.data;
};

const editUserRole = async (data) => {
    const res = await axios.put(`${API_URL}/edit/role/${data.id}`, data);

    return res.data;
};

const addNewUser = async (data) => {
    const res = await axios.post(`${API_URL}/register`, data);

    return res.data;
};

const verifyNewUser = async (data) => {
    const res = await axios.post(`${API_URL}/register/verify`, data);

    return res.data;
};

const forgotPassword = async (data) => {
    const res = await axios.post(`${API_URL}/recover`, data);

    return res.data;
};

const userVerification = async (data) => {
    const res = await axios.post(`${API_URL}/verification`, data);

    return res.data;
};

const resetPassword = async (data) => {
    const res = await axios.post(`${API_URL}/password/reset`, data);

    return res.data;
};

const regenerateToken = async (data) => {
    const res = await axios.post(
        `${API_URL}/regenerate-token/${data.id}`,
        data
    );

    return res.data;
};

const deleteUser = async (data) => {
    const res = await axios.delete(`${API_URL}/remove/${data.id}`);

    return res.data;
};

const userService = {
    getUsers,
    getUserByName,
    getNextPage,
    getAdmins,
    getCandidates,
    getRecruiters,
    searchAdmins,
    searchCandidates,
    searchRecruiters,
    editUser,
    updateUser,
    changePassword,
    editUserRole,
    addNewUser,
    verifyNewUser,
    forgotPassword,
    userVerification,
    resetPassword,
    regenerateToken,
    deleteUser,
};

export default userService;
