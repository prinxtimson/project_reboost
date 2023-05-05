import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import OffsetSidebar from "./OffsetSidebar";
import { logout } from "../features/auth/authSlice";
import moment from "moment";
import { markNotification } from "../features/notification/notificationSlice";

const AuthContainer = ({ children }) => {
    const { routeName } = useParams();
    const dispatch = useDispatch();

    const { notifications, isLoading, isSuccess, isError, message, type } =
        useSelector((state) => state.notification);
    const { user } = useSelector((state) => state.auth);

    const handleNotificationClick = () => {
        setTimeout(() => dispatch(markNotification()), 2000);
    };

    return (
        <div className="flex-grow-1 d-flex flex-column">
            <OffsetSidebar />
            <nav className="container-fluid navbar navbar-light bg-white">
                <div className="container-lg flex-grow-1 d-flex justify-content-center align-items-center">
                    <div className="">
                        <button
                            className="navbar-toggler mx-2 d-block d-lg-none text-dark"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasSidebar"
                            aria-controls="offcanvasSidebar"
                            type="button"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="">
                        <Link to="/dashboard" className="navbar-brand">
                            <img
                                src="/assets/img/tritek-logo.png"
                                className="img-fluid "
                                style={{ height: 40 }}
                            />
                        </Link>
                    </div>
                    <div className="flex-grow-1">
                        <ul className="nav justify-content-end align-items-center">
                            <li className="nav-item dropdown mr-2">
                                <a
                                    className=""
                                    href="#"
                                    id="notificationDropdown"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    onClick={handleNotificationClick}
                                >
                                    <span
                                        style={{
                                            textAlign: "center",
                                            position: "relative",
                                        }}
                                    >
                                        <i
                                            className="fa fa-bell"
                                            style={{ fontSize: 20 }}
                                        >
                                            {" "}
                                        </i>
                                        {notifications?.count &&
                                        notifications?.count > 0 ? (
                                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                                {notifications?.count}
                                                <span className="visually-hidden">
                                                    unread messages
                                                </span>
                                            </span>
                                        ) : null}
                                    </span>
                                </a>

                                <ul
                                    style={{ minWidth: 350, maxHeight: 450 }}
                                    className="dropdown-menu dropdown-menu-end overflow-auto"
                                    aria-labelledby="notificationDropdown"
                                >
                                    {notifications && notifications.data ? (
                                        notifications.data.map((item) => (
                                            <li key={item.id}>
                                                <Link
                                                    to={
                                                        item.type ==
                                                        "App\\Notifications\\NewTask"
                                                            ? "/dashboard/task-manager"
                                                            : "#"
                                                    }
                                                    className="dropdown-item d-flex"
                                                >
                                                    {item.type ==
                                                    "App\\Notifications\\Shortlisted" ? (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            You've been
                                                            shortlisted by{" "}
                                                            {
                                                                item.data.user
                                                                    .companyName
                                                            }
                                                        </div>
                                                    ) : item.type ==
                                                      "App\\Notifications\\NotShortlisted" ? (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            You've been removed
                                                            from shortlist by
                                                            {
                                                                item.data.user
                                                                    .companyName
                                                            }
                                                        </div>
                                                    ) : item.type ==
                                                      "App\\Notifications\\Favourited" ? (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            You've been
                                                            favourited by
                                                            {
                                                                item.data.user
                                                                    .name
                                                            }
                                                        </div>
                                                    ) : item.type ==
                                                      "App\\Notifications\\ProfileUpdated" ? (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            Your profile was
                                                            updated
                                                        </div>
                                                    ) : item.type ==
                                                      "App\\Notifications\\DocDeleted" ? (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            {item.data.doc.name}{" "}
                                                            document had been
                                                            deleted
                                                        </div>
                                                    ) : item.type ==
                                                      "App\\Notifications\\DocUploaded" ? (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            {item.data.doc.name}{" "}
                                                            document had been
                                                            uploaded
                                                        </div>
                                                    ) : item.type ==
                                                      "App\\Notifications\\NewTask" ? (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            {item.read_at
                                                                ? ""
                                                                : "New "}
                                                            {
                                                                item.data.task
                                                                    .title
                                                            }{" "}
                                                            task available.
                                                        </div>
                                                    ) : (
                                                        <div
                                                            className={
                                                                item.read_at
                                                                    ? "w-100"
                                                                    : "font-weight-bold w-100"
                                                            }
                                                        >
                                                            Your profile was
                                                            view by
                                                            {
                                                                item.data.user
                                                                    .name
                                                            }
                                                        </div>
                                                    )}
                                                    <small>
                                                        {moment(
                                                            item.created_at
                                                        ).fromNow()}
                                                    </small>
                                                </Link>
                                            </li>
                                        ))
                                    ) : (
                                        <li>
                                            <Link
                                                to="notifications"
                                                className="dropdown-item"
                                            >
                                                <span>
                                                    No notifications yet
                                                </span>
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </li>
                            <li className="nav-item text-center mx-2">
                                <h5 className="mb-0">{`${user?.firstName} ${user?.lastName}`}</h5>
                                <p className="mb-0" style={{ fontSize: 10 }}>
                                    {user?.role}
                                </p>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    className=" avatar"
                                    id="avatarDropdown"
                                    href="#"
                                    role="button"
                                >
                                    <img
                                        src={
                                            !user?.avatar && !user?.passport
                                                ? "/assets/img/avatars/0.jpeg"
                                                : user?.avatar
                                                ? `${
                                                      user?.avatar
                                                  }?${new Date().getTime()}`
                                                : `/fs/dl/${
                                                      user?.passport.link
                                                  }?${new Date().getTime()}`
                                        }
                                        alt={`${user?.firstName} ${user?.lastName}`}
                                        className=""
                                    />
                                </a>
                                <div
                                    aria-labelledby="avatarDropdown"
                                    className="dropdown-menu dropdown-menu-end"
                                >
                                    <Link
                                        style={{ cursor: "pointer" }}
                                        className="dropdown-item"
                                        to="/dashboard/profile"
                                    >
                                        <i className="fa fa-picture-o"></i>View
                                        Profile
                                    </Link>
                                    <Link
                                        style={{ cursor: "pointer" }}
                                        className="dropdown-item text-warning"
                                        to="/dashboard/profile/edit"
                                    >
                                        <i className="fa fa-edit"></i>Edit
                                        Profile
                                    </Link>

                                    <span
                                        style={{ cursor: "pointer" }}
                                        className="dropdown-item"
                                        onClick={() => dispatch(logout())}
                                    >
                                        <i className="fa fa-lock"></i> Logout
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main className="flex-grow-1 d-flex flex-column ">
                <div className="flex-grow-1 d-flex" style={{ height: "90vh" }}>
                    <nav
                        className={`flex-column d-none flex-shrink-0 px-3 py-2 d-lg-flex `}
                        style={{
                            backgroundColor: "#061f90",
                            minWidth: 250,
                            minHeight: "100%",
                        }}
                        id="sidebarMenu"
                    >
                        <ul className="nav nav-pills flex-column mb-auto py-5">
                            <li className="nav-item">
                                <Link
                                    to="/dashboard"
                                    className={`w-100 nav-link fw-bold ${
                                        window.location.pathname === "/admin"
                                            ? "active-tab bg-white"
                                            : "text-white"
                                    }`}
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/dashboard/profile"
                                    className={`w-100 nav-link fw-bold ${
                                        window.location.pathname ===
                                        "/admin/profile"
                                            ? "active-tab bg-white"
                                            : "text-white"
                                    }`}
                                    aria-current="page"
                                >
                                    My Profile
                                </Link>
                            </li>

                            <li className="nav-item">
                                <a
                                    className={` w-100 nav-link fw-bold ${
                                        window.location.pathname ===
                                        "/dashboard/users"
                                            ? "active-tab bg-white"
                                            : "text-white"
                                    }`}
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseExample"
                                    aria-expanded="false"
                                    aria-controls="collapseExample"
                                    href="#"
                                >
                                    Users
                                </a>
                                <div className="collapse" id="collapseExample">
                                    <ul className="nav nav-pills flex-column mb-auto">
                                        <li className="ps-3">
                                            <Link
                                                to="/dashboard/admin"
                                                className="nav-link text-white"
                                            >
                                                Admin
                                            </Link>
                                        </li>
                                        <li className="ps-3">
                                            <Link
                                                to="/dashboard/candidates"
                                                className="nav-link text-white"
                                            >
                                                Candidates
                                            </Link>
                                        </li>
                                        <li className="ps-3">
                                            <Link
                                                to="/dashboard/recruiters"
                                                className="nav-link text-white"
                                            >
                                                Recruiters
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/dashboard/task-manager"
                                    className={`w-100 nav-link fw-bold ${
                                        window.location.pathname ===
                                        "/dashboard/task-manager"
                                            ? "active-tab bg-white"
                                            : "text-white"
                                    }`}
                                    aria-current="page"
                                >
                                    Task Manager
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/dashboard/documents"
                                    className={`w-100 nav-link fw-bold ${
                                        routeName === "/dashboard/documents"
                                            ? "active-tab"
                                            : "text-white"
                                    }`}
                                >
                                    Documents
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span
                                    style={{ cursor: "pointer" }}
                                    className={`w-100 nav-link fw-bold text-white`}
                                    onClick={() => dispatch(logout())}
                                >
                                    Logout
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <div className="flex-grow-1 d-flex flex-column overflow-auto">
                        <div className="flex-grow-1">{children}</div>
                        <div className="footer">
                            <div className="row">
                                <div className="col-12">
                                    <div className="row container d-flex justify-content-center">
                                        <a
                                            href="https://www.facebook.com/tritekconsultingltd"
                                            target="_blank"
                                            className="btn btn-social-icon btn-outline-facebook mr-1"
                                        >
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                        <a
                                            href="https://twitter.com/Tritek_Consult"
                                            target="_blank"
                                            className="btn btn-social-icon btn-outline-twitter mr-1"
                                        >
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/tritek-consulting-limited"
                                            target="_blank"
                                            className="btn btn-social-icon btn-outline-linkedin mr-1"
                                        >
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                        <a
                                            href="https://www.instagram.com/tritekconsultingltd/"
                                            target="_blank"
                                            className="btn btn-social-icon btn-outline-instagram mr-1"
                                        >
                                            <i className="fa fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <p className="text-center mt-3">
                                Copyright &copy;{""}{" "}
                                <a href="#"> Tritek Consulting Limited </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AuthContainer;
