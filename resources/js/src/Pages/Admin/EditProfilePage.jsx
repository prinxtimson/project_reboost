import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { editMe, reset } from "../../features/auth/authSlice";
import axios from "axios";

const EditProfilePage = () => {
    const [inputRef, setInputRef] = useState(null);
    const [file, setFile] = useState(null);
    const [avatar, setAvatar] = useState("");
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phoneNo: "",
        otherName: "",
    });

    const { firstName, lastName, phoneNo, otherName } = formData;

    const dispatch = useDispatch();
    const { user, isLoading, isError, isSuccess, message, type } = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        setFormData({
            ...formData,
            id: user?.id,
            email: user?.email,
            username: user?.username,
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            phoneNo: user?.phoneNo || "",
            otherName: user?.otherName || "",
        });
        let _avatar =
            !user?.avatar && !user?.passport
                ? "/assets/img/avatars/0.jpeg"
                : user?.avatar
                ? user?.avatar
                : `/fs/dl/${user?.passport.link}`;
        setAvatar(_avatar);
    }, [user]);

    useEffect(() => {
        setTimeout(() => dispatch(reset()), 5000);

        // return () => dispatch(reset());
    }, [isLoading, isSuccess, isError]);

    const handleOnChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleFileSelect = (e) => {
        setFile(e.target.files[0]);

        // axios.post("/v1/fs", {
        //     id: user.id,
        //     file: e.target.files[0],
        //     tag: "passport"
        // })
        setAvatar(URL.createObjectURL(e.target.files[0]));
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();

        dispatch(editMe(formData));
    };

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-head">
                    <div className="">
                        <h3 className="page-title">Edit Profile</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/dashboard/profile">Profile</Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Edit Profile
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="animated fadeIn bg-white shadow rounded overflow-hidden p-4 my-3">
                    <form onSubmit={handleOnSubmit} className="form row g-3">
                        <div className="py-2 position-relative mb-3 avatar">
                            <img
                                src={avatar}
                                alt={firstName}
                                className="rounded-circle mx-auto d-block"
                                width={150}
                                height={150}
                                style={{ cursor: "pointer" }}
                                onClick={() => inputRef?.click()}
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
                        <div className="mb-3 col-6">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="First name"
                                name="firstName"
                                id="floatingInput"
                                value={firstName}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Surname"
                                name="lastName"
                                id="floatingInput"
                                value={lastName}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Other name"
                                name="otherName"
                                id="floatingInput"
                                value={otherName}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className="mb-3 col-6">
                            <input
                                type="text"
                                className="form-control "
                                placeholder="Phone Number"
                                name="phoneNo"
                                id="floatingInput"
                                value={phoneNo}
                                onChange={handleOnChange}
                                required
                            />
                        </div>
                        <div className=" col-12 ">
                            <button
                                className={`btn btn-${
                                    isLoading ? "secondary" : "primary"
                                }  text-white`}
                                type="submit"
                                disabled={isLoading}
                            >
                                Save
                            </button>
                        </div>
                        {isError && type === "auth/edit-me/rejected" && (
                            <div className="alert alert-danger mt-2">
                                {message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </AuthContainer>
    );
};

export default EditProfilePage;
