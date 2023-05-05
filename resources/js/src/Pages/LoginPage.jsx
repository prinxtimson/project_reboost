import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MainContainer from "../components/MainContainer";
import { login, reset } from "../features/auth/authSlice";

const LoginPage = () => {
    const date = Date.now();
    const [visible, setVisible] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        remember_me: false,
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError, message, type } = useSelector(
        (state) => state.auth
    );

    const { username, password, remember_me } = formData;

    useEffect(() => {
        if (isError && type === "auth/login/rejected") {
            setTimeout(() => dispatch(reset()), 5000);
        }

        if (isSuccess && type === "auth/login/fulfilled") {
            navigate("/dashboard");
        }
        // return () => dispatch(reset());
    }, [isLoading, isSuccess, isError]);

    useEffect(() => {
        setFormData({
            username: localStorage.getItem("tritek_career_username") || "",
            password: localStorage.getItem("tritek_career_pass") || "",
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (remember_me) {
            localStorage.setItem("tritek_career_username", username);
            localStorage.setItem("tritek_career_pass", password);
        }
        dispatch(login(formData));
    };

    const handleOnChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <MainContainer>
            <div className="card p-2">
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        {/* <p className="text-muted">
                            Sign In to your account or{" "}
                            <Link to="/register">Recruiter Registration</Link>{" "}
                        </p> */}

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="icon-user"></i>
                                </span>
                            </div>
                            <input
                                autoComplete="username"
                                className="form-control"
                                name="username"
                                placeholder="username or email"
                                required
                                type="text"
                                onChange={handleOnChange}
                                value={username}
                            />
                            <div className="invalid-feedback">
                                <div>Username is required</div>
                            </div>
                        </div>

                        <div className="input-group mb-4">
                            <div className="input-group-prepend">
                                <span className="input-group-text">
                                    <i className="icon-lock"></i>
                                </span>
                            </div>
                            <input
                                autoComplete="password"
                                className="form-control"
                                name="password"
                                value={password}
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
                                <div>Password is required</div>
                            </div>
                        </div>

                        <div className="row mb-2">
                            <div className="col-6">
                                <label className="d-flex align-items-center pt-2">
                                    <input
                                        type="checkbox"
                                        name="remember_me"
                                        id="remember_me"
                                        value={remember_me}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                remember_me: e.target.checked,
                                            })
                                        }
                                    />
                                    <span className="mx-2">Remember me</span>
                                </label>
                            </div>
                            <div className="col-6 text-right">
                                <Link
                                    to="/password/forgot"
                                    className="btn btn-link px-0"
                                    type="button"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                        <div className="">
                            <button
                                className="btn btn-primary"
                                type="submit"
                                disabled={isLoading}
                            >
                                Login
                            </button>
                            {isLoading && (
                                <img
                                    className="pl-2"
                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                />
                            )}
                        </div>
                        {isError && type === "auth/login/rejected" && (
                            <div className="alert alert-danger mt-2">
                                {message}
                            </div>
                        )}
                        {isError &&
                        type === "auth/login/rejected" &&
                        message?.includes("activated") ? (
                            <p>
                                If you are a recruiter, your account might have
                                NOT been verified by the admin.
                            </p>
                        ) : null}
                    </form>
                </div>
            </div>
        </MainContainer>
    );
};

export default LoginPage;
