import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { Link } from "react-router-dom";
import {
    getTasks,
    reset as taskReset,
    clear,
} from "../../features/task/taskSlice";
import { getAdmins, reset } from "../../features/user/userSlice";
import {
    getActivities,
    reset as activityReset,
} from "../../features/activity/activitySlice";
import moment from "moment";

const TaskManagerPage = () => {
    const dispatch = useDispatch();

    const { tasks, isLoading, isError, isSuccess, message, type } = useSelector(
        (state) => state.task
    );

    const { users } = useSelector((state) => state.user);

    const { activities } = useSelector((state) => state.activity);

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        const timer = setTimeout(() => {
            dispatch(reset());
            dispatch(taskReset());
            dispatch(activityReset());
        }, 3000);

        return () => clearTimeout(timer);
    }, [isLoading, isSuccess, isError]);

    useEffect(() => {
        dispatch(getTasks());
        dispatch(getAdmins());
        dispatch(getActivities());

        return () => dispatch(clear());
    }, []);

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Task Manager</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Task Manager
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="animated fadeIn">
                    <div className="row g-2 mb-4">
                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-2">
                            <h3 className="fw-bold text-center mb-2">
                                Task Progress
                            </h3>
                            <div
                                className="animated fadeIn bg-white shadow overflow-auto w-100 p-2"
                                style={{ height: 320 }}
                            >
                                <div className="p-1 border-bottom">
                                    <h5 className="fw-bold">Unassign Tasks</h5>
                                    <div className="py-2">
                                        <div className="row align-items-center">
                                            <div className="col-10">
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar bg-danger"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${
                                                                (tasks.filter(
                                                                    (v) =>
                                                                        !v.userID
                                                                ).length /
                                                                    tasks.length) *
                                                                100
                                                            }%`,
                                                        }}
                                                        aria-valuenow="25"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                {`${
                                                    tasks.filter(
                                                        (v) => v.status == 1
                                                    ).length
                                                }/${tasks.length}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-1 border-bottom">
                                    <h5 className="fw-bold">
                                        Not Started Tasks
                                    </h5>
                                    <div className="py-2">
                                        <div className="row align-items-center">
                                            <div className="col-10">
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar bg-warning"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${
                                                                (tasks.filter(
                                                                    (v) =>
                                                                        v.status ==
                                                                        1
                                                                ).length /
                                                                    tasks.length) *
                                                                100
                                                            }%`,
                                                        }}
                                                        aria-valuenow="25"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                {`${
                                                    tasks.filter(
                                                        (v) => v.status == 1
                                                    ).length
                                                }/${tasks.length}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-1 border-bottom">
                                    <h5 className="fw-bold">Pending Tasks</h5>
                                    <div className="py-2">
                                        <div className="row align-items-center">
                                            <div className="col-10">
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${
                                                                (tasks.filter(
                                                                    (v) =>
                                                                        v.status ==
                                                                        2
                                                                ).length /
                                                                    tasks.length) *
                                                                100
                                                            }%`,
                                                        }}
                                                        aria-valuenow="25"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                {`${
                                                    tasks.filter(
                                                        (v) => v.status == 2
                                                    ).length
                                                }/${tasks.length}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-1">
                                    <h5 className="fw-bold">Completed Tasks</h5>
                                    <div className="py-1">
                                        <div className="row align-items-center">
                                            <div className="col-10">
                                                <div className="progress">
                                                    <div
                                                        className="progress-bar bg-success"
                                                        role="progressbar"
                                                        style={{
                                                            width: `${
                                                                (tasks.filter(
                                                                    (v) =>
                                                                        v.status ==
                                                                        3
                                                                ).length /
                                                                    tasks.length) *
                                                                100
                                                            }%`,
                                                        }}
                                                        aria-valuenow="25"
                                                        aria-valuemin="0"
                                                        aria-valuemax="100"
                                                    ></div>
                                                </div>
                                            </div>
                                            <div className="col-2">
                                                {`${
                                                    tasks.filter(
                                                        (v) => v.status == 3
                                                    ).length
                                                }/${tasks.length}`}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-2">
                            <h3 className="fw-bold text-center mb-2">
                                Recent Activity
                            </h3>
                            <div
                                className="animated fadeIn bg-white shadow overflow-auto w-100 p-2"
                                style={{ height: 320 }}
                            >
                                {activities.map((activity) => (
                                    <div
                                        className="p-1 border-bottom"
                                        key={activity.id}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="px-1">
                                                <div className="avatar">
                                                    <img
                                                        src={
                                                            !activity?.user
                                                                ?.avatar &&
                                                            !activity?.user
                                                                ?.passport
                                                                ? "/assets/img/avatars/0.jpeg"
                                                                : activity?.user
                                                                      ?.avatar
                                                                ? `${
                                                                      activity
                                                                          ?.user
                                                                          ?.avatar
                                                                  }?${new Date().getTime()}`
                                                                : `/fs/dl/${
                                                                      activity
                                                                          ?.user
                                                                          .passport
                                                                          ?.link
                                                                  }?${new Date().getTime()}`
                                                        }
                                                        alt={
                                                            activity.user?.name
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 px-1">
                                                <p className="mb-1">
                                                    <span className="fw-bold">
                                                        {activity.user?.name}
                                                    </span>{" "}
                                                    <span className="text-muted">
                                                        {activity.type}
                                                    </span>
                                                </p>
                                                <small>
                                                    {moment(
                                                        activity.created_at
                                                    ).fromNow()}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-4 mb-4 mb-lg-2">
                            <h3 className="fw-bold text-center mb-2">
                                Task Members
                            </h3>
                            <div
                                className="animated fadeIn bg-white shadow overflow-auto w-100 p-2"
                                style={{ height: 320 }}
                            >
                                {users?.data.map((item, ind) => (
                                    <div
                                        className={
                                            users?.data.length - 1 == ind
                                                ? "p-2 "
                                                : "p-2 border-bottom"
                                        }
                                        key={ind}
                                    >
                                        <div className="d-flex align-items-center">
                                            <div className="px-1">
                                                <div className="avatar">
                                                    <img
                                                        src={
                                                            !item?.avatar &&
                                                            !item?.passport
                                                                ? "/assets/img/avatars/0.jpeg"
                                                                : item?.avatar
                                                                ? `${
                                                                      item?.avatar
                                                                  }?${new Date().getTime()}`
                                                                : `/fs/dl/${
                                                                      item
                                                                          ?.passport
                                                                          .link
                                                                  }?${new Date().getTime()}`
                                                        }
                                                        alt={item.name}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 px-1">
                                                <div className="d-flex align-items-center">
                                                    <div className="flex-grow-1">
                                                        <h6 className="fw-bold">
                                                            {item.name}
                                                        </h6>
                                                        <div className="small text-muted">
                                                            {item.role}
                                                        </div>
                                                    </div>
                                                    <div className="">
                                                        {item.id == user.id ? (
                                                            <Link to="/dashboard/task-manager/my-tasks">
                                                                View
                                                            </Link>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row g-2 mt-4">
                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-2">
                            <h3 className="fw-bold text-center mb-2">
                                Unassigned
                            </h3>
                            <div
                                className="animated fadeIn overflow-auto w-100 p-2"
                                style={{ height: 420 }}
                            >
                                {tasks.map(
                                    (task) =>
                                        !task.userID && (
                                            <div
                                                className="p-2 border border-2 bg-white my-2"
                                                key={task.id}
                                            >
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="flex-grow-1 px-1">
                                                        <Link
                                                            to={`/dashboard/task-manager/view/${task.id}`}
                                                        >
                                                            <p>{task.title}</p>
                                                        </Link>
                                                    </div>
                                                    <div className="">
                                                        <p>
                                                            <span>Owner: </span>
                                                            {task.userID && (
                                                                <span>{`${task.user?.firstName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}${task.user?.firstName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}`}</span>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-2">
                            <h3 className="fw-bold text-center mb-2">
                                Not Started
                            </h3>
                            <div
                                className="animated fadeIn overflow-auto w-100 p-2"
                                style={{ height: 420 }}
                            >
                                {tasks.map(
                                    (task) =>
                                        task.status == 1 && (
                                            <div
                                                className="p-2 border border-2 bg-white my-2"
                                                key={task.id}
                                            >
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="flex-grow-1 px-1">
                                                        <Link
                                                            to={`/dashboard/task-manager/view/${task.id}`}
                                                        >
                                                            <p>{task.title}</p>
                                                        </Link>
                                                    </div>
                                                    <div className="">
                                                        <p>
                                                            <span>Owner: </span>
                                                            {task.userID && (
                                                                <span>{`${task.user?.firstName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}${task.user?.firstName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}`}</span>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-2">
                            <h3 className="fw-bold text-center mb-2">
                                In Progress
                            </h3>
                            <div
                                className="animated fadeIn overflow-auto w-100 p-2"
                                style={{ height: 420 }}
                            >
                                {tasks.map(
                                    (task) =>
                                        task.status == 2 && (
                                            <div
                                                className="p-2 border border-2 bg-white my-2"
                                                key={task.id}
                                            >
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="flex-grow-1 px-1">
                                                        <Link
                                                            to={`/dashboard/task-manager/view/${task.id}`}
                                                        >
                                                            <p>{task.title}</p>
                                                        </Link>
                                                    </div>
                                                    <div className="">
                                                        <p>
                                                            <span>Owner: </span>
                                                            {task.userID && (
                                                                <span>{`${task.user?.firstName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}${task.user?.firstName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}`}</span>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-4 mb-lg-2">
                            <h3 className="fw-bold text-center mb-2">
                                Completed
                            </h3>
                            <div
                                className="animated fadeIn overflow-auto w-100 p-2"
                                style={{ height: 420 }}
                            >
                                {tasks.map(
                                    (task) =>
                                        task.status == 3 && (
                                            <div
                                                className="p-2 border border-2 bg-white my-2"
                                                key={task.id}
                                            >
                                                <div className="d-flex align-items-center justify-content-center">
                                                    <div className="flex-grow-1 px-1">
                                                        <Link
                                                            to={`/dashboard/task-manager/view/${task.id}`}
                                                        >
                                                            <p>{task.title}</p>
                                                        </Link>
                                                    </div>
                                                    <div className="">
                                                        <p>
                                                            <span>Owner: </span>
                                                            {task.userID && (
                                                                <span>{`${task.user?.firstName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}${task.user?.lastName
                                                                    .toUpperCase()
                                                                    .charAt(
                                                                        0
                                                                    )}`}</span>
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default TaskManagerPage;
