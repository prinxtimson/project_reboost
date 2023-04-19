import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { Link, useLocation, useParams } from "react-router-dom";
import {
    getAdmins,
    getCandidates,
    getRecruiters,
    getUsers,
    getNextPage,
    deleteUser,
    searchCandidates,
    searchAdmins,
    searchRecruiters,
} from "../../features/user/userSlice";
import moment from "moment";

const UsersPage = () => {
    const [searchText, setSearchText] = useState("");
    const [gridToggle, setGridToggle] = useState(true);
    const [data, setData] = useState({
        orderBy: "created_at",
        sortBy: "ASC",
    });
    const { path } = useParams();

    const dispatch = useDispatch();
    const { users, isLoading, isError, isSuccess, message, type } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (path === "admin") {
            dispatch(getAdmins());
        } else if (path === "candidate") {
            dispatch(getCandidates());
        } else if (path === "recruiter") {
            dispatch(getRecruiters());
        } else {
            dispatch(getUsers());
        }
        setGridToggle(true);
    }, [path]);

    const prevPage = () => {
        dispatch(getNextPage(users.prev_page_url));
    };

    const nextPage = () => {
        dispatch(getNextPage(users.next_page_url));
    };

    const handleSearchClcik = () => {
        if (path === "admin") {
            dispatch(searchAdmins(searchText));
        } else if (path === "candidate") {
            dispatch(searchCandidates(searchText));
        } else if (path === "recruiter") {
            dispatch(searchRecruiters(searchText));
        } else {
            dispatch(getUsers());
        }
    };

    const handleCancelClick = () => {
        if (path === "admin") {
            dispatch(getAdmins());
        } else if (path === "candidate") {
            dispatch(getCandidates());
        } else if (path === "recruiter") {
            dispatch(getRecruiters());
        } else {
            dispatch(getUsers());
        }
        setSearchText("");
    };

    const handleSortClick = () => {
        if (path === "admin") {
            dispatch(getAdmins(data));
        } else if (path === "candidate") {
            dispatch(getCandidates(data));
        } else if (path === "recruiter") {
            dispatch(getRecruiters(data));
        } else {
            dispatch(getUsers());
        }
    };

    return (
        <AuthContainer>
            <div className="p-4 ">
                {/* <!-- Page Header --> */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">
                                Platform{" "}
                                {path.charAt(0).toUpperCase() + path.slice(1)}
                            </h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    {path.charAt(0).toUpperCase() +
                                        path.slice(1)}
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto float-right ml-auto">
                            <Link
                                className="btn add-btn btn-ghost-primary"
                                to="/dashboard/add-user"
                            >
                                <i className="fa fa-plus"></i> Add{" "}
                                {path.charAt(0).toUpperCase() + path.slice(1)}
                            </Link>
                            <div className="view-icons">
                                <button
                                    className={`grid-view btn btn-link ${
                                        gridToggle ? "active" : ""
                                    }`}
                                    onClick={() => setGridToggle(true)}
                                >
                                    <i className="fa fa-th"></i>
                                </button>
                                <button
                                    className={`list-view btn btn-link ${
                                        gridToggle ? "" : "active"
                                    }`}
                                    onClick={() => setGridToggle(false)}
                                >
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Page Header --> */}

                <div className="animated fadeIn">
                    {/* <!-- Search Filter --> */}
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search users"
                                            onChange={(e) =>
                                                setSearchText(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-sm-6 ">
                                    <div className=" d-flex mb-2 ">
                                        <button
                                            onClick={handleSearchClcik}
                                            className="btn btn-success me-2"
                                        >
                                            Search
                                        </button>
                                        <button
                                            onClick={handleCancelClick}
                                            className="btn btn-secondary "
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="">
                                <form className="row g-1">
                                    <div className="form-group form-focus col-4">
                                        <select
                                            className="form-select "
                                            id="orderBy"
                                            placeholder="Order By"
                                            aria-label="order by select"
                                            value={data.orderBy}
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    orderBy: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="created_at">
                                                Date Created
                                            </option>
                                            <option value="updated_at">
                                                Date Modified
                                            </option>
                                        </select>
                                    </div>
                                    <div className="form-group form-focus col-4">
                                        <select
                                            className="form-select floating"
                                            id="sortBy"
                                            value={data.sortBy}
                                            aria-label="sort by select"
                                            placeholder="Sort By"
                                            onChange={(e) =>
                                                setData({
                                                    ...data,
                                                    sortBy: e.target.value,
                                                })
                                            }
                                        >
                                            <option value="ASC">
                                                By Ascending Order
                                            </option>
                                            <option value="DESC">
                                                By Descending Order
                                            </option>
                                        </select>
                                    </div>

                                    <div className="col-3">
                                        <button
                                            type="button"
                                            onClick={handleSortClick}
                                            className="btn btn-primary"
                                        >
                                            Sort
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Search Filter --> */}

                    {gridToggle ? (
                        <div className="">
                            {path === "recruiter" ? (
                                <div className="">
                                    <div className="py-4">
                                        <h3 className="fw-bold text-center mb-lg-4">
                                            Pending Approvals
                                        </h3>
                                        <div className="row staff-grid-row">
                                            {users &&
                                                users.data.map((item) =>
                                                    !item.adminVerified ? (
                                                        <div
                                                            className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
                                                            key={item.id}
                                                        >
                                                            <div className="profile-widget shadow">
                                                                <div className="profile-img">
                                                                    <Link
                                                                        to={
                                                                            path ===
                                                                            "admin"
                                                                                ? "#"
                                                                                : `/dashboard/users/${path}/${item.id}`
                                                                        }
                                                                        className="avatar"
                                                                    >
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
                                                                            alt={
                                                                                item.name
                                                                            }
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="dropdown profile-action">
                                                                    <button
                                                                        className="action-icon dropdown-toggle bg-transparent border-0 btn-sm"
                                                                        id="dropdownMenuButton1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="material-icons">
                                                                            more_vert
                                                                        </i>
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-right"
                                                                        aria-labelledby="dropdownMenuButton1"
                                                                    >
                                                                        {path ===
                                                                        "admin" ? null : (
                                                                            <Link
                                                                                to={`/dashboard/users/${path}/${item.id}`}
                                                                                className="btn-block dropdown-item py-1 m-0"
                                                                            >
                                                                                <i className="fa fa-openid m-r-5"></i>{" "}
                                                                                View
                                                                                Details
                                                                            </Link>
                                                                        )}

                                                                        {/* <button className="btn-block dropdown-item py-1 m-0">
                                                        <i className="fa fa-pencil m-r-5"></i>{" "}
                                                        Edit
                                                    </button> */}
                                                                        <button
                                                                            className="btn-block dropdown-item py-1 m-0 btn-danger text-danger"
                                                                            onClick={() =>
                                                                                window.confirm(
                                                                                    `You are about to delete user ${item.name}, this can't be undone.`
                                                                                ) &&
                                                                                dispatch(
                                                                                    deleteUser(
                                                                                        item
                                                                                    )
                                                                                )
                                                                            }
                                                                        >
                                                                            <i className="fa fa-trash-o m-r-5 text-danger"></i>{" "}
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                                                                    <Link
                                                                        to={
                                                                            path ===
                                                                            "admin"
                                                                                ? "#"
                                                                                : `/dashboard/users/${path}/${item.id}`
                                                                        }
                                                                    >
                                                                        {item.companyName
                                                                            ? item.companyName
                                                                            : item.name}
                                                                    </Link>
                                                                </h4>
                                                                <div className="small text-muted">
                                                                    {item.role}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : null
                                                )}
                                        </div>
                                    </div>
                                    <div className="border border-4"></div>
                                    <div className="py-4 ">
                                        <h3 className="fw-bold text-center mb-4">
                                            Existing Recruiters
                                        </h3>
                                        <div className="row staff-grid-row">
                                            {users &&
                                                users.data.map((item) =>
                                                    item.adminVerified ? (
                                                        <div
                                                            className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
                                                            key={item.id}
                                                        >
                                                            <div className="profile-widget shadow">
                                                                <div className="profile-img">
                                                                    <Link
                                                                        to={
                                                                            path ===
                                                                            "admin"
                                                                                ? "#"
                                                                                : `/dashboard/users/${path}/${item.id}`
                                                                        }
                                                                        className="avatar"
                                                                    >
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
                                                                            alt={
                                                                                item.name
                                                                            }
                                                                        />
                                                                    </Link>
                                                                </div>
                                                                <div className="dropdown profile-action">
                                                                    <button
                                                                        className="action-icon dropdown-toggle bg-transparent border-0 btn-sm"
                                                                        id="dropdownMenuButton1"
                                                                        data-bs-toggle="dropdown"
                                                                        aria-expanded="false"
                                                                    >
                                                                        <i className="material-icons">
                                                                            more_vert
                                                                        </i>
                                                                    </button>
                                                                    <div
                                                                        className="dropdown-menu dropdown-menu-right"
                                                                        aria-labelledby="dropdownMenuButton1"
                                                                    >
                                                                        {path ===
                                                                        "admin" ? null : (
                                                                            <Link
                                                                                to={`/dashboard/users/${path}/${item.id}`}
                                                                                className="btn-block dropdown-item py-1 m-0"
                                                                            >
                                                                                <i className="fa fa-openid m-r-5"></i>{" "}
                                                                                View
                                                                                Details
                                                                            </Link>
                                                                        )}

                                                                        {/* <button className="btn-block dropdown-item py-1 m-0">
                                                        <i className="fa fa-pencil m-r-5"></i>{" "}
                                                        Edit
                                                    </button> */}
                                                                        <button
                                                                            className="btn-block dropdown-item py-1 m-0 btn-danger text-danger"
                                                                            onClick={() =>
                                                                                window.confirm(
                                                                                    `You are about to delete user ${item.name}, this can't be undone.`
                                                                                ) &&
                                                                                dispatch(
                                                                                    deleteUser(
                                                                                        item
                                                                                    )
                                                                                )
                                                                            }
                                                                        >
                                                                            <i className="fa fa-trash-o m-r-5 text-danger"></i>{" "}
                                                                            Delete
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                                <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                                                                    <Link
                                                                        to={
                                                                            path ===
                                                                            "admin"
                                                                                ? "#"
                                                                                : `/dashboard/users/${path}/${item.id}`
                                                                        }
                                                                    >
                                                                        {item.companyName
                                                                            ? item.companyName
                                                                            : item.name}
                                                                    </Link>
                                                                </h4>
                                                                <div className="small text-muted">
                                                                    {item.role}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ) : null
                                                )}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="row staff-grid-row">
                                    {" "}
                                    {users &&
                                        users.data.map((item) => (
                                            <div
                                                className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
                                                key={item.id}
                                            >
                                                <div className="profile-widget shadow">
                                                    <div className="profile-img">
                                                        <Link
                                                            to={
                                                                path === "admin"
                                                                    ? "#"
                                                                    : `/dashboard/users/${path}/${item.id}`
                                                            }
                                                            className="avatar"
                                                        >
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
                                                        </Link>
                                                    </div>
                                                    <div className="dropdown profile-action">
                                                        <button
                                                            className="action-icon dropdown-toggle bg-transparent border-0 btn-sm"
                                                            id="dropdownMenuButton1"
                                                            data-bs-toggle="dropdown"
                                                            aria-expanded="false"
                                                        >
                                                            <i className="material-icons">
                                                                more_vert
                                                            </i>
                                                        </button>
                                                        <div
                                                            className="dropdown-menu dropdown-menu-right"
                                                            aria-labelledby="dropdownMenuButton1"
                                                        >
                                                            {path ===
                                                            "admin" ? null : (
                                                                <Link
                                                                    to={`/dashboard/users/${path}/${item.id}`}
                                                                    className="btn-block dropdown-item py-1 m-0"
                                                                >
                                                                    <i className="fa fa-openid m-r-5"></i>{" "}
                                                                    View Details
                                                                </Link>
                                                            )}

                                                            {/* <button className="btn-block dropdown-item py-1 m-0">
                                                        <i className="fa fa-pencil m-r-5"></i>{" "}
                                                        Edit
                                                    </button> */}
                                                            <button
                                                                className="btn-block dropdown-item py-1 m-0 btn-danger text-danger"
                                                                onClick={() =>
                                                                    window.confirm(
                                                                        `You are about to delete user ${item.name}, this can't be undone.`
                                                                    ) &&
                                                                    dispatch(
                                                                        deleteUser(
                                                                            item
                                                                        )
                                                                    )
                                                                }
                                                            >
                                                                <i className="fa fa-trash-o m-r-5 text-danger"></i>{" "}
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                                                        <Link
                                                            to={
                                                                path === "admin"
                                                                    ? "#"
                                                                    : `/dashboard/users/${path}/${item.id}`
                                                            }
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </h4>
                                                    <div className="small text-muted">
                                                        {item.role}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="">
                            {path === "recruiter" ? (
                                <div className="">
                                    <div className="py-4">
                                        <h3 className="fw-bold text-center mb-lg-4">
                                            Pending Approvals
                                        </h3>
                                        <div className="card">
                                            <div className="card-body table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                ID
                                                            </th>
                                                            {path ===
                                                                "candidate" && (
                                                                <th scope="col">
                                                                    Job Title
                                                                </th>
                                                            )}
                                                            {path ===
                                                                "recruiter" && (
                                                                <th scope="col">
                                                                    Company Name
                                                                </th>
                                                            )}
                                                            <th scope="col">
                                                                Fullname
                                                            </th>
                                                            <th scope="col">
                                                                Email
                                                            </th>
                                                            <th scope="col">
                                                                Phone
                                                            </th>
                                                            {path !==
                                                                "candidate" && (
                                                                <th scope="col">
                                                                    Location
                                                                </th>
                                                            )}
                                                            {(path !==
                                                                "candidate" ||
                                                                path !==
                                                                    "recruiter") && (
                                                                <th scope="col">
                                                                    Updated At
                                                                </th>
                                                            )}
                                                            {(path !==
                                                                "candidate" ||
                                                                path !==
                                                                    "recruiter") && (
                                                                <th scope="col">
                                                                    Status
                                                                </th>
                                                            )}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users &&
                                                            users.data.map(
                                                                (item) =>
                                                                    !item.adminVerified ? (
                                                                        <tr
                                                                            key={
                                                                                item.id
                                                                            }
                                                                        >
                                                                            <th scope="row">
                                                                                {
                                                                                    item.id
                                                                                }
                                                                            </th>
                                                                            {path ===
                                                                                "candidate" && (
                                                                                <td scope="col">
                                                                                    {item
                                                                                        .candidate
                                                                                        ?.title ||
                                                                                        ""}
                                                                                </td>
                                                                            )}
                                                                            {path ===
                                                                                "recruiter" && (
                                                                                <td scope="col">
                                                                                    {item?.companyName ||
                                                                                        ""}
                                                                                </td>
                                                                            )}
                                                                            <td>
                                                                                {path ===
                                                                                "admin" ? (
                                                                                    item.name
                                                                                ) : (
                                                                                    <Link
                                                                                        to={`/dashboard/users/${path}/${item.id}`}
                                                                                    >
                                                                                        {
                                                                                            item.name
                                                                                        }
                                                                                    </Link>
                                                                                )}
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    item.email
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    item.phoneNo
                                                                                }
                                                                            </td>
                                                                            {path !==
                                                                                "candidate" && (
                                                                                <th scope="col">
                                                                                    {item.location ||
                                                                                        ""}
                                                                                </th>
                                                                            )}
                                                                            {(path !==
                                                                                "candidate" ||
                                                                                path !==
                                                                                    "recruiter") && (
                                                                                <th scope="col">
                                                                                    {moment(
                                                                                        item.updated_at
                                                                                    ).fromNow()}
                                                                                </th>
                                                                            )}
                                                                            {(path !==
                                                                                "candidate" ||
                                                                                path !==
                                                                                    "recruiter") && (
                                                                                <th scope="col">
                                                                                    {item.adminVerified
                                                                                        ? "Approved"
                                                                                        : "Pending"}
                                                                                </th>
                                                                            )}
                                                                        </tr>
                                                                    ) : null
                                                            )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="border border-4"></div>
                                    <div className="py-4">
                                        <h3 className="fw-bold text-center mb-4">
                                            Existing Recruiters
                                        </h3>
                                        <div className="card">
                                            <div className="card-body table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">
                                                                ID
                                                            </th>
                                                            {path ===
                                                                "candidate" && (
                                                                <th scope="col">
                                                                    Job Title
                                                                </th>
                                                            )}
                                                            {path ===
                                                                "recruiter" && (
                                                                <th scope="col">
                                                                    Company Name
                                                                </th>
                                                            )}
                                                            <th scope="col">
                                                                Fullname
                                                            </th>
                                                            <th scope="col">
                                                                Email
                                                            </th>
                                                            <th scope="col">
                                                                Phone
                                                            </th>
                                                            {path !==
                                                                "candidate" && (
                                                                <th scope="col">
                                                                    Location
                                                                </th>
                                                            )}
                                                            {(path !==
                                                                "candidate" ||
                                                                path !==
                                                                    "recruiter") && (
                                                                <th scope="col">
                                                                    Updated At
                                                                </th>
                                                            )}
                                                            {(path !==
                                                                "candidate" ||
                                                                path !==
                                                                    "recruiter") && (
                                                                <th scope="col">
                                                                    Status
                                                                </th>
                                                            )}
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {users &&
                                                            users.data.map(
                                                                (item) =>
                                                                    item.adminVerified ? (
                                                                        <tr
                                                                            key={
                                                                                item.id
                                                                            }
                                                                        >
                                                                            <th scope="row">
                                                                                {
                                                                                    item.id
                                                                                }
                                                                            </th>
                                                                            {path ===
                                                                                "candidate" && (
                                                                                <td scope="col">
                                                                                    {item
                                                                                        .candidate
                                                                                        ?.title ||
                                                                                        ""}
                                                                                </td>
                                                                            )}
                                                                            {path ===
                                                                                "recruiter" && (
                                                                                <td scope="col">
                                                                                    {item?.companyName ||
                                                                                        ""}
                                                                                </td>
                                                                            )}
                                                                            <td>
                                                                                {path ===
                                                                                "admin" ? (
                                                                                    item.name
                                                                                ) : (
                                                                                    <Link
                                                                                        to={`/dashboard/users/${path}/${item.id}`}
                                                                                    >
                                                                                        {
                                                                                            item.name
                                                                                        }
                                                                                    </Link>
                                                                                )}
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    item.email
                                                                                }
                                                                            </td>
                                                                            <td>
                                                                                {
                                                                                    item.phoneNo
                                                                                }
                                                                            </td>
                                                                            {path !==
                                                                                "candidate" && (
                                                                                <th scope="col">
                                                                                    {item.location ||
                                                                                        ""}
                                                                                </th>
                                                                            )}
                                                                            {(path !==
                                                                                "candidate" ||
                                                                                path !==
                                                                                    "recruiter") && (
                                                                                <th scope="col">
                                                                                    {moment(
                                                                                        item.updated_at
                                                                                    ).fromNow()}
                                                                                </th>
                                                                            )}
                                                                            {(path !==
                                                                                "candidate" ||
                                                                                path !==
                                                                                    "recruiter") && (
                                                                                <th scope="col">
                                                                                    {item.adminVerified
                                                                                        ? "Approved"
                                                                                        : "Pending"}
                                                                                </th>
                                                                            )}
                                                                        </tr>
                                                                    ) : null
                                                            )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="card">
                                    <div className="card-body table-responsive">
                                        <table class="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    {path === "candidate" && (
                                                        <th scope="col">
                                                            Job Title
                                                        </th>
                                                    )}
                                                    <th scope="col">
                                                        Fullname
                                                    </th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone</th>
                                                    {path !== "candidate" && (
                                                        <th scope="col">
                                                            Location
                                                        </th>
                                                    )}
                                                    {(path !== "candidate" ||
                                                        path !==
                                                            "recruiter") && (
                                                        <th scope="col">
                                                            Updated At
                                                        </th>
                                                    )}
                                                    {(path !== "candidate" ||
                                                        path !==
                                                            "recruiter") && (
                                                        <th scope="col">
                                                            Status
                                                        </th>
                                                    )}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users &&
                                                    users.data.map((item) => (
                                                        <tr key={item.id}>
                                                            <th scope="row">
                                                                {item.id}
                                                            </th>
                                                            {path ===
                                                                "candidate" && (
                                                                <td scope="col">
                                                                    {item
                                                                        .candidate
                                                                        ?.title ||
                                                                        ""}
                                                                </td>
                                                            )}
                                                            <td>
                                                                {path ===
                                                                "admin" ? (
                                                                    item.name
                                                                ) : (
                                                                    <Link
                                                                        to={`/dashboard/users/${path}/${item.id}`}
                                                                    >
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </Link>
                                                                )}
                                                            </td>
                                                            <td>
                                                                {item.email}
                                                            </td>
                                                            <td>
                                                                {item.phoneNo}
                                                            </td>
                                                            {path !==
                                                                "candidate" && (
                                                                <th scope="col">
                                                                    {item.location ||
                                                                        ""}
                                                                </th>
                                                            )}
                                                            {(path !==
                                                                "candidate" ||
                                                                path !==
                                                                    "recruiter") && (
                                                                <th scope="col">
                                                                    {moment(
                                                                        item.updated_at
                                                                    ).fromNow()}
                                                                </th>
                                                            )}
                                                            {(path !==
                                                                "candidate" ||
                                                                path !==
                                                                    "recruiter") && (
                                                                <th scope="col">
                                                                    {item.adminVerified
                                                                        ? "Approved"
                                                                        : "Pending"}
                                                                </th>
                                                            )}
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div
                                className="dataTables_info"
                                id="DataTables_Table_0_info"
                                role="status"
                                aria-live="polite"
                            >
                                {`Showing ${users?.from} to ${users?.to} of ${users?.total} entries`}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-7">
                            <div className="dataTables_paginate paging_simple_numbers float-right">
                                <ul className="pagination">
                                    <li
                                        className="paginate_button page-item previous"
                                        id="DataTables_Table_0_previous"
                                    >
                                        <button
                                            type="button"
                                            tabIndex="0"
                                            className="page-link"
                                            disabled={!users?.prev_page_url}
                                            onClick={prevPage}
                                        >
                                            Previous
                                        </button>
                                    </li>
                                    <li className="paginate_button page-item active">
                                        <a
                                            href="#"
                                            aria-controls="DataTables_Table_0"
                                            data-dt-idx="1"
                                            tabIndex="0"
                                            className="page-link"
                                        >
                                            {users?.current_page}
                                        </a>
                                    </li>
                                    <li
                                        className="paginate_button page-item next"
                                        id="DataTables_Table_0_next"
                                    >
                                        <button
                                            type="button"
                                            tabIndex="0"
                                            className="page-link"
                                            onClick={nextPage}
                                            disabled={!users?.next_page_url}
                                        >
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default UsersPage;

const OPTIONS = [
    {
        name: "",
        value: "",
    },
];
