import { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MainContainer from "../components/MainContainer";
import { toast } from "react-toastify";
import { reset, resetPassword } from "../features/user/userSlice";

const ResetPassword = () => {
    const { token } = useParams();
    const search = new URLSearchParams(useLocation().search);
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        token: token,
        email: search.get("email"),
        password: "",
        password_confirmation: "",
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError, message, type } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (isError && type === "user/reset-password/rejected") {
            setTimeout(() => dispatch(reset()), 5000);
        }

        if (isSuccess && type === "user/reset-password/fulfilled") {
            toast.success(message, { onClose: () => dispatch(reset()) });
            navigate("/");
        }
        // return () => dispatch(reset());
    }, [isLoading, isSuccess, isError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(resetPassword(formData));
    };

    const handleOnChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <MainContainer>
            <div className="card px-4 py-4">
                <div className="animated fadeIn card-body">
                    <form autoComplete="off" onSubmit={handleSubmit}>
                        <h1>Reset Password</h1>
                        <p className="text-muted">
                            Enter the OTP sent to your mail and your desired
                            password
                        </p>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="icon-user"></i>
                                </span>
                            </div>
                            <input
                                autoComplete="new-email"
                                className="form-control"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                type="email"
                                readOnly
                            />
                            <div className="invalid-feedback">
                                <div>Username is required</div>
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
                                placeholder="Password"
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
                                className="form-control"
                                name="password_confirmation"
                                onChange={handleOnChange}
                                placeholder="Confirm Password"
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
                                    Reset Password
                                </button>
                                {isLoading && (
                                    <img
                                        className="pl-2"
                                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                    />
                                )}
                            </div>
                        </div>
                        {isError && (
                            <div className="alert alert-danger mt-2">
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </MainContainer>
    );
};

export default ResetPassword;
