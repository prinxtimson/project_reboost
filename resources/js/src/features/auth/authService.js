const axios = window.axios;

const API_URL = "/api/users";

const login = async (data) => {
    const res = await axios.post(`${API_URL}/login`, data);
    const token = res.headers.authorization;
    axios.defaults.headers.common["Authorization"] = token;
    localStorage.setItem("jwt_token", token);
    return res.data;
};

const getMe = async () => {
    const res = await axios.get(`${API_URL}/me`);

    return res.data;
};

const editMe = async (data) => {
    const res = await axios.put(`${API_URL}/edit`, data);

    return res.data;
};

const logout = async () => {
    const res = await axios.get(`${API_URL}/logout`);
    localStorage.removeItem("jwt_token");
    delete axios.defaults.headers.common["Authorization"];
    return res.data;
};

const authService = {
    login,
    editMe,
    logout,
    getMe,
};

export default authService;
