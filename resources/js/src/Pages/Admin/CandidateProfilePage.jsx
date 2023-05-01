import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { getCandidateByUserId } from "../../features/candidate/candidateSlice";

const CandidateProfilePage = () => {
    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCandidateByUserId(id));
    }, []);

    const { candidate, isLoading } = useSelector((state) => state.candidate);

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Candidate</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard/candidates">
                                        Candidates
                                    </Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    Candidate
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="">
                        {candidate && !isLoading ? (
                            <div className="row">
                                <div className="col-12 col-md-5 ">
                                    <div className="p-4 animated fadeIn bg-white shadow rounded">
                                        <div className="row mb-3">
                                            <div
                                                className=" col-4"
                                                style={{
                                                    height: 100,
                                                    width: 100,
                                                }}
                                            >
                                                <div
                                                    className="avatar w-100"
                                                    style={{ height: "80%" }}
                                                >
                                                    <img
                                                        src={
                                                            !candidate?.user
                                                                ?.avatar &&
                                                            !candidate?.user
                                                                ?.passport
                                                                ? "/assets/img/avatars/0.jpeg"
                                                                : candidate?.avatar
                                                                ? `${
                                                                      candidate?.avatar
                                                                  }?${new Date().getTime()}`
                                                                : `/fs/dl/${
                                                                      candidate
                                                                          ?.user
                                                                          ?.passport
                                                                          .link
                                                                  }?${new Date().getTime()}`
                                                        }
                                                        alt={
                                                            candidate?.user.name
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-8">
                                                <h4 className="fw-bold">
                                                    {candidate?.user.name}
                                                </h4>
                                                <p className="text-muted">
                                                    {candidate?.title}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-4">
                                                <p className="text-muted ">
                                                    <i className="fa fa-phone m-r-5"></i>{" "}
                                                    Phone:
                                                </p>
                                            </div>
                                            <div className="col-8">
                                                <p className="fw-bold text-break">
                                                    {candidate?.user?.phoneNo ||
                                                        ""}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-4">
                                                <p className="text-muted ">
                                                    <i className="fa fa-envelope m-r-5"></i>{" "}
                                                    Email:
                                                </p>
                                            </div>
                                            <div className="col-8">
                                                <p className="fw-bold text-break">
                                                    {candidate?.user?.email ||
                                                        ""}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-4">
                                                <p className="text-muted ">
                                                    <i className="fa fa-map-marker m-r-5"></i>{" "}
                                                    Location:
                                                </p>
                                            </div>
                                            <div className="col-8">
                                                <p className="fw-bold text-break">
                                                    {candidate?.user
                                                        ?.location || ""}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-7 ">
                                    <div className="p-4 animated fadeIn bg-white shadow rounded">
                                        <div className="py-5">
                                            <h4 className="fw-bold">
                                                About Me
                                            </h4>
                                            <div className="col-12 col-md-8">
                                                {candidate.description?.replace(
                                                    /(<([^>]+)>)/gi,
                                                    ""
                                                ) || ""}
                                            </div>
                                        </div>

                                        <div className="py-5">
                                            <h4 className="fw-bold">
                                                Skills Sets
                                            </h4>
                                            <div className="col-12 col-md-8">
                                                {candidate.skillSet || ""}
                                            </div>
                                        </div>
                                        <div className="py-5">
                                            <h4 className="fw-bold">
                                                Projects
                                            </h4>
                                            <div className="col-12 col-md-8">
                                                <ol>
                                                    {candidate.projects.map(
                                                        (project) => (
                                                            <li
                                                                key={project.id}
                                                            >
                                                                <h4>
                                                                    {
                                                                        project.name
                                                                    }
                                                                </h4>
                                                            </li>
                                                        )
                                                    )}
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default CandidateProfilePage;
