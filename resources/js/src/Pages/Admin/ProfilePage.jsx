import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { logout } from "../../features/auth/authSlice";

const ProfilePage = () => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Profile</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Profile
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="animated fadeIn bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <img
                                    src={
                                        !user?.avatar && !user?.passport
                                            ? "/assets/img/avatars/0.jpeg"
                                            : user?.avatar
                                            ? user?.avatar
                                            : `/fs/dl/${user?.passport.link}`
                                    }
                                    alt={user?.name}
                                    width={130}
                                    className="rounded mb-2 img-thumbnail"
                                />
                                <div className="text-center">
                                    <h4>{`${user?.firstName} ${user?.lastName}`}</h4>
                                    <p>{user?.role}</p>
                                    <h6>{user?.email}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        {/* <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <small className="text-muted">
                                    <i className="fa fa-image mr-1"></i>
                                    Documents
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <small className="text-muted">
                                    <i className="fa fa-user mr-1"></i>Projects
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <small className="text-muted">
                                    <i className="fa fa-user mr-1"></i>
                                    ShortLists
                                </small>
                            </li>
                        </ul> */}
                    </div>

                    <div className="px-4 py-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0"></h5>
                        </div>
                        <div className="py-2">
                            <Link
                                to="change-profile-picture"
                                className="btn-block dropdown-item py-1 m-0"
                            >
                                <i className="fa fa-picture-o m-r-5"></i> Add or
                                Edit Profile Picture
                            </Link>
                            <Link
                                to="edit"
                                className="btn-block dropdown-item py-1 m-0"
                            >
                                <i className="fa fa-pencil m-r-5"></i> Edit
                                Personal Details
                            </Link>
                            <Link
                                to="change-password"
                                className="btn-block dropdown-item py-1 m-0"
                            >
                                <i className="fa fa-lock m-r-5"></i> Change
                                Password
                            </Link>

                            {/* <Link
                                to="#"
                                className="btn-block dropdown-item py-1 m-0"
                            >
                                <i className="fa fa-trash-o m-r-5"></i> Delete
                                Profile
                            </Link> */}
                            <button
                                className="btn-block dropdown-item py-1 m-0"
                                onClick={() => dispatch(logout())}
                            >
                                <i className="fa fa-lock m-r-5"></i> Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default ProfilePage;
