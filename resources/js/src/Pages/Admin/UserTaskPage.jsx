import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import moment from "moment";
import { getMyTasks, reset } from "../../features/task/taskSlice";

const UserTaskPage = () => {
    const dispatch = useDispatch();

    const { tasks, isLoading, isError, isSuccess, message, type } = useSelector(
        (state) => state.task
    );

    useEffect(() => {
        setTimeout(() => dispatch(reset()), 5000);
    }, [isLoading, isSuccess, isError]);

    useEffect(() => {
        dispatch(getMyTasks());
    }, []);

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">User Tasks</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard/task-manager">
                                        Task Manager
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    User Tasks
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="animated fadeIn bg-white shadow rounded p-2">
                    <div className="table-responsive">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>

                                    <th scope="col">Task Name</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Date Added</th>
                                    <th scope="col">Owner</th>

                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tasks &&
                                    tasks.map((item) => (
                                        <tr key={item.id}>
                                            <th scope="row">{item.id}</th>
                                            <td scope="col">
                                                <Link
                                                    to={`/dashboard/task-manager/view/${item.id}`}
                                                >
                                                    {item?.title || ""}
                                                </Link>
                                            </td>
                                            <td scope="col">
                                                {item?.category || ""}
                                            </td>

                                            <td>
                                                {moment(item.created_at).format(
                                                    "ll"
                                                )}
                                            </td>
                                            <td>{item?.user?.name}</td>
                                            <td>
                                                {item.status == 1
                                                    ? "Not Stated"
                                                    : item.status == 2
                                                    ? "In Progress"
                                                    : item.status == 3
                                                    ? "Completed"
                                                    : ""}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default UserTaskPage;
