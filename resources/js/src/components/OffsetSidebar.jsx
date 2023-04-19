import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

const OffsetSidebar = () => {
    const dispatch = useDispatch();
    const { routeName } = useParams();
    return (
        <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasSidebar"
            aria-labelledby="offcanvasSidebar"
        >
            <div className="offcanvas-header">
                <div className="offcanvas-title" id="offcanvasSidebar">
                    <Link to="/dashboard" className="navbar-brand">
                        <img
                            src="/assets/img/tritek-logo.png"
                            className="img-fluid "
                            style={{ height: 40 }}
                        />
                    </Link>
                </div>
                <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <nav className="d-flex flex-column">
                    <ul className="nav nav-pills flex-column mb-auto py-5">
                        <li className="nav-item">
                            <Link
                                to="/dashboard"
                                className={`w-100 nav-link fw-bold ${
                                    window.location.pathname === "/dashboard"
                                        ? "active-tab bg-white"
                                        : "text-dark"
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
                                    "/dashboard/profile"
                                        ? "active-tab bg-white"
                                        : "text-dark"
                                }`}
                                aria-current="page"
                            >
                                My Profile
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a
                                className={`text-start w-100 nav-link fw-bold ${
                                    window.location.pathname ===
                                    "/dashboard/users"
                                        ? "active-tab bg-white"
                                        : "text-dark"
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
                                            to="/dashboard/users/admin"
                                            className="nav-link text-dark"
                                        >
                                            Admin
                                        </Link>
                                    </li>
                                    <li className="ps-3">
                                        <Link
                                            to="/dashboard/users/candidate"
                                            className="nav-link text-dark"
                                        >
                                            Candidates
                                        </Link>
                                    </li>
                                    <li className="ps-3">
                                        <Link
                                            to="/dashboard/users/recruiter"
                                            className="nav-link text-dark"
                                        >
                                            Recruiters
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#"
                                className={`w-100 nav-link fw-bold ${
                                    window.location.pathname ===
                                    "/dashboard/task-manager"
                                        ? "active-tab bg-white"
                                        : "text-dark"
                                }`}
                                aria-current="page"
                            >
                                Task Manager
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="#"
                                className={`w-100 nav-link fw-bold ${
                                    routeName === "/dashboard/documents"
                                        ? "active-tab"
                                        : "text-dark"
                                }`}
                            >
                                Documents
                            </Link>
                        </li>
                        <li className="nav-item">
                            <span
                                style={{ cursor: "pointer" }}
                                className={`w-100 nav-link fw-bold text-dark`}
                                onClick={() => dispatch(logout())}
                            >
                                Logout
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default OffsetSidebar;
