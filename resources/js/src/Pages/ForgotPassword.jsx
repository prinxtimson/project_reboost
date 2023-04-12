import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainContainer from "../components/MainContainer";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword, reset } from "../features/user/userSlice";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError, message, type } = useSelector(
        (state) => state.user
    );

    useEffect(() => {
        if (isError && type === "user/forgot-password/rejected") {
            setTimeout(() => dispatch(reset()), 5000);
        }

        if (isSuccess && type === "user/forgot-password/fulfilled") {
            setTimeout(() => dispatch(reset()), 5000);
            navigate("/password/reset");
        }
        // return () => dispatch(reset());
    }, [isLoading, isSuccess, isError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(forgotPassword({ email }));
    };

    return (
        <MainContainer>
            <div className="card px-4 py-4">
                <div className="animated fadeIn card-body">
                    <form onSubmit={handleSubmit}>
                        <h1>Forgot Password</h1>
                        <p className="text-muted">
                            Please enter your email address. You will receive an
                            OTP to create a new password via email.
                        </p>

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="fa fa-envelope-open-o"></i>
                                </span>
                            </div>
                            <input
                                className="form-control"
                                name="email"
                                placeholder="email address"
                                required
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="invalid-feedback">
                                <div>Email is required</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <button
                                    disabled={isLoading}
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Request OTP
                                </button>
                                {isLoading && (
                                    <img
                                        className="pl-2"
                                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                    />
                                )}
                            </div>

                            <div className="col-6 text-right">
                                <Link
                                    to="/"
                                    className="btn btn-link px-0"
                                    type="button"
                                >
                                    or Login Here
                                </Link>
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

export default ForgotPassword;
