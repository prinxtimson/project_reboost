import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe, reset } from "../features/auth/authSlice";
import LoadingScreen from "../components/LoadingScreen";
import { getNotification } from "../features/notification/notificationSlice";

const AuthRoute = ({ children }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, isLoading, isSuccess, isError, type } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        dispatch(getMe());
        dispatch(getNotification());
    }, []);

    useEffect(() => {
        if (
            type === "auth/get-me/rejected" ||
            type === "auth/get-me/fulfilled"
        ) {
            dispatch(reset());
        }
    }, [isSuccess, isError]);

    if (isLoading && type === "auth/get-me/pending") {
        return <LoadingScreen />;
    }

    if (!user) {
        return <Navigate to="/" state={{ path: location.pathname }} />;
    }

    return children;
};

export default AuthRoute;
