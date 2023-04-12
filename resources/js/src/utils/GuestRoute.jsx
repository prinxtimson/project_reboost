import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMe } from "../features/auth/authSlice";
import LoadingScreen from "../components/LoadingScreen";

const GuestRoute = ({ children }) => {
    const location = useLocation();
    const dispatch = useDispatch();
    const { user, isLoading, type } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getMe());
    }, []);

    const redirectPath = "/dashboard";

    if (isLoading && type === "auth/get-me/pending") {
        return <LoadingScreen />;
    }

    if (user) {
        return <Navigate to={redirectPath} />;
    }

    return children;
};

export default GuestRoute;
