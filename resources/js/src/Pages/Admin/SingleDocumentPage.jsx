import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import { archiveDocs, clear, deleteDocs } from "../../features/docs/docsSlice";
import moment from "moment";

const SingleDocumentPage = () => {
    const dispatch = useDispatch();

    const { document, isLoading, isError, isSuccess, message, type } =
        useSelector((state) => state.document);

    useEffect(() => {
        return () => dispatch(clear());
    }, []);

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-head">
                    <div className="">
                        <h3 className="page-title">Document</h3>
                        <ul className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to="/dashboard/documents/">
                                    My Documents
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">Document</li>
                        </ul>
                    </div>
                </div>

                <div className="animated fadeIn bg-white shadow rounded overflow-hidden p-4 my-3">
                    <div className="d-flex align-items-center flex-column">
                        <div className="py-2">
                            {document.file.link
                                .toLowerCase()
                                .includes("pdf") ? (
                                <i
                                    className={`fa fa-file-pdf-o d-block ${
                                        isLoading && "disabled"
                                    }`}
                                    style={{ fontSize: "10em" }}
                                ></i>
                            ) : document.file.link
                                  .toLowerCase()
                                  .includes("doc") ||
                              document.file.link
                                  .toLowerCase()
                                  .includes("docx") ? (
                                <i
                                    className={`fa fa-file-word-o d-block ${
                                        isLoading && "disabled"
                                    }`}
                                    style={{ fontSize: "10em" }}
                                ></i>
                            ) : document.file.link
                                  .toLowerCase()
                                  .includes("xls") ||
                              document.file.link
                                  .toLowerCase()
                                  .includes("xlsx") ||
                              document.file.link
                                  .toLowerCase()
                                  .includes("csv") ? (
                                <i
                                    className={`fa fa-file-excel-o d-block ${
                                        isLoading && "disabled"
                                    }`}
                                    style={{ fontSize: "10em" }}
                                ></i>
                            ) : document.file.link
                                  .toLowerCase()
                                  .includes("png") ||
                              document.file.link
                                  .toLowerCase()
                                  .includes("jpg") ||
                              document.file.link
                                  .toLowerCase()
                                  .includes("jpeg") ||
                              document.file.link
                                  .toLowerCase()
                                  .includes("gif") ? (
                                <i
                                    className={`fa fa-file-image-o d-block ${
                                        isLoading && "disabled"
                                    }`}
                                    style={{ fontSize: "10em" }}
                                ></i>
                            ) : null}
                        </div>

                        <div className="py-2">
                            <h3 className="fw-bold">{document.name}</h3>
                        </div>

                        <div className="py-2" style={{ width: 420 }}>
                            <div className="row">
                                <div className="col-12 col-md-5">
                                    <p className="text-muted float-md-right">
                                        Uploaded At:
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="fw-bold">
                                        {moment(document.created_at).format(
                                            "lll"
                                        )}
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-5">
                                    <p className="text-muted float-md-right">
                                        Last Updated At:
                                    </p>
                                </div>
                                <div className="col-12 col-md-6">
                                    <p className="fw-bold">
                                        {moment(document.updated_at).format(
                                            "lll"
                                        )}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="py-2">
                            <div className="d-flex justify-content-around">
                                <a
                                    href={`/api/v1/docs/dl/${document.file.link}`}
                                    className="btn btn-primary py-1 mx-2"
                                    download
                                >
                                    <i className="fa fa-download m-r-5"></i>{" "}
                                    Download
                                </a>
                                <button
                                    onClick={() =>
                                        dispatch(archiveDocs(document.id))
                                    }
                                    className="btn btn-warning py-1 mx-2"
                                >
                                    <i className="fa fa-archive m-r-5"></i>{" "}
                                    Archive
                                </button>
                                <button
                                    className="btn py-1 mx-2 btn-danger text-white"
                                    onClick={() =>
                                        window.confirm(
                                            `You are about to delete this document ${document.name}, this can't be undone.`
                                        ) && dispatch(deleteDocs(document.id))
                                    }
                                >
                                    <i className="fa fa-trash-o m-r-5 text-white"></i>{" "}
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default SingleDocumentPage;
