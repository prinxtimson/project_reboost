import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { toast } from "react-toastify";
import { addNewUser, reset } from "../../features/user/userSlice";

const AddRecruiterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        companyName: "",
        address: "",
        location: "",
        website: "",
        status: "1",
        role: "RECRUITER",
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
            toast.success(message, { onClose: () => dispatch(reset()) });
            setFormData({
                username: "",
                email: "",
                firstName: "",
                lastName: "",
                companyName: "",
                location: "",
                address: "",
                website: "",
                status: "1",
                role: "RECRUITER",
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
                            <h3 className="page-title">Add Recruiter</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard/recruiters">
                                        Recruiters
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Add Recruiter
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="animated fadeIn bg-white shadow rounded overflow-hidden p-4 my-3">
                    <form
                        className="form g-3 py-3"
                        autoComplete="off"
                        onSubmit={handleOnSubmit}
                    >
                        <div className="row mb-3">
                            <label
                                htmlFor="companyName"
                                className="col-sm-4 col-form-label"
                            >
                                Recruiter Name
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="companyName"
                                    value={formData.companyName}
                                    id="companyName"
                                    onChange={handleOnChange}
                                    type="text"
                                    placeholder="Recruiter Name"
                                />
                                <div className="invalid-feedback">
                                    <div></div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label
                                htmlFor="firstName"
                                className="col-sm-4 col-form-label"
                            >
                                Contact Name
                            </label>

                            <div className="col-sm-8">
                                <div className="row">
                                    <div className="col-6">
                                        <input
                                            className="form-control"
                                            name="firstName"
                                            id="firstName"
                                            value={formData.firstName}
                                            type="text"
                                            onChange={handleOnChange}
                                            placeholder="First Name"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            <div>Firstname is required</div>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <input
                                            className="form-control"
                                            name="lastName"
                                            value={formData.lastName}
                                            id="lastName"
                                            type="text"
                                            onChange={handleOnChange}
                                            placeholder="Last Name"
                                            required
                                        />
                                        <div className="invalid-feedback">
                                            <div>Lastname is required</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="address"
                                className="col-sm-4 col-form-label"
                            >
                                Address
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Address"
                                    name="address"
                                    id="floatingInput"
                                    value={formData.address}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="phoneNo"
                                className="col-sm-4 col-form-label"
                            >
                                Telephone Number
                            </label>
                            <div className="col-sm-8">
                                <input
                                    type="text"
                                    className="form-control "
                                    placeholder="Phone Number"
                                    name="phoneNo"
                                    id="floatingInput"
                                    value={formData.phoneNo}
                                    onChange={handleOnChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label
                                htmlFor="email"
                                className="col-sm-4 col-form-label"
                            >
                                Email Address
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="email"
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleOnChange}
                                    placeholder="Email Address"
                                    required
                                />
                                <div className="invalid-feedback">
                                    <div>Email is required</div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label
                                htmlFor="username"
                                className="col-sm-4 col-form-label"
                            >
                                Username
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="username"
                                    id="username"
                                    value={formData.username}
                                    type="text"
                                    autoComplete="new-username"
                                    onChange={handleOnChange}
                                    placeholder="Username"
                                />
                                <div className="invalid-feedback">
                                    <div>Username is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="website"
                                className="col-sm-4 col-form-label"
                            >
                                Wedsite
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="website"
                                    value={formData.website}
                                    id="website"
                                    type="text"
                                    onChange={handleOnChange}
                                    placeholder="Wedsite"
                                />
                                <div className="invalid-feedback">
                                    <div>Website is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="location"
                                className="col-sm-4 col-form-label"
                            >
                                Country
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="location"
                                    value={formData.location}
                                    id="location"
                                    type="text"
                                    onChange={handleOnChange}
                                    placeholder="Country"
                                />
                                <div className="invalid-feedback">
                                    <div>Country is required</div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="password"
                                className="col-sm-4 col-form-label"
                            >
                                Password
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="password"
                                    placeholder="Password"
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
                        </div>
                        <div className="row mb-3">
                            <label
                                htmlFor="password_confirmation"
                                className="col-sm-4 col-form-label"
                            >
                                Confirm Password
                            </label>
                            <div className="col-sm-8">
                                <input
                                    className="form-control"
                                    name="password_confirmation"
                                    value={formData.password_confirmation}
                                    id="roles2"
                                    type="password"
                                    onChange={handleOnChange}
                                    placeholder="Confirm Password"
                                />
                                <div className="invalid-feedback">
                                    <div>Password do not match</div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button className="btn btn-primary" type="submit">
                                Save Record
                            </button>
                            <Link
                                className="btn btn-secondary"
                                to="/dashboard/recruiters"
                            >
                                Back
                            </Link>
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

export default AddRecruiterPage;
