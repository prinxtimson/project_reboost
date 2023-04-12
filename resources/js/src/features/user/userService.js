const axios = window.axios;

const API_URL = "/api/users";

const getUsers = async () => {
    const res = await axios.get(API_URL);

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
