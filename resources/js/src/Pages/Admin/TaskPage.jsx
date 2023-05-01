import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import moment from "moment";
import {
    archiveTask,
    getTask,
    reset,
    updateTask,
    clear,
} from "../../features/task/taskSlice";
import { toast } from "react-toastify";
import { getAdmins } from "../../features/user/userSlice";

const TaskPage = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    const { task, isLoading, isError, isSuccess, message, type } = useSelector(
        (state) => state.task
    );

    const { users } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getTask(id));
        dispatch(getAdmins());

        return () => {
            dispatch(clear());
        };
    }, [id]);

    useEffect(() => {
        setTimeout(() => dispatch(reset()), 5000);

        if (
            isSuccess &&
            (type == "task/get-task/fulfilled" ||
                type == "task/update-task/fulfilled" ||
                type == "task/archive-task/fulfilled")
        ) {
            toast.success(message, { onClose: () => dispatch(reset()) });
        }
    }, [isLoading, isSuccess, isError]);

    const onStatusSelect = (e) => {
        dispatch(updateTask({ id: task.id, status: e.target.value }));
    };

    const handleAssignSelect = (e) => {
        dispatch(updateTask({ id: task.id, userID: e.target.value }));
    };

    const onCategorySelect = (e) => {
        dispatch(updateTask({ id: task.id, category: e.target.value }));
    };

    const handleArchiveClick = () => {
        dispatch(archiveTask(task.id));
    };

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Task</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard/task-manager">
                                        Task Manager
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">Task</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="animated fadeIn bg-white shadow rounded overflow-hidden p-4 my-3">
                    <div className="">
                        {task && (
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Name:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {task?.title || ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Description:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {task?.description || ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Date Added:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {moment(
                                                    task?.created_at
                                                ).format("ll")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Owner:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {task?.user?.name || ""}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="py-3">
                                        <div className="mb-2">
                                            <div className="form-group form-focus">
                                                <select
                                                    className="form-select "
                                                    placeholder="Select Status"
                                                    aria-label="status select"
                                                    value={task?.status || ""}
                                                    onChange={onStatusSelect}
                                                >
                                                    <option value="">
                                                        Select Status
                                                    </option>
                                                    <option value="1">
                                                        Not Started
                                                    </option>
                                                    <option value="2">
                                                        In Progress
                                                    </option>
                                                    <option value="3">
                                                        Completed
                                                    </option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="mb-2">
                                            <div className="form-group form-focus">
                                                <select
                                                    className="form-select "
                                                    placeholder="Select Category"
                                                    aria-label="category select"
                                                    value={task?.category || ""}
                                                    onChange={onCategorySelect}
                                                >
                                                    <option value="">
                                                        Select Category
                                                    </option>
                                                    <option value="Candidate">
                                                        Candidates
                                                    </option>
                                                    <option value="Recruiter">
                                                        Recruiters
                                                    </option>
                                                    <option value="Admin">
                                                        Admins
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="mb-4">
                                        <button
                                            type="button"
                                            onClick={handleArchiveClick}
                                            className="btn btn-primary mx-auto"
                                        >
                                            Archive
                                        </button>
                                    </div>

                                    <div className="mb-2">
                                        <div className="form-group form-focus">
                                            <select
                                                className="form-select "
                                                placeholder="Assign User"
                                                aria-label="assign select"
                                                value={task?.userID || ""}
                                                onChange={handleAssignSelect}
                                            >
                                                <option value="">
                                                    Select Admin
                                                </option>
                                                {users.data.map((user) => (
                                                    <option
                                                        value={user.id}
                                                        key={user.id}
                                                    >
                                                        {user.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default TaskPage;
