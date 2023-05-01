import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { getMyActivities } from "../../features/activity/activitySlice";
import moment from "moment";
import { getRecruitersByDate } from "../../features/recruiter/recruiterSlice";
import { getCandidateByDate } from "../../features/candidate/candidateSlice";
import { getShortListsByDate } from "../../features/search/searchSlice";

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
    const [recruiterDataset, setRecruiterDataset] = useState({
        labels: [],
        data: [],
    });
    const [candidateDataset, setCandidateDataset] = useState({
        labels: [],
        data: [],
    });
    const [shortlistDataset, setShortlistDataset] = useState({
        labels: [],
        data: [],
    });
    const dispatch = useDispatch();

    const { activities } = useSelector((state) => state.activity);
    const { recruiters } = useSelector((state) => state.recruiter);
    const { candidates } = useSelector((state) => state.candidate);
    const { data } = useSelector((state) => state.search);

    useEffect(() => {
        dispatch(getMyActivities());
        dispatch(getRecruitersByDate());
        dispatch(getCandidateByDate());
        dispatch(getShortListsByDate());
    }, []);

    useEffect(() => {
        if (recruiters) {
            let _labels = [];
            let _data = [];
            for (let key in recruiters) {
                if (recruiters.hasOwnProperty(key)) {
                    _labels.push(key);
                    _data.push(recruiters[key].length);
                }
            }
            setRecruiterDataset({ labels: _labels, data: _data });
        }
    }, [recruiters]);

    useEffect(() => {
        if (candidates) {
            let _labels = [];
            let _data = [];
            for (let key in candidates) {
                if (candidates.hasOwnProperty(key)) {
                    _labels.push(key);
                    _data.push(candidates[key].length);
                }
            }
            setCandidateDataset({ labels: _labels, data: _data });
        }
    }, [candidates]);

    useEffect(() => {
        if (data) {
            let _labels = [];
            let _data = [];
            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    _labels.push(key);
                    _data.push(data[key].length);
                }
            }
            setShortlistDataset({ labels: _labels, data: _data });
        }
    }, [data]);

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
                                                labels: recruiterDataset.labels,
                                                datasets: [
                                                    {
                                                        id: 1,
                                                        label: "Recruiters",
                                                        data: recruiterDataset.data,
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
                                                labels: candidateDataset.labels,
                                                datasets: [
                                                    {
                                                        id: 1,
                                                        label: "Candidates",
                                                        data: candidateDataset.data,
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
                                                labels: shortlistDataset.labels,
                                                datasets: [
                                                    {
                                                        id: 1,
                                                        label: "Candidates",
                                                        data: shortlistDataset.data,
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
                                    <p className="fw-bold text-center mb-1">
                                        Recent Activity
                                    </p>
                                    <ul className="mx-0 px-0">
                                        {activities.map((item) => (
                                            <li
                                                key={item.id}
                                                className="d-flex justify-content-center align-items-center py-2"
                                            >
                                                <div className="flex-grow-1">
                                                    You {item.type}
                                                </div>
                                                <div className="text-muted">
                                                    {moment(
                                                        item.created_at
                                                    ).fromNow()}
                                                </div>
                                            </li>
                                        ))}
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
