const axios = window.axios;

const API_URL = "/api/v1/profile";

const getMyProfile = async () => {
    const res = await axios.get(API_URL);

    return res.data;
};

const saveStatus = async (data) => {
    const res = await axios.put(`${API_URL}/status`, data);

    return res.data;
};

const getSkillSet = async () => {
    const res = await axios.get(`${API_URL}/skillset`);

    return res.data;
};

const getNextPage = async (url) => {
    const res = await axios.get(url);

    return res.data;
};

const deleteProfile = async () => {
    const res = await axios.delete("/api/rup");

    return res.data;
};

const profileService = {
    getMyProfile,
    saveStatus,
    getSkillSet,
    getNextPage,
    deleteProfile,
};

export default profileService;
