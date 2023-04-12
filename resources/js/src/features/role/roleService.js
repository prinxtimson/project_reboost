const axios = window.axios;

const API_URL = "/api/users/roles";

const getRoles = async () => {
    const res = await axios.get(API_URL);

    return res.data;
};

const getDomains = async () => {
    const res = await axios.get(`${API_URL}/domains`);

    return res.data;
};

const getPrivileges = async () => {
    const res = await axios.get(`${API_URL}/privileges`);

    return res.data;
};

const editRole = async (data) => {
    const res = await axios.post(`${API_URL}/save`, data);

    return res.data;
};

const defaultRole = async (data) => {
    const res = await axios.post(`${API_URL}/default`, data);

    return res.data;
};

const deleteRole = async (data) => {
    const res = await axios.delete(`${API_URL}/remove/${data.id}`);

    return res.data;
};

const roleService = {
    getRoles,
    getDomains,
    getPrivileges,
    editRole,
    defaultRole,
    deleteRole,
};

export default roleService;
