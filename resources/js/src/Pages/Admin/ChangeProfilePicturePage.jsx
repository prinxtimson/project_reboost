import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import AuthContainer from "../../components/AuthContainer";
import { Link } from "react-router-dom";
import { deletePassport, editPassport } from "../../features/auth/authSlice";

const ChangeProfilePicturePage = () => {
    const [inputRef, setInputRef] = useState(null);
    const [file, setFile] = useState(null);
    const [avatar, setAvatar] = useState("");

    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message, type } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        let _avatar =
            !user?.avatar && !user?.passport
                ? "/assets/img/avatars/0.jpeg"
                : user?.avatar
                ? user?.avatar
                : `/fs/dl/${user?.passport.link}`;
        setAvatar(_avatar);
    }, [user]);

    useEffect(() => {
        if (isError && type == "auth/edit-passport/rejected") {
            toast.error(message, { onClose: () => dispatch(reset()) });
        }

        if (isSuccess && type == "auth/edit-passport/fulfilled") {
            toast.success(message, { onClose: () => dispatch(reset()) });
        }
    }, [isLoading, isSuccess, isError]);

    const handleFileSelect = (e) => {
        setFile(e.target.files[0]);

        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    const handleOnEdit = () => {
        let _data = new FormData();
        _data.append("file", file);
        _data.append("name", file.name);
        _data.append("tag", "passport");

        if (user.passport) {
            _data.append("id", user.passport.id);
        } else {
            _data.append("objID", user.id);
        }

        dispatch(editPassport(_data));
    };

    const handleDelete = () => {
        if (user.passport) {
            if (
                window.confirm(
                    `Are you sure you want to delete profile picture?`
                )
            ) {
                dispatch(deletePassport(user.passport.id));
            }
        } else {
            toast.error("No profile picture found");
        }
    };

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-head">
                    <div className="">
                        <h3 className="page-title">Change Profile Picture</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/dashboard/profile">Profile</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Change Profile Picture
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="animated fadeIn bg-white shadow rounded overflow-hidden p-4 my-3">
                    <div className="d-flex flex-column">
                        <div className="d-flex">
                            <button className="btn mx-2" onClick={handleDelete}>
                                <i className="fa fa-trash m-r-5"></i> Delete
                            </button>
                            <button className="btn " onClick={handleOnEdit}>
                                <i className="fa fa-camera m-r-5"></i> Add Photo
                            </button>
                            <button className="btn mx-2" onClick={handleOnEdit}>
                                <i className="fa fa-pencil m-r-5"></i> Edit
                            </button>
                        </div>

                        <div className="flex-grow-1 flex-column d-flex justify-content-center align-items-center my-3">
                            <div className="">
                                <img
                                    src={avatar}
                                    alt=""
                                    className="rounded-circle mx-auto d-block text-center"
                                    width={250}
                                    height={250}
                                    style={{
                                        backgroundColor: "#aaa",
                                        color: "#fff",
                                    }}
                                />
                                <input
                                    type="file"
                                    onChange={(e) => handleFileSelect(e)}
                                    name="avatar"
                                    id="avatar"
                                    className="d-none"
                                    accept="image/*"
                                    ref={(ref) => setInputRef(ref)}
                                />
                            </div>
                            <div className="my-3">
                                <button
                                    className="btn btn-primary"
                                    onClick={() => inputRef?.click()}
                                >
                                    Upload Photo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default ChangeProfilePicturePage;
