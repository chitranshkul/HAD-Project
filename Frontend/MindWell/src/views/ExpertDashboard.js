import React, { Fragment, useState, useEffect } from "react";
import { Col, Dropdown, Row, Table, Button } from "react-bootstrap";
import ReactECharts from "echarts-for-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Chart
import Chart from "react-apexcharts";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Img
import user from "../assets/images/user/04.jpg"
import user1 from "../assets/images/user/05.jpg";
import user2 from "../assets/images/user/06.jpg";
import user3 from "../assets/images/user/07.jpg";
import user4 from "../assets/images/user/08.jpg";
import user5 from "../assets/images/user/09.jpg";
import user6 from "../assets/images/user/10.jpg";
import user7 from "../assets/images/user/01.jpg";
import user8 from "../assets/images/user/02.jpg";
import user9 from "../assets/images/user/03.jpg";
import user10 from "../assets/images/page-img/30.png";
import user11 from "../assets/images/page-img/31.png";
import user12 from "../assets/images/page-img/32.png";
import user13 from "../assets/images/page-img/33.png";
// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper modules
import { Navigation } from "swiper/modules";

// Swiper css
import "swiper/css";
import "swiper/css/pagination";

//Link
import { Link } from "react-router-dom";


import axiosInstance from "../axiosInstance";



