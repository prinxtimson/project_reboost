import ReactDOM from "react-dom";
import { useEffect, useMemo } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";

import "../../css/app.css";
import "react-toastify/dist/ReactToastify.css";

import { store } from "./store";
import { onNewNotification } from "./features/notification/notificationSlice";

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
import RecruiterProfilePage from "./Pages/Admin/RecruiterProfilePage";
import CandidateProfilePage from "./Pages/Admin/CandidateProfilePage";

const App = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    useMemo(() => {
        if (user) {
            window.Echo.private(`App.Models.User.${user?.id}`).notification(
                (notification) => {
                    console.log(notification);

                    dispatch(onNewNotification(notification));
                }
            );
        }
    }, [user]);

    useEffect(() => {
        const token = localStorage.getItem("jwt_token");

        if (token) {
            window.axios.defaults.headers.common["Authorization"] = token;
        }
    }, []);

    return (
        <>
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
                        <Route
                            path="add-user"
                            element={
                                <AuthRoute>
                                    <AddUserPage />
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
                        <Route
                            path="users/:path"
                            element={
                                <AuthRoute>
                                    <UsersPage />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="users/recruiter/:id"
                            element={
                                <AuthRoute>
                                    <RecruiterProfilePage />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="users/candidate/:id"
                            element={
                                <AuthRoute>
                                    <CandidateProfilePage />
                                </AuthRoute>
                            }
                        />

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
                        path="/password/reset/:token"
                        element={
                            <GuestRoute>
                                <ResetPassword />
                            </GuestRoute>
                        }
                    />
                </Routes>
            </BrowserRouter>
            <ToastContainer autoClose={5000} />
        </>
    );
};

export default App;

if (document.getElementById("app")) {
    const element = document.getElementById("app");

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        element
    );
}
