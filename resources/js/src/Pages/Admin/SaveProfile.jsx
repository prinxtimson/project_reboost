import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";

const SaveProfile = () => {
    const dispatch = useDispatch();

    const { profile, isLoading, isSuccess, isError, message, type } =
        useSelector((state) => state.profile);
    const { user } = useSelector((state) => state.auth);
    return (
        <AuthContainer>
            <div className="p-4">
                <div className="animated fadeIn bg-white shadow rounded overflow-hidden">
                    <div className="px-4 pt-0 pb-4">
                        <div className="media align-items-end profile-head">
                            <div className="profile mr-3">
                                <img
                                    src="/assets/img/avatars/0.jpeg"
                                    alt="..."
                                    width={130}
                                    className="rounded mb-2 img-thumbnail"
                                />
                                <a
                                    href="#/profile-options"
                                    className="btn btn-outline-dark btn-sm btn-block"
                                >
                                    Edit profile
                                </a>
                            </div>
                            <div className="media-body mb-5 text-white">
                                <h4 className="mt-0 mb-0 text-dark">
                                    {profile?.name ||
                                        profile?.companyName ||
                                        ""}
                                    <button className="btn btn-sm btn-danger float-right">
                                        <i className="fa fa-close"></i>
                                    </button>
                                </h4>
                                <button className="btn btn-outline-danger btn-sm my-3">
                                    Delete Profile
                                </button>
                                <button className="btn btn-outline-success btn-sm my-3 float-right">
                                    Verify Account
                                </button>
                                <button className="btn btn-outline-success btn-sm my-3">
                                    Shortlist
                                </button>
                                <h6 className="pb-2 text-dark">
                                    {profile?.title}
                                </h6>
                                <h6 className="pb-2 text-dark">
                                    {profile?.type}
                                </h6>
                            </div>
                        </div>
                    </div>
                    <div className="bg-light p-4 d-flex justify-content-end text-center">
                        <ul className="list-inline mb-0">
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">
                                    {profile?.fileNo}
                                </h5>
                                <small className="text-muted">
                                    <i className="fa fa-image mr-1"></i>
                                    Documents
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">
                                    {profile?.projectNo}
                                </h5>
                                <small className="text-muted">
                                    <i className="fa fa-user mr-1"></i>Projects
                                </small>
                            </li>
                            <li className="list-inline-item">
                                <h5 className="font-weight-bold mb-0 d-block">
                                    {profile?.candNo}
                                </h5>
                                <small className="text-muted">
                                    <i className="fa fa-user mr-1"></i>
                                    ShortLists
                                </small>
                            </li>
                        </ul>
                    </div>
                    <div className="px-4 py-3">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0"></h5>
                        </div>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <p className="font-italic mb-0">Web Developer</p>
                            <p className="font-italic mb-0">
                                Lives in New York
                            </p>
                            <p className="font-italic mb-0">Photographer</p>
                        </div>
                        <div className="p-4 rounded shadow-sm bg-light">
                            <p className="font-italic mb-0">
                                Update your profile
                            </p>
                        </div>
                    </div>
                    <div className="px-4 py-3">
                        <div className="d-flex align-items-center justify-content-between mb-n2">
                            <h5 className="mb-0">Basic Info</h5>
                        </div>
                        <div className="row justify-content-between">
                            <div className="col-md-5 bg-light m-4 p-4 rounded">
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Username</p>
                                    <h5 className="mt-0 mb-0">
                                        {user?.username}
                                    </h5>
                                </div>
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Email</p>
                                    <h5 className="mt-0 mb-0">
                                        {user?.email || profile?.email}
                                    </h5>
                                    <h5 className="mt-0 mb-0">***********</h5>
                                </div>
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Website</p>
                                    <a
                                        href="{{ profile?.website }}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <h5 className="mt-0 mb-0">
                                            {profile?.website}
                                        </h5>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-5 bg-light m-4 p-4 rounded">
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Company Type</p>
                                    <h5 className="mt-0 mb-0">
                                        {profile?.type}
                                    </h5>
                                </div>
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Company Size</p>
                                    <h5 className="mt-0 mb-0">
                                        {profile?.size}
                                    </h5>
                                </div>
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Industry</p>
                                    <h5 className="mt-0 mb-0">
                                        {profile?.industry}
                                    </h5>
                                </div>
                            </div>
                            <div className="col-md-5 bg-light m-4 p-4 rounded">
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Job Title</p>
                                    <h5 className="mt-0 mb-0">
                                        {profile?.title}
                                    </h5>
                                </div>
                                <div className="media-body mb-2">
                                    <p className="small mb-0">Projects</p>
                                    <h5 className="mt-0 mb-0">
                                        {profile?.projectNo}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Skill Sets</h5>
                        </div>
                        <div className="card border-0">
                            <div className="card-body bg-light py-1">
                                <div className="row">
                                    <span
                                        className="px-2 py-2 m-1"
                                        style={{
                                            backgroundColor: "lightgrey",
                                            borderRadius: "10%",
                                        }}
                                    >
                                        {}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Projects</h5>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12 col-md-6 col-xl-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="project-title">
                                            <a href="">{"project.name"}</a>
                                        </h4>
                                        <p className="text-muted">
                                            {"project.description"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-4 px-4">
                        <div className="d-flex align-items-center justify-content-between mb-3">
                            <h5 className="mb-0">Documents</h5>
                        </div>
                        <div className="row row-sm">
                            <div className="col-6 col-sm-4 col-md-3 col-lg-4 col-xl-3">
                                <div className="card card-file shadow">
                                    <div className="card-file-thumb">
                                        <i className="fa fa-file-pdf-o"></i>
                                        <i className="fa fa-file-word-o"></i>
                                        <i className="fa fa-file-excel-o"></i>
                                        <i className="fa fa-file-image-o"></i>
                                    </div>
                                    <div className="card-body">
                                        <h6>{"doc.name"}</h6>
                                        <span>{"doc.description"}</span>
                                    </div>
                                    <div className="card-footer">
                                        <button
                                            className="btn btn-ghost-primary btn-block"
                                            tooltip="Download File"
                                        >
                                            <i className="fa fa-cloud-download"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default SaveProfile;