const ExpertDashboard = () => {

    const [chart6, setChart6] = useState({
        tooltip: {
            trigger: "item",
        },
        legend: {
            top: "5%",
            left: "center",
        },
        series: [
            {
                name: "Access From",
                type: "pie",
                radius: ["40%", "70%"],
                avoidLabelOverlap: false,
                label: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: 40,
                        fontWeight: "bold",
                    },
                },
                labelLine: {
                    show: false,
                },
                data: [
                    { value: 1048, name: "Male" },
                    { value: 735, name: "Female" },
                    { value: 20, name: "Others" },
                ],
            },
        ],

    })



    const [chart3, setChart3] = useState({
        options: {
            chart: {
                height: 150,
                type: "area",
                animations: {
                    enabled: true,
                    easing: "linear",
                    dynamicAnimation: {
                        speed: 1000,
                    },
                },
                toolbar: {
                    show: false,
                },
                sparkline: {
                    enabled: true,
                },
                group: "sparklines",
            },
            colors: ["#fc9f5b"],
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: "straight",
                width: 3,
            },
            markers: {
                size: 4,
            },
            yaxis: {
                max: 10,
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    inverseColors: false,
                    opacityFrom: 0.5,
                    opacityTo: 0,
                    stops: [0, 90, 100],
                },
            },
            legend: {
                show: false,
            }
        },
        series: [
            {
                data: [50, 60, 45, 90, 44, 50, 98, 75, 50],
            },
        ],

    })

    const [appointments, setAppointments] = useState([
        {
            Name: "Chitransh Kulshrestha",
            Date: "2024-04-03",
            Time: "01:00:00",
            username: "chituh@iiitb.ac.in",
            gender: "Male",
            appointid: "1"
        }
    ]);

    const [Pendingappointments, setPendingAppointments] = useState([
        {
            Name: "Chitransh Kulshrestha",
            Date: "2024-04-03",
            Time: "01:00:00",
            username: "chituh@iiitb.ac.in",
            gender: "Male",
            appointid: "1"
        }
    ]);

    const navigate = useNavigate();
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const role = localStorage.getItem('role');
        console.log("Role: ", role, "Access Token: ", accessToken)
        if (role !== "EXPERT" || !accessToken)
            navigate('/sign-in');
        else {
            console.log("Fetching Appointments");
            axios.get('/api/v1/appointment/RoleBasedAppointment/' + localStorage.getItem('id'))
                .then(response => {
                    console.log(response.data)
                    setAppointments(response.data);
                })
                .catch(error => {
                    console.error('Error fetching questions:', error);
                });

            console.log("Gender Distribution");
            axios.get('/api/v1/appointment/genderDistributionByExpert/' + localStorage.getItem('id'))
                .then(response => {
                    console.log(response.data)
                    const updatedChartData = {
                        ...chart6,
                        series: [
                            {
                                ...chart6.series[0],
                                data: response.data, // Update data with API response
                            },
                        ],
                    };
                    setChart6(updatedChartData);
                })
                .catch(error => {
                    console.error('Error fetching questions:', error);
                });

            console.log("Appointent Count");
            axios.get('/api/v1/appointment/appointmentCountByExpert/4')
                .then(response => {
                    console.log(response.data)
                    setChart3(prevState => ({
                        ...prevState,
                        series: [{
                            ...prevState.series[0], // Keep other properties of series intact
                            data: response.data, // Update data with new data array from API
                        }],
                    }));
                })
                .catch(error => {
                    console.error('Error fetching questions:', error);
                });

            axios.get('/api/v1/appointment/getPendingAppointmets/' + localStorage.getItem('id'))
                .then(response => {
                    console.log("Got Pending Appointments", response.data)
                    setPendingAppointments(response.data);
                }).catch(error => {
                    console.error('Error fetching questions:', error);
                });
        }

    }, []);

    const handleAcceptAppointment = async (event, appointment) => {
        event.preventDefault();
        console.log("Accepting Appointment", appointment);
        const response = await axios({
            method: 'post',
            url: `/api/v1/appointment/AcceptOrReject-request/` + appointment.appointid + `/Accept`,
        });
        console.log(response.data);
    }

    const handleRejectAppointment = async (event, appointment) => {
        event.preventDefault();
        console.log("Rejecting Appointment", appointment);
        const response = await axios({
            method: 'post',
            url: `/api/v1/appointment/AcceptOrReject-request/` + appointment.appointid + `/Reject`,
        });
        console.log(response.data);
    }

    return (
        <Fragment>
            <Row>
                <Col md="12" lg="8">
                    <Row>
                        <Col sm="12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Scheduled Appointments</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <Dropdown>
                                            <Dropdown.Toggle
                                                variant="dropdown-toggle text-primary"
                                                id="dropdownMenuButton5"
                                                data-bs-toggle="dropdown"
                                                style={{ border: "none" }}
                                            >
                                                <i className="ri-more-fill"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu
                                                className="dropdown-menu dropdown-menu-end"
                                                aria-labelledby="dropdownMenuButton5"
                                            >
                                                <Dropdown.Item className="dropdown-item" to="#">
                                                    <i className="ri-eye-fill me-2"></i>View
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" to="#">
                                                    <i className="ri-delete-bin-6-fill me-2"></i>Delete
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" to="#">
                                                    <i className="ri-pencil-fill me-2"></i>Edit
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" to="#">
                                                    <i className="ri-printer-fill me-2"></i>Print
                                                </Dropdown.Item>
                                                <Dropdown.Item className="dropdown-item" to="#">
                                                    <i className="ri-file-download-fill me-2"></i>
                                                    Download
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <div className="table-responsive">
                                        <Table className="mb-0" borderless>
                                            <thead>
                                                <tr>
                                                    <th scope="col">Patient</th>
                                                    <th scope="col">Patient Name </th>
                                                    <th scope="col">Gender </th>
                                                    <th scope="col">Date Of Appointment</th>
                                                    <th scope="col">Time Of Appointment</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {appointments.map((appointment, index) => (
                                                    <tr>
                                                        <td className="text-center">
                                                            <img
                                                                className="rounded-circle img-fluid avatar-40"
                                                                src={user7}
                                                                alt="profile"
                                                            />
                                                        </td>
                                                        <td>{appointment.Name}</td>
                                                        <td>{appointment.gender}</td>
                                                        <td>{appointment.Date}</td>
                                                        <td>{appointment.Time}</td>


                                                    </tr>
                                                ))}

                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="12" lg="6">
                            <Row className="row">
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Active Patients</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <ul className="report-lists m-0 p-0">
                                            {appointments.map((appointment, index) => (
                                                <li className="d-flex mb-4 align-items-center">
                                                    <div className="media-support-info">
                                                        <h6>{appointment.Name}</h6>
                                                        <Link to="#">{appointment.gender}</Link>
                                                    </div>

                                                    <Button variant="outline-warning" className="me-1 mb-3 ">
                                                        <i className="ri-message-fill"></i>{"       "}Chat
                                                    </Button>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Row>
                        </Col>
                        <Col md="12" lg="6">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Recent Activity</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <ul className="iq-timeline">
                                        {Pendingappointments.map((appointment, index) => (
                                            <li>
                                                <div className="timeline-dots-fill"></div>
                                                <h5 className="float-start mb-2 text-dark">
                                                    {appointment.Name}
                                                </h5>


                                                <div className="d-inline-block w-100">
                                                    <p>
                                                        Date : {appointment.Date + " " + appointment.Time}
                                                        <br></br>
                                                        Gender: {appointment.gender}
                                                    </p>
                                                </div>
                                                <div className="d-flex justify-content-between justify-content-end">
                                                    <Button variant="primary" className="me-1 mb-3 " onClick={(event) => handleAcceptAppointment(event, appointment)}>
                                                        <i class="fa fa-check"></i>Accept
                                                    </Button>
                                                    <Button variant="danger" className="me-1 mb-3 " onClick={(event) => handleRejectAppointment(event, appointment)}>
                                                        <i class="fa fa-trash" ></i>Reject
                                                    </Button>
                                                </div>
                                            </li>
                                        ))}


                                    </ul>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md="12" lg="4">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Gender Distribution</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <ReactECharts
                                option={chart6}
                                style={{ width: "100%", height: "400px" }}
                            ></ReactECharts>
                        </div>
                    </div>
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Appointment Per Day</h4>
                            </div>
                        </div>
                        <div className="iq-card-body">
                            {/* <div className="row">
                                <div className="col-sm-6">
                                    <h3>5 Apps./Day</h3>
                                </div>
                            </div> */}
                            <Chart options={chart3.options} series={chart3.series} type="line" height={150} />
                            <div className="row text-center mt-3">
                                <div className="col-sm-6">
                                    <h6 className="text-truncate d-block">Last Month</h6>
                                    <p className="m-0">220</p>
                                </div>
                                <div className="col-sm-6">
                                    <h6 className="text-truncate d-block">Current Month</h6>
                                    <p className="m-0">120</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
}
export default ExpertDashboard;