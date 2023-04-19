import {} from "react";
import {
    Chart as ChartJS,
    ArcElement,
    BarElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import AuthContainer from "../../components/AuthContainer";

ChartJS.register(
    CategoryScale,
    BarElement,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

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

                <div className="row">
                    <div className="col-12 col-md-4">
                        <div className="animated fadeIn bg-white shadow rounded h-100 w-100 p-4">
                            <div className="my-4">
                                <h4 className="fw-bold">Mission</h4>
                                <p>
                                    Our mission is to get non techy people into
                                    tech
                                </p>
                            </div>
                            <div className="my-4">
                                <h4 className="fw-bold">Vision</h4>
                                <p>
                                    We are focused on facilitating your growth,
                                    and we ensure that you reach such
                                    extraordinary levels by allowing you to work
                                    on real and live projects
                                </p>
                            </div>
                            <div className="my-4">
                                <h4 className="fw-bold">Values</h4>
                                <p>Client focused, Results driven</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-12 col-md-6 py-2">
                                <div className="animated fadeIn bg-white shadow rounded h-100 w-100 p-2">
                                    <p className="fw-bold text-center">
                                        Number of Recruiters
                                    </p>
                                    <div className="">
                                        <Line
                                            datasetIdKey="id"
                                            data={{
                                                labels: ["Jun", "Jul", "Aug"],
                                                datasets: [
                                                    {
                                                        id: 1,
                                                        label: "Recruiters",
                                                        data: [5, 6, 7],
                                                        borderColor:
                                                            "rgb(255, 99, 132)",
                                                        backgroundColor:
                                                            "rgba(255, 99, 132, 0.5)",
                                                    },
                                                ],
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 py-2">
                                <div className="animated fadeIn bg-white shadow rounded h-100 w-100 p-2">
                                    <p className="fw-bold text-center">
                                        Number of Candidates
                                    </p>
                                    <div className="">
                                        <Line
                                            datasetIdKey="id"
                                            data={{
                                                labels: ["Jun", "Jul", "Aug"],
                                                datasets: [
                                                    {
                                                        id: 1,
                                                        label: "Candidates",
                                                        data: [5, 6, 7],
                                                        borderColor:
                                                            "rgb(53, 162, 235)",
                                                        backgroundColor:
                                                            "rgba(53, 162, 235, 0.5)",
                                                    },
                                                ],
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 py-2">
                                <div className="animated fadeIn bg-white shadow rounded h-100 w-100 p-2">
                                    <p className="fw-bold text-center">
                                        Shortlisted Candidates
                                    </p>
                                    <div className="">
                                        <Bar
                                            datasetIdKey="id"
                                            data={{
                                                labels: ["Jun", "Jul", "Aug"],
                                                datasets: [
                                                    {
                                                        id: 1,
                                                        label: "Candidates",
                                                        data: [5, 6, 7],
                                                        borderColor:
                                                            "rgb(53, 162, 235)",
                                                        backgroundColor:
                                                            "rgba(53, 162, 235, 0.5)",
                                                    },
                                                ],
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6 py-2">
                                <div className="animated fadeIn bg-white shadow rounded h-100 w-100 p-2">
                                    <p className="fw-bold text-center">
                                        Recent Activity
                                    </p>
                                    <ul>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                        <li>Lorem ipsum dolor sit amet</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthContainer>
    );
};

export default AdminPage;
