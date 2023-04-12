import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { Link, useLocation } from "react-router-dom";
import { getUsers } from "../../features/user/userSlice";

const UsersPage = () => {
    const search = new URLSearchParams(useLocation().search);
    const [filterUsers, setFilterUsers] = useState([]);
    const [paginate, setPaginate] = useState({
        total: 0,
        current_page: 1,
        last_index: 0,
    });

    const { total, current_page, last_index } = paginate;

    const dispatch = useDispatch();
    const { users, isLoading, isError, isSuccess, message, type } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    useEffect(() => {
        if (users && users.length > 0) {
            let role = search.get("role");
            if (role) {
                let _length = users.filter((val) => val.role == role).length;
                setPaginate({ ...paginate, total: _length });
                changePage(0);
            } else {
                setPaginate({ ...paginate, total: users.length });
                changePage(1);
            }
            console.log(paginate);
        }
    }, [users]);

    const prevPage = () => {
        if (current_page > 1) {
            console.log("prev page click");
            let _current_page = current_page - 1;
            changePage(_current_page);
        }
    };

    const nextPage = () => {
        if (current_page < numPages()) {
            console.log("next page click");
            let _current_page = current_page + 1;
            changePage(_current_page);
        }
    };

    const numPages = () => {
        return Math.ceil(total / 20);
    };

    const changePage = (page) => {
        let role = search.get("role");

        // Validate page
        if (page < 1) page = 1;
        if (page > numPages()) page = numPages();
        setPaginate({ ...paginate, current_page: page });

        let _users = [];
        let i = 0;
        let _last_index = last_index;

        while (i < 20) {
            let currentUser = users[_last_index];

            if (role) {
                if (currentUser.role == role) {
                    _users.push(currentUser);
                    _last_index++;
                    i++;
                }
            } else {
                _users.push(currentUser);
                _last_index++;
                i++;
            }
        }
        setPaginate({ ...paginate, last_index: _last_index + 1 });
        setFilterUsers(_users);
    };

    return (
        <AuthContainer>
            <div className="p-4 ">
                {/* <!-- Page Header --> */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Platform Users</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Users
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto float-right ml-auto">
                            <Link
                                className="btn add-btn btn-ghost-primary"
                                to="/dashboard/users/add"
                            >
                                <i className="fa fa-plus"></i> Add User
                            </Link>
                            <div className="view-icons">
                                <button className="grid-view btn btn-link active">
                                    <i className="fa fa-th"></i>
                                </button>
                                <button className="list-view btn btn-link">
                                    <i className="fa fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Page Header --> */}

                <div className="animated fadeIn">
                    {/* <!-- Search Filter --> */}
                    <div className="row filter-row">
                        <div className="col-sm-8 col-md-8">
                            <div className="form-group form-focus">
                                <input
                                    type="text"
                                    className="form-control floating"
                                />
                                <label className="focus-label">
                                    Search users by
                                </label>
                            </div>
                        </div>

                        <div className="col-sm-4 col-md-4">
                            <a href="#" className="btn btn-success btn-block">
                                {" "}
                                Search{" "}
                            </a>
                        </div>
                    </div>
                    {/* <!-- Search Filter --> */}

                    <div className="row staff-grid-row">
                        {filterUsers.map((item) => (
                            <div
                                className="col-md-4 col-sm-6 col-12 col-lg-4 col-xl-3"
                                key={item.id}
                            >
                                <div className="profile-widget shadow">
                                    <div className="profile-img">
                                        <a href="" className="avatar">
                                            <img
                                                src="assets/img/avatars/2.jpg"
                                                alt=""
                                            />
                                        </a>
                                    </div>
                                    <div className="dropdown profile-action">
                                        <button
                                            className="action-icon dropdown-toggle bg-transparent border-0 btn-sm"
                                            data-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="material-icons">
                                                more_vert
                                            </i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="btn-block dropdown-item py-1 m-0">
                                                <i className="fa fa-openid m-r-5"></i>{" "}
                                                View Details
                                            </button>
                                            <button className="btn-block dropdown-item py-1 m-0">
                                                <i className="fa fa-pencil m-r-5"></i>{" "}
                                                Edit
                                            </button>
                                            <button className="btn-block dropdown-item py-1 m-0">
                                                <i className="fa fa-trash-o m-r-5"></i>{" "}
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                    <h4 className="user-name m-t-10 mb-0 text-ellipsis">
                                        <a href="">{`${item?.firstName} ${item?.lastName}`}</a>
                                    </h4>
                                    <div className="small text-muted">
                                        {item.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-5">
                            <div
                                className="dataTables_info"
                                id="DataTables_Table_0_info"
                                role="status"
                                aria-live="polite"
                            >
                                {`Showing ${current_page} to ${
                                    current_page * 20
                                } of ${paginate.total} entries`}
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
                                            {current_page}
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
