import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import "../../css/app.css";

import { store } from "./store";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import ContactAminPage from "./Pages/ContactAminPage";
import AdminPage from "./Pages/Admin/AdminPage";
import UsersPage from "./Pages/Admin/UsersPage";
import AddUserPage from "./Pages/Admin/AddUserPage";
import ProfilePage from "./Pages/Admin/ProfilePage";
import ChangePasswordPage from "./Pages/Admin/ChangePasswordPage";
import EditProfile from "./Pages/Admin/EditProfilePage";
import GuestRoute from "./utils/GuestRoute";
import AuthRoute from "./utils/AuthRoute";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        const token = localStorage.getItem("jwt_token");

        if (token) {
            window.axios.defaults.headers.common["Authorization"] = token;
        }
    }, []);
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <GuestRoute>
                                <LoginPage />
                            </GuestRoute>
                        }
                    />
                    <Route
                        path="/register"
                        element={
                            <GuestRoute>
                                <RegisterPage />
                            </GuestRoute>
                        }
                    />
                    <Route path="/contact" element={<ContactAminPage />} />
                    <Route path="/dashboard">
                        <Route
                            path=""
                            element={
                                <AuthRoute>
                                    <AdminPage />
                                </AuthRoute>
                            }
                        />
                        <Route path="profile">
                            <Route
                                path=""
                                element={
                                    <AuthRoute>
                                        <ProfilePage />
                                    </AuthRoute>
                                }
                            />
                            <Route
                                path="edit"
                                element={
                                    <AuthRoute>
                                        <EditProfile />
                                    </AuthRoute>
                                }
                            />
                        </Route>
                        <Route path="users">
                            <Route
                                path=""
                                element={
                                    <AuthRoute>
                                        <UsersPage />
                                    </AuthRoute>
                                }
                            />
                            <Route
                                path="add"
                                element={
                                    <AuthRoute>
                                        <AddUserPage />
                                    </AuthRoute>
                                }
                            />
                        </Route>

                        <Route
                            path="change-password"
                            element={
                                <AuthRoute>
                                    <ChangePasswordPage />
                                </AuthRoute>
                            }
                        />
                    </Route>
                    <Route
                        path="/password/forgot"
                        element={
                            <GuestRoute>
                                <ForgotPassword />
                            </GuestRoute>
                        }
                    />
                    <Route
                        path="/password/reset"
                        element={
                            <GuestRoute>
                                <ResetPassword />
                            </GuestRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;

if (document.getElementById("app")) {
    const element = document.getElementById("app");

    ReactDOM.render(<App />, element);
}
