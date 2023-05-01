import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { Link } from "react-router-dom";
import {
    getCandidates,
    getNextPage,
    deleteUser,
    searchCandidates,
    filterCandidates,
    clear,
    reset,
} from "../../features/user/userSlice";
import moment from "moment";

const CandidateUsersPage = () => {
    const [searchText, setSearchText] = useState("");
    const [filter, setFilter] = useState("");
    const [option, setOption] = useState("");
    const [gridToggle, setGridToggle] = useState(true);
    const [data, setData] = useState({
        orderBy: "created_at",
        sortBy: "ASC",
    });

    const dispatch = useDispatch();
    const { users, isLoading } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(getCandidates());

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
        dispatch(searchCandidates(searchText));
    };

    const handleCancelClick = () => {
        dispatch(getCandidates());

        setSearchText("");
    };

    const handleFilterClick = () => {
        dispatch(filterCandidates({ filter, option }));
    };

    const handleClearFilterClick = () => {
        dispatch(getCandidates());
        setFilter("");
        setOption("");
    };

    const handleSortClick = () => {
        dispatch(getCandidates(data));
    };

    return (
        <AuthContainer>
            <div className="p-4 ">
                {/* <!-- Page Header --> */}
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Candidates</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Candidates
                                </li>
                            </ul>
                        </div>
                        <div className="col-auto float-right ml-auto">
                            <Link
                                className="btn add-btn btn-ghost-primary"
                                to="/dashboard/candidates/add"
                            >
                                <i className="fa fa-plus"></i> Add Candidate
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

                                <div className="col-sm-6 ">
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
                        {/* <div className="col-12 col-md-6 py-3">
                             <div className="">
                                <form className="row g-1">
                                    <div className=" col-4">
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
                                    <div className="col-4">
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

                                    <div className="col-4">
                                        <button
                                            type="button"
                                            onClick={handleSortClick}
                                            className="btn btn-primary w-100"
                                        >
                                            Sort
                                        </button>
                                    </div>
                                </form>
                            </div> 
                        </div> */}
                    </div>

                    <div className="row mx-2 mb-3 bg-white">
                        <div className="col-4 py-3">
                            <div className=" w-100">
                                <select
                                    className="form-select floating"
                                    id="filterBy"
                                    value={filter}
                                    aria-label="filter by select"
                                    placeholder="Filter By"
                                    onChange={(e) => setFilter(e.target.value)}
                                >
                                    <option value="">Select filter</option>

                                    {candidateOptions.map((item) => (
                                        <option
                                            value={item.value}
                                            key={item.name}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-4 py-3">
                            <div className=" w-100">
                                <select
                                    className="form-select floating"
                                    id="filterOption"
                                    value={option}
                                    aria-label=" select"
                                    placeholder="Select Option"
                                    onChange={(e) => setOption(e.target.value)}
                                >
                                    <option value="">Select option</option>
                                    {filter == "industry" &&
                                        INDUSTRYOPTIONS.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    {filter == "location" &&
                                        LOCATIONOPTIONS.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    {filter == "skills" &&
                                        SKILLSOPRIONS.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                    {filter == "title" &&
                                        ROLEOPTIONS.map((item) => (
                                            <option value={item} key={item}>
                                                {item}
                                            </option>
                                        ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-4 py-3 d-flex">
                            <button
                                type="button"
                                onClick={handleFilterClick}
                                className="btn btn-primary w-100"
                            >
                                Filter
                            </button>
                            <button
                                type="button"
                                onClick={handleClearFilterClick}
                                className="btn btn-secondary w-100 mx-2"
                            >
                                Clear Filter
                            </button>
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
                                                    <Link
                                                        to={`/dashboard/candidates/view/${item.id}`}
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
                                                        <Link
                                                            to={`/dashboard/candidates/view/${item.id}`}
                                                            className="btn-block dropdown-item py-1 m-0"
                                                        >
                                                            <i className="fa fa-eye m-r-5"></i>{" "}
                                                            View Details
                                                        </Link>

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
                                                        to={`/dashboard/candidates/view/${item.id}`}
                                                    >
                                                        {item.name}
                                                    </Link>
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

                                                <th scope="col">Job Title</th>

                                                <th scope="col">Fullname</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Phone</th>

                                                <th scope="col">Location</th>

                                                <th scope="col">Updated At</th>

                                                <th scope="col">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users &&
                                                users.data.map((item) => (
                                                    <tr key={item.id}>
                                                        <th scope="row">
                                                            {item.id}
                                                        </th>

                                                        <td scope="col">
                                                            {item.candidate
                                                                ?.title || ""}
                                                        </td>

                                                        <td>
                                                            <Link
                                                                to={`/dashboard/candidates/view/${item.id}`}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phoneNo}</td>

                                                        <th scope="col">
                                                            {item.location ||
                                                                ""}
                                                        </th>

                                                        <th scope="col">
                                                            {moment(
                                                                item.updated_at
                                                            ).fromNow()}
                                                        </th>

                                                        <th scope="col">
                                                            {item.adminVerified
                                                                ? "Approved"
                                                                : "Pending"}
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

export default CandidateUsersPage;

const candidateOptions = [
    {
        value: "location",
        name: "Location",
    },
    {
        name: "Role",
        value: "title",
    },
    {
        name: "Skills",
        value: "skills",
    },
];

const INDUSTRYOPTIONS = [
    "Advertising, Arts & Media",
    "Administration & Office Support",
    "Accounting",
    "Information & Communication Technology",
    "Science & Technology",
    "Banking & Financial Services",
];

const LOCATIONOPTIONS = ["London", "Nigeria"];

const ROLEOPTIONS = ["Business Analyst", "Project Management"];

const SKILLSOPRIONS = [
    "Decision making",
    "Prioritization",
    "Organisation",
    "Problem solving",
    "Communication",
    "Critical thinking",
    "Presentation skills",
    "Business analysis",
    "Agile working",
    "Business process improvement",
    "Stake holder relationship management",
    "Leadership",
    "Coaching",
    "Collaboration",
    "Conflict resolution",
    "Time management",
    "Team building",
];
