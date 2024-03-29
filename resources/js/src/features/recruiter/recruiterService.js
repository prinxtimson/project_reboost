const axios = window.axios;

const API_URL = "/api/v1/profile/recruiters";

const getRecruiters = async () => {
    const res = await axios.get(API_URL);
    return res.data;
};

const getNextPage = async (url) => {
    const res = await axios.get(url);
    return res.data;
};

const saveRecruiters = async (data) => {
    const res = await axios.post(API_URL, data);
    return res.data;
};

const getRecruiterByUserId = async (uid) => {
    const res = await axios.get(`${API_URL}/${uid}`);
    return res.data;
};

const getRecruitersByDate = async () => {
    const res = await axios.get(`${API_URL}/by-date`);
    return res.data;
};

const editRecruiters = async (data) => {
    const res = await axios.put(API_URL, data);
    return res.data;
};

const verifyRecruiter = async (id) => {
    const res = await axios.get(`${API_URL}/verify/${id}`);
    return res.data;
};

const rejectRecruiter = async (data) => {
    const res = await axios.put(`${API_URL}/reject/${data.id}`, data);
    return res.data;
};

const deleteRecruiters = async (id) => {
    const res = await axios.delete(`${API_URL}/remove/${id}`);
    return res.data;
};

const recruiterService = {
    getRecruiters,
    getNextPage,
    saveRecruiters,
    getRecruitersByDate,
    getRecruiterByUserId,
    editRecruiters,
    verifyRecruiter,
    rejectRecruiter,
    deleteRecruiters,
};

export default recruiterService;
