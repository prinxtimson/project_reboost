import { configureStore } from "@reduxjs/toolkit";
import auth from "./features/auth/authSlice";
import candidate from "./features/candidate/candidateSlice";
import document from "./features/docs/docsSlice";
import file from "./features/file/fileSlice";
import notification from "./features/notification/notificationSlice";
import profile from "./features/profile/profileSlice";
import recruiter from "./features/recruiter/recruiterSlice";
import role from "./features/role/roleSlice";
import search from "./features/search/searchSlice";
import user from "./features/user/userSlice";

export const store = configureStore({
    reducer: {
        auth,
        candidate,
        document,
        file,
        notification,
        profile,
        recruiter,
        role,
        search,
        user,
    },
});
