import { useState, useEffect } from "react";
import MainContainer from "../components/MainContainer";
import axios from "axios";

const ContactAminPage = () => {
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [message, setMessage] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        setTimeout(() => {
            setIsError(false);
            setMessage("");
        }, 5000);
        // return () => dispatch(reset());
    }, [loading, isError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios
            .post("/api/contact", formData)
            .then((res) => {
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                setIsError(true);
                setMessage(err.response.data);
            });
    };

    const handleOnChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <MainContainer>
            <div class="card p-2">
                <div class="card-body">
                    <form onSubmit={handleSubmit}>
                        <h1>Contact Admin</h1>

                        <div class="d-block mb-3">
                            <input
                                name="name"
                                className="form-control"
                                placeholder="Full Name"
                                required
                                onChange={handleOnChange}
                            />
                        </div>

                        <div class="d-block mb-3">
                            <input
                                name="email"
                                className="form-control"
                                placeholder="Email"
                                type="email"
                                required
                                onChange={handleOnChange}
                            />
                        </div>

                        <div class="d-block mb-3">
                            <textarea
                                name="message"
                                className="form-control"
                                placeholder="Message"
                                required
                                onChange={handleOnChange}
                                rows="5"
                            ></textarea>
                        </div>

                        <div class="row">
                            <div class="col-8 float-right">
                                <button
                                    disabled={loading}
                                    class="btn btn-primary"
                                >
                                    Submit
                                </button>
                                {loading && (
                                    <img
                                        class="pl-2"
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

export default ContactAminPage;
