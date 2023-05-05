const axios = window.axios;

const API_URL = "/api/v1/tasks";

const getTasks = async () => {
    const res = await axios.get(`${API_URL}/all`);

    return res.data;
};

const getMyTasks = async () => {
    const res = await axios.get(API_URL);

    return res.data;
};

const getTask = async (id) => {
    const res = await axios.get(`${API_URL}/show/${id}`);

    return res.data;
};

const assignTask = async (data) => {
    const res = await axios.get(`${API_URL}/assign/${data.task}/${data.user}`);

    return res.data;
};

const markTaskComplete = async (id) => {
    const res = await axios.get(`${API_URL}/mark/${id}`);

    return res.data;
};

const updateTask = async (data) => {
    const res = await axios.put(`${API_URL}/${data.id}`, data);

    return res.data;
};

const archiveTask = async (id) => {
    const res = await axios.delete(`${API_URL}/archive/${id}`);

    return res.data;
};

const deleteTask = async (id) => {
    const res = await axios.delete(`${API_URL}/remove/${id}`);

    return res.data;
};

const taskService = {
    getTasks,
    getTask,
    getMyTasks,
    assignTask,
    markTaskComplete,
    archiveTask,
    deleteTask,
    updateTask,
};

export default taskService;
