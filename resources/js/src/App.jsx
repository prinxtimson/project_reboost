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
import TaskManagerPage from "./Pages/Admin/TaskManagerPage";
import TaskPage from "./Pages/Admin/TaskPage";
import UserTaskPage from "./Pages/Admin/UserTaskPage";
import DocumentsPage from "./Pages/Admin/DocumentsPage";
import SingleDocumentPage from "./Pages/Admin/SingleDocumentPage";
import RecruiterUsersPage from "./Pages/Admin/RecruiterUsersPage";
import CandidateUsersPage from "./Pages/Admin/CandidateUsersPage";
import ChangeProfilePicturePage from "./Pages/Admin/ChangeProfilePicturePage";
import AddRecruiterPage from "./Pages/Admin/AddRecruiterPage";
import AddCandidatePage from "./Pages/Admin/AddCandidatePage";

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
                            path="documents"
                            element={
                                <AuthRoute>
                                    <DocumentsPage />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="documents/:id"
                            element={
                                <AuthRoute>
                                    <SingleDocumentPage />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="task-manager"
                            element={
                                <AuthRoute>
                                    <TaskManagerPage />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="task-manager/view/:id"
                            element={
                                <AuthRoute>
                                    <TaskPage />
                                </AuthRoute>
                            }
                        />
                        <Route
                            path="task-manager/my-tasks"
                            element={
                                <AuthRoute>
                                    <UserTaskPage />
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
                            <Route
                                path="change-profile-picture"
                                element={
                                    <AuthRoute>
                                        <ChangeProfilePicturePage />
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
                            path="admin"
                            element={
                                <AuthRoute>
                                    <UsersPage />
                                </AuthRoute>
                            }
                        />

                        <Route
                            path="admin/add"
                            element={
                                <AuthRoute>
                                    <AddUserPage />
                                </AuthRoute>
                            }
                        />

                        <Route path="recruiters">
                            <Route
                                path=""
                                element={
                                    <AuthRoute>
                                        <RecruiterUsersPage />
                                    </AuthRoute>
                                }
                            />
                            <Route
                                path="add"
                                element={
                                    <AuthRoute>
                                        <AddRecruiterPage />
                                    </AuthRoute>
                                }
                            />
                            <Route
                                path="view/:id"
                                element={
                                    <AuthRoute>
                                        <RecruiterProfilePage />
                                    </AuthRoute>
                                }
                            />
                        </Route>
                        <Route path="candidates">
                            <Route
                                path=""
                                element={
                                    <AuthRoute>
                                        <CandidateUsersPage />
                                    </AuthRoute>
                                }
                            />
                            <Route
                                path="add"
                                element={
                                    <AuthRoute>
                                        <AddCandidatePage />
                                    </AuthRoute>
                                }
                            />
                            <Route
                                path="view/:id"
                                element={
                                    <AuthRoute>
                                        <CandidateProfilePage />
                                    </AuthRoute>
                                }
                            />
                        </Route>
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
