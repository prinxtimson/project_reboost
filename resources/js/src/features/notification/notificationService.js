const axios = window.axios;

const API_URL = "/api/v1/notification";

const getNotification = async () => {
    const res = await axios.get(API_URL);

    return res.data;
};

const markNotification = async () => {
    const res = await axios.get(`${API_URL}/mark`);

    return res.data;
};

const profileView = async (data) => {
    const res = await axios.get(`${API_URL}/view`, data);

    return res.data;
};

const notificationService = {
    getNotification,
    markNotification,
    profileView,
};

export default notificationService;
