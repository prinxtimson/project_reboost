import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import {
    getRecruiterByUserId,
    rejectRecruiter,
    verifyRecruiter,
    reset,
    clear,
} from "../../features/recruiter/recruiterSlice";

const RecruiterProfilePage = () => {
    const [reason, setReason] = useState("");
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecruiterByUserId(id));
        return () => {
            dispatch(reset());
            dispatch(clear());
        };
    }, []);

    const { recruiter, isLoading, isError, message, isSuccess, type } =
        useSelector((state) => state.recruiter);

    const onVerifyRecruiter = () => {
        if (window.confirm("Confirm Approval")) {
            dispatch(verifyRecruiter(recruiter.id));
        }
    };

    useEffect(() => {
        if (
            isError &&
            (type == "recruiter/reject-recruiters/rejected" ||
                type == "recruiter/verify-recruiters/rejected")
        ) {
            toast.error(message, { onClose: () => dispatch(reset()) });
        }

        if (
            isSuccess &&
            (type == "recruiter/reject-recruiters/fulfilled" ||
                type == "recruiter/verify-recruiters/fulfilled")
        ) {
            toast.success(message, { onClose: () => dispatch(reset()) });
        }
    }, [isLoading, isSuccess, isError]);

    const onRejectRecruiter = () => {
        let data = {
            reason,
            id: recruiter.id,
        };
        dispatch(rejectRecruiter(data));
    };

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Recruiter</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard/recruiters">
                                        Recruiters
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Recruiter
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="animated fadeIn bg-white shadow rounded overflow-hidden">
                    <>
                        <div className="p-3 p-md-4">
                            <div
                                className="mx-auto"
                                style={{ height: 150, width: 150 }}
                            >
                                <div className="avatar w-100 h-100">
                                    <img
                                        src={
                                            !recruiter?.user?.avatar &&
                                            !recruiter?.user?.passport
                                                ? "/assets/img/avatars/0.jpeg"
                                                : recruiter?.user?.avatar
                                                ? `${recruiter?.user?.avatar}`
                                                : `/fs/dl/${recruiter?.user?.passport.link}`
                                        }
                                        alt={recruiter?.user?.name}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="p-3 p-md-4">
                            <div className="row">
                                <div className="col-12 col-md-8">
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Company Name:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {recruiter?.companyName || ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Address:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {recruiter?.address || ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Contact Name:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {recruiter?.user.name || ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Telephone Number:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {recruiter?.user.phoneNo || ""}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Email Address:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <a
                                                href={`mailto:${recruiter?.email}`}
                                            >
                                                <p className="fw-bold">
                                                    {recruiter?.email || ""}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Website:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <a
                                                href={`https://${recruiter?.website}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <p className="fw-bold">
                                                    {recruiter?.website || ""}
                                                </p>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 col-md-4">
                                            <p className="text-muted float-md-right">
                                                Industry:
                                            </p>
                                        </div>
                                        <div className="col-12 col-md-8">
                                            <p className="fw-bold">
                                                {recruiter?.industry || ""}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4">
                                    {!recruiter?.user?.adminVerified && (
                                        <div className="d-grid gap-5 col-6 mx-auto">
                                            <button
                                                className={`btn btn-success ${
                                                    isLoading ? "disabled" : ""
                                                }`}
                                                type="button"
                                                onClick={onVerifyRecruiter}
                                                disabled={isLoading}
                                            >
                                                Approve
                                            </button>
                                            <button
                                                className={`btn btn-danger ${
                                                    isLoading ? "disabled" : ""
                                                }`}
                                                type="button"
                                                data-bs-toggle="modal"
                                                data-bs-target="#rejectModal"
                                                disabled={isLoading}
                                            >
                                                Reject
                                            </button>
                                        </div>
                                    )}

                                    {recruiter?.rejectionReason && (
                                        <div className="my-4 card">
                                            <div className="card-body">
                                                <p className="text-center fw-bold ">
                                                    Reason for rejection
                                                </p>
                                                <p>
                                                    {recruiter?.rejectionReason}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                </div>
                <div
                    className="modal fade"
                    id="rejectModal"
                    tabindex="-1"
                    aria-labelledby="rejectModalLabel"
                    aria-hidden="true"
                >
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body">
                                <h5
                                    className="modal-title text-center"
                                    id="rejectModalLabel"
                                >
                                    Confirm Rejection
                                </h5>
                                <form className="form g-3" autoComplete="off">
                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="message-text"
                                            className="col-form-label"
                                        >
                                            Reason for rejection
                                        </label>
                                        <textarea
                                            className="form-control"
                                            id="reason"
                                            name="reason"
                                            onChange={(e) =>
                                                setReason(e.target.value)
                                            }
                                        ></textarea>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    onClick={onRejectRecruiter}
                                    className="btn btn-primary"
                                    data-bs-dismiss="modal"
                                >
                                    Yes
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default RecruiterProfilePage;
