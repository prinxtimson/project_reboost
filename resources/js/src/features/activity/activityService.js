const axios = window.axios;

const API_URL = "/api/v1/activities";

const getActivities = async () => {
    const res = await axios.get(`${API_URL}/all`);

    return res.data;
};

const getMyActivities = async () => {
    const res = await axios.get(API_URL);

    return res.data;
};

const activityService = {
    getActivities,
    getMyActivities,
};

export default activityService;
