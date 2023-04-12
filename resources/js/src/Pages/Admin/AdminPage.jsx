import {} from "react";
import AuthContainer from "../../components/AuthContainer";

const AdminPage = () => {
    return (
        <AuthContainer>
            <div className="p-4">
                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Dashboard</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item active">
                                    Dashboard
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default AdminPage;
