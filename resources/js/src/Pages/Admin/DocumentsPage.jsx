import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import AuthContainer from "../../components/AuthContainer";
import {
    getMyDocuments,
    saveDocs,
    reset,
    deleteDocs,
    archiveDocs,
    setDocument,
} from "../../features/docs/docsSlice";
import { toast } from "react-toastify";

const DocumentsPage = () => {
    const [inputRef, setInputRef] = useState(null);
    const [file, setFile] = useState(null);
    const validFileExt = [
        "xls",
        "xlsx",
        "doc",
        "docx",
        "csv",
        "pdf",
        "jpeg",
        "png",
        "jpg",
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { documents, isLoading, isSuccess, isError, message, type } =
        useSelector((state) => state.document);

    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (
            isError &&
            (type == "document/save-documents/rejected" ||
                type == "document/update-documents/rejected" ||
                type == "document/archive-documents/rejected")
        ) {
            toast.error(message, { onClose: () => dispatch(reset()) });
        }

        if (
            isSuccess &&
            (type == "document/save-documents/fulfilled" ||
                type == "document/delete-documents/fulfilled" ||
                type == "document/archive-documents/fulfilled")
        ) {
            setFile(null);
            toast.success(message, { onClose: () => dispatch(reset()) });
        }
    }, [isLoading, isSuccess, isError]);

    useEffect(() => {
        dispatch(getMyDocuments());
    }, []);

    const onViewDocument = (doc) => {
        dispatch(setDocument(doc));
        navigate(`/dashboard/documents/${doc.id}`);
    };

    const handleDocUpload = (e) => {
        setFile(e.target.files[0]);
        let _data = new FormData();
        _data.append("file", e.target.files[0]);
        _data.append("fileType", e.target.files[0].type);
        _data.append("name", e.target.files[0].name);
        _data.append("tag", "documents");
        _data.append("objID", user.id);

        dispatch(saveDocs(_data));
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        let fileExt = e.dataTransfer.files[0].name.split(".")[1];
        if (!validFileExt.includes(fileExt)) {
            toast.error("Invalid file input");
            return;
        }

        setFile(e.dataTransfer.files[0]);
        let _data = new FormData();
        _data.append("file", e.dataTransfer.files[0]);
        _data.append("fileType", e.dataTransfer.files[0].type);
        _data.append("name", e.dataTransfer.files[0].name);
        _data.append("tag", "documents");
        _data.append("objID", user.id);

        dispatch(saveDocs(_data));
    };

    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Task Manager</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to="/dashboard">Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">
                                    My Documents
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="animated fadeIn">
                    <div className="row row-sm">
                        <div
                            onClick={() => inputRef?.click()}
                            className="col-12 px-4"
                            style={{ cursor: "pointer" }}
                        >
                            <div
                                className="upload-drop-zone py-5"
                                id="drop-zone"
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >
                                {!file ? (
                                    <i className="fa fa-cloud-upload fa-4x d-block"></i>
                                ) : file.name.toLowerCase().includes("pdf") ? (
                                    <i className="fa fa-file-pdf-o fa-4x d-block"></i>
                                ) : file.name.toLowerCase().includes("doc") ||
                                  file.name.toLowerCase().includes("docx") ? (
                                    <i className="fa fa-file-word-o fa-4x d-block"></i>
                                ) : file.name.toLowerCase().includes("xls") ||
                                  file.name.toLowerCase().includes("xlsx") ||
                                  file.name.toLowerCase().includes("csv") ? (
                                    <i className="fa fa-file-excel-o fa-4x d-block"></i>
                                ) : file.name.toLowerCase().includes("png") ||
                                  file.name.toLowerCase().includes("jpg") ||
                                  file.name.toLowerCase().includes("jpeg") ||
                                  file.name.toLowerCase().includes("gif") ? (
                                    <i className="fa fa-file-image-o fa-4x d-block"></i>
                                ) : null}

                                {file ? (
                                    <span>{file.name}</span>
                                ) : (
                                    <span>Choose file</span>
                                )}
                                {isLoading &&
                                    type ==
                                        "document/save-documents/pending" && (
                                        <div
                                            className="spinner-border text-secondary d-block mx-auto"
                                            role="status"
                                        >
                                            <span className="visually-hidden">
                                                Loading...
                                            </span>
                                        </div>
                                    )}
                            </div>
                        </div>
                        <input
                            hidden
                            id="imageUpload"
                            onChange={handleDocUpload}
                            ref={(ref) => setInputRef(ref)}
                            type="file"
                            accept="image/*,.xls,.xlsx,.doc,.docx,.csv,.pdf"
                        />
                    </div>

                    <div className="my-4">
                        <div className="">
                            <h4 className="fw-bold">List of Documents</h4>
                        </div>

                        <div className="my-4">
                            {documents.map((doc) => (
                                <div
                                    className="d-flex align-items-center justify-content-center border border-2 border-secondary my-2 rounded"
                                    style={{ backgroundColor: "#f5f5f5" }}
                                    key={doc.id}
                                >
                                    <div className="mx-2">
                                        {doc.file.link
                                            .toLowerCase()
                                            .includes("pdf") ? (
                                            <i
                                                className={`fa fa-file-pdf-o fa-2x d-block ${
                                                    isLoading && "disabled"
                                                }`}
                                            ></i>
                                        ) : doc.file.link
                                              .toLowerCase()
                                              .includes("doc") ||
                                          doc.file.link
                                              .toLowerCase()
                                              .includes("docx") ? (
                                            <i
                                                className={`fa fa-file-word-o fa-2x d-block ${
                                                    isLoading && "disabled"
                                                }`}
                                            ></i>
                                        ) : doc.file.link
                                              .toLowerCase()
                                              .includes("xls") ||
                                          doc.file.link
                                              .toLowerCase()
                                              .includes("xlsx") ||
                                          doc.file.link
                                              .toLowerCase()
                                              .includes("csv") ? (
                                            <i
                                                className={`fa fa-file-excel-o fa-2x d-block ${
                                                    isLoading && "disabled"
                                                }`}
                                            ></i>
                                        ) : doc.file.link
                                              .toLowerCase()
                                              .includes("png") ||
                                          doc.file.link
                                              .toLowerCase()
                                              .includes("jpg") ||
                                          doc.file.link
                                              .toLowerCase()
                                              .includes("jpeg") ||
                                          doc.file.link
                                              .toLowerCase()
                                              .includes("gif") ? (
                                            <i
                                                className={`fa fa-file-image-o fa-2x d-block ${
                                                    isLoading && "disabled"
                                                }`}
                                            ></i>
                                        ) : null}
                                    </div>
                                    <div className="flex-grow-1 mx-2">
                                        <p className="mb-0">{doc.name}</p>
                                    </div>
                                    <div className="dropdown">
                                        <button
                                            className="action-icon bg-transparent border-0 btn-sm"
                                            id="docDropdownMenuButton"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <i className="material-icons">
                                                more_vert
                                            </i>
                                        </button>
                                        <div
                                            className="dropdown-menu dropdown-menu-right"
                                            aria-labelledby="docDropdownMenuButton"
                                        >
                                            <button
                                                onClick={() =>
                                                    onViewDocument(doc)
                                                }
                                                className="btn-block dropdown-item py-1 m-0"
                                            >
                                                <i className="fa fa-eye m-r-5"></i>{" "}
                                                View
                                            </button>

                                            <a
                                                href={`/api/v1/docs/dl/${doc.file.link}`}
                                                className="btn-block dropdown-item py-1 m-0"
                                                download
                                            >
                                                <i className="fa fa-download m-r-5"></i>{" "}
                                                Download
                                            </a>
                                            <button
                                                onClick={() =>
                                                    dispatch(
                                                        archiveDocs(doc.id)
                                                    )
                                                }
                                                className="btn-block dropdown-item py-1 m-0"
                                            >
                                                <i className="fa fa-archive m-r-5"></i>{" "}
                                                Archive
                                            </button>
                                            <button
                                                className="btn-block dropdown-item py-1 m-0 btn-danger text-danger"
                                                onClick={() =>
                                                    window.confirm(
                                                        `You are about to delete this document ${doc.name}, this can't be undone.`
                                                    ) &&
                                                    dispatch(deleteDocs(doc.id))
                                                }
                                            >
                                                <i className="fa fa-trash-o m-r-5 text-danger"></i>{" "}
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default DocumentsPage;
