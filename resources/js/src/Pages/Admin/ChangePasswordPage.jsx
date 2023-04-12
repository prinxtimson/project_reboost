import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { changePassword, reset } from "../../features/user/userSlice";

const ChangePasswordPage = () => {
    const [oldVisible, setOldVisible] = useState(false);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        password: "",
        oldPassword: "",
        password_confirmation: "",
    });

    const dispatch = useDispatch();
    const { isLoading, isSuccess, isError, message, type } = useSelector(
        (state) => state.user
    );

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        setTimeout(() => dispatch(reset()), 5000);
    }, [isLoading, isSuccess, isError]);

    const handleOnChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleOnSubmit = (e) => {
        e.preventDefault();
        formData.id = user.id;
        dispatch(changePassword(formData));
    };

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-head">
                    <div className="">
                        <h3 className="page-title">Change Password</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Change Password
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="animated fadeIn bg-white shadow rounded overflow-hidden p-4 my-3">
                    <form
                        autoComplete="off"
                        onSubmit={handleOnSubmit}
                        className="form row g-3"
                    >
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="icon-lock"></i>
                                </span>
                            </div>
                            <input
                                autoComplete="old-password"
                                className="form-control"
                                name="oldPassword"
                                placeholder="Current Password"
                                onChange={handleOnChange}
                                required
                                type={`${oldVisible ? "text" : "password"}`}
                            />
                            <div className="input-group-append">
                                <span
                                    className="input-group-text"
                                    onClick={() => setOldVisible(!oldVisible)}
                                >
                                    <i
                                        className={`fa ${
                                            visible ? "fa-eye-slash" : "fa-eye"
                                        }`}
                                    ></i>
                                </span>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="icon-lock"></i>
                                </span>
                            </div>
                            <input
                                autoComplete="new-password"
                                className="form-control"
                                name="password"
                                placeholder="New Password"
                                onChange={handleOnChange}
                                required
                                type={`${visible ? "text" : "password"}`}
                            />
                            <div className="input-group-append">
                                <span
                                    className="input-group-text"
                                    onClick={() => setVisible(!visible)}
                                >
                                    <i
                                        className={`fa ${
                                            visible ? "fa-eye-slash" : "fa-eye"
                                        }`}
                                    ></i>
                                </span>
                            </div>
                            <div className="invalid-feedback">
                                <small>
                                    Password is required. Minimum password
                                    length is 8 characters with Upper and lower
                                    case letters
                                </small>
                            </div>
                        </div>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="icon-lock"></i>
                                </span>
                            </div>
                            <input
                                className="form-control "
                                name="password_confirmation"
                                placeholder="Confirm New Password"
                                onChange={handleOnChange}
                                required
                                type={`${visible ? "text" : "password"}`}
                            />
                            <div className="invalid-feedback">
                                <div>Password do not match</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button
                                    disabled={isLoading}
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Submit
                                </button>
                                {isLoading && (
                                    <img
                                        className="pl-2"
                                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                    />
                                )}
                            </div>
                        </div>
                        {isError &&
                            type === "user/change-password/rejected" && (
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

export default ChangePasswordPage;
