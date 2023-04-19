import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainContainer from "../components/MainContainer";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
            toast.success(message, { onClose: () => dispatch(reset()) });
            navigate("/");
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
                        <h1>Forgot Password?</h1>
                        <p className="text-muted">
                            No worries, a password reset link will be sent to
                            your email address
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
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 text-center">
                                <button
                                    disabled={isLoading}
                                    className="btn btn-primary"
                                    type="submit"
                                >
                                    Send Reset Password Link
                                </button>
                                {isLoading && (
                                    <img
                                        className="pl-2"
                                        src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                    />
                                )}
                            </div>

                            <div className="col-12 text-center ">
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
