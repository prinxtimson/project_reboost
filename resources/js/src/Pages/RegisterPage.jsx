import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MainContainer from "../components/MainContainer";

const RegisterPage = () => {
    const [visible, setVisible] = useState(false);
    const [steps, setSteps] = useState(1);

    const dispatch = useDispatch();

    const { isLoading, isSuccess, isError, message, type } = useSelector(
        (state) => state.user
    );

    return (
        <MainContainer>
            <div className="card p-2">
                {steps === 1 && (
                    <div className="card-body">
                        <form>
                            <h1>Recruiter's Register</h1>
                            <p className="text-muted">
                                Create your account
                                <span className="float-right">
                                    Have an Account? <Link to="/">Login</Link>{" "}
                                </span>
                            </p>

                            <div className="row">
                                <div className="col-sm-4">
                                    <span className="small text-center text-danger">
                                        Invalid File
                                    </span>
                                </div>
                                <div className="col-sm-8">
                                    <div className="d-block mb-3">
                                        <input
                                            name="companyName"
                                            className="form-control"
                                            placeholder="Company Name"
                                            required
                                        />
                                    </div>

                                    <div className="d-block mb-3">
                                        <input
                                            name="title"
                                            className="form-control"
                                            placeholder="Job Title"
                                            required
                                        />
                                    </div>

                                    <div className="d-block mb-3">
                                        <select
                                            name="industry"
                                            className="form-control"
                                            placeholder="Industry"
                                        >
                                            {industry.map((val) => (
                                                <option value={val} key={val}>
                                                    {val}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="d-block mb-3">
                                        <select
                                            name="type"
                                            className="form-control"
                                            placeholder="Company Type"
                                        >
                                            <option value="type">{}</option>
                                        </select>
                                    </div>
                                    <div className="d-block mb-3">
                                        <select
                                            name="size"
                                            placeholder="Company Size"
                                            className="form-control"
                                        >
                                            <option value="0 - 10 Staff">
                                                0 - 10 Staff
                                            </option>
                                            <option value="11 - 20 Staff">
                                                11 - 20 Staff
                                            </option>
                                            <option value="21 - 50 Staff">
                                                21 - 50 Staff
                                            </option>
                                            <option value="51 - 100 Staff">
                                                51 - 100 Staff
                                            </option>
                                            <option value="Above 100 Staff">
                                                Above 100 Staff
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12">
                                    <div className="d-block mb-3">
                                        <input
                                            name="website"
                                            matInput
                                            placeholder="Company Website"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                    <div className="d-block mb-3">
                                        <textarea
                                            name="description"
                                            matInput
                                            placeholder="About the company..."
                                            required
                                            className="form-control"
                                            rows="3"
                                        ></textarea>
                                    </div>

                                    <div className="d-block mt-3 mb-3">
                                        <input
                                            name="email"
                                            matInput
                                            placeholder="Company email"
                                            required
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="d-block mb-3">
                                        <input
                                            name="username"
                                            type="text"
                                            placeholder="Login Username"
                                            required
                                            className="form-control"
                                        />
                                    </div>

                                    <div className="input-group mb-3">
                                        <input
                                            name="password"
                                            type={`${
                                                visible ? "text" : "password"
                                            }`}
                                            placeholder="Login Password"
                                            className="form-control"
                                            required
                                        />
                                        <div className="input-group-append">
                                            <span
                                                className="input-group-text"
                                                onClick={() =>
                                                    setVisible(!visible)
                                                }
                                            >
                                                <i
                                                    className={`fa ${
                                                        visible
                                                            ? "fa-eye-slash"
                                                            : "fa-eye"
                                                    }`}
                                                ></i>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="input-group mb-3">
                                        <input
                                            name="password_confirmation"
                                            type={`${
                                                visible ? "text" : "password"
                                            }`}
                                            placeholder="Confirm Password"
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            <button
                                disabled={isLoading}
                                className="btn btn-block btn-success"
                                type="submit"
                            >
                                Register
                            </button>
                            {isLoading && (
                                <img
                                    className="pl-2"
                                    src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
                                />
                            )}
                        </form>
                    </div>
                )}

                {steps === 2 && (
                    <div className="card-body text-center">
                        <h1>Registration Successful</h1>
                        <p>
                            Your registration data has been received. A One Time
                            Password (OTP) has been sent to your email. Please
                            Check your email and supply the token below.
                        </p>
                        <form>
                            <div
                                className="row align-middle"
                                style={{
                                    width: "90%",
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}
                            >
                                <div className="input-group m-1">
                                    <input
                                        type="text"
                                        name="{{input}}"
                                        className="form-control "
                                        style={{
                                            width: 20,
                                            padding: 5,
                                        }}
                                        maxLength="1"
                                    />
                                </div>
                                <button
                                    className="btn btn-block btn-secondary mt-3"
                                    type="submit"
                                >
                                    Verify Email
                                </button>
                                <button
                                    className="btn btn-block btn-warning mt-3"
                                    type="submit"
                                >
                                    Re-Send OTP
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {steps === 3 && (
                    <div className="card-body text-center">
                        <h1>Registration Successful</h1>
                        <p>
                            Your registration data has been received and email
                            confirmed. Your login will be enabled by the
                            administrator once your company details are
                            verified.
                        </p>
                        <p>
                            An email will be sent to your registered email to
                            that effect.
                        </p>
                        <p>Thank you.</p>
                    </div>
                )}
            </div>
        </MainContainer>
    );
};

export default RegisterPage;

const industry = [];
