import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { addNewUser, reset } from "../../features/user/userSlice";

const AddUserPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        status: "1",
        role: "ADMIN",
        password: "",
        password_confirmation: "",
    });

    const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, message, type } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        setTimeout(() => dispatch(reset()), 5000);

        if (isSuccess && type === "user/add-new-user/fulfilled") {
            setFormData({
                username: "",
                email: "",
                firstName: "",
                lastName: "",
                companyName: "",
                status: "1",
                role: "ADMIN",
                password: "",
                password_confirmation: "",
            });
        }
    }, [isLoading, isSuccess, isError]);

    const handleOnChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewUser(formData));
    };

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Add User</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard/users">Users</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Add User
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="animated fadeIn bg-white shadow rounded overflow-hidden p-4 my-3">
                    <form
                        className="form g-3"
                        autoComplete="off"
                        onSubmit={handleOnSubmit}
                    >
                        <div className="modal-header">
                            <h4 className="modal-title">{}</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        className="form-control"
                                        name="username"
                                        id="username"
                                        value={formData.username}
                                        type="text"
                                        autoComplete="new-username"
                                        onChange={handleOnChange}
                                    />
                                    <div className="invalid-feedback">
                                        <div>User Name is required</div>
                                    </div>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="lastName">Email</label>
                                    <input
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleOnChange}
                                    />
                                    <div className="invalid-feedback">
                                        <div>Email is required</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.row--> */}
                            <div className="row">
                                <div className="form-group col-sm-6">
                                    <label htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        className="form-control"
                                        name="firstName"
                                        id="firstName"
                                        value={formData.firstName}
                                        type="text"
                                        onChange={handleOnChange}
                                    />
                                    <div className="invalid-feedback">
                                        <div>First Name is required</div>
                                    </div>
                                </div>
                                <div className="form-group col-sm-6">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        className="form-control"
                                        name="lastName"
                                        value={formData.lastName}
                                        id="lastName"
                                        type="text"
                                        onChange={handleOnChange}
                                    />
                                    <div className="invalid-feedback">
                                        <div>Last name is required</div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--/.row--> */}
                            <div className="form-group">
                                <label htmlFor="phoneNo">Company Name</label>
                                <input
                                    className="form-control"
                                    name="companyName"
                                    value={formData.companyName}
                                    id="phoneNo"
                                    onChange={handleOnChange}
                                    placeholder="Company Name (Leave blank htmlFor candidates)..."
                                    type="text"
                                />
                                <div className="invalid-feedback">
                                    <div></div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="select1"
                                    className="col-md-6 col-form-label"
                                >
                                    Account Status
                                </label>
                                <div className="col-md-6">
                                    <select
                                        id="select1"
                                        name="status"
                                        value={formData.status}
                                        className="form-control"
                                        onChange={handleOnChange}
                                    >
                                        <option value="1">Activate</option>
                                        <option value="0">Deactivate</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="select2"
                                    className="col-md-6 col-form-label"
                                >
                                    User's Role
                                </label>
                                <div className="col-md-6">
                                    <select
                                        id="select2"
                                        name="role"
                                        value={formData.role}
                                        className="form-control"
                                        onChange={handleOnChange}
                                    >
                                        <option value="ADMIN">ADMIN</option>
                                        <option value="RECRUITER">
                                            RECRUITER
                                        </option>
                                        <option value="CANDIDATE">
                                            CANDIDATE
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="roles">Password</label>
                                <input
                                    className="form-control"
                                    name="password"
                                    id="roles"
                                    placeholder=" password"
                                    value={formData.password}
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={handleOnChange}
                                />
                                <div className="invalid-feedback">
                                    <div>
                                        Minimum password length is 6 characters
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="roles">Confirm Password</label>
                                <input
                                    className="form-control"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    id="roles2"
                                    type="password"
                                    onChange={handleOnChange}
                                />
                                <div className="invalid-feedback">
                                    <div>Password do not match</div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <Link
                                className="btn btn-secondary"
                                to="/dashboard/users"
                            >
                                Back
                            </Link>
                            <button className="btn btn-primary" type="submit">
                                Save User
                            </button>
                        </div>
                        {isError && type === "user/add-new-user/rejected" && (
                            <div className="alert alert-danger mt-2">
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </AuthContainer>
    );
};

export default AddUserPage;
