import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { Link } from "react-router-dom";
import {
    getAdmins,
    getNextPage,
    deleteUser,
    searchAdmins,
    clear,
    reset,
} from "../../features/user/userSlice";

const UsersPage = () => {
    const [searchText, setSearchText] = useState("");
    const [gridToggle, setGridToggle] = useState(true);

    const dispatch = useDispatch();
    const { users, isLoading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getAdmins());

        return () => {
            dispatch(reset());
            dispatch(clear());
        };
    }, []);

    const prevPage = () => {
        dispatch(getNextPage(users.prev_page_url));
    };

    const nextPage = () => {
        dispatch(getNextPage(users.next_page_url));
    };

    const handleSearchClcik = () => {
        dispatch(searchAdmins(searchText));
    };

    const handleCancelClick = () => {
        dispatch(getAdmins());
        setSearchText("");
    };

    return (
        <AuthContainer>
            <div className="p-4 ">
                {/* <!-- Page Header --> */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Admin</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Admin
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto float-right ml-auto">
                            <Link
                                className="btn add-btn btn-ghost-primary"
                                to="/dashboard/admin/add"
                            >
                                <i className="fa fa-plus"></i> Add Admin
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
                    <div className="row mx-2 bg-white mb-3">
                        <div className="col-12 py-3">
                            <div className="row">
                                <div className="col-sm-6 ">
                                    <div className="">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search users"
                                            value={searchText}
                                            onChange={(e) =>
                                                setSearchText(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="row">
                                        <div className="col-6">
                                            <button
                                                onClick={handleSearchClcik}
                                                className="btn btn-primary me-2 w-100"
                                            >
                                                Search
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <button
                                                onClick={handleCancelClick}
                                                className="btn btn-secondary w-100"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Search Filter --> */}

                    {gridToggle ? (
                        <div className="">
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
                                                    {item.name}
                                                </h4>
                                                <small>
                                                    {item.location || ""}
                                                </small>
                                                <div className="mt-2 small text-muted">
                                                    {item.role}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ) : (
                        <div className="">
                            <div className="card">
                                <div className="card-body table-responsive">
                                    <table className="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">ID</th>

                                                <th scope="col">Fullname</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>

                                                <th scope="col">Location</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users &&
                                                users.data.map((item) => (
                                                    <tr key={item.id}>
                                                        <th scope="row">
                                                            {item.id}
                                                        </th>

                                                        <td>{item.name}</td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phoneNo}</td>

                                                        <th scope="col">
                                                            {item.location ||
                                                                ""}
                                                        </th>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
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
