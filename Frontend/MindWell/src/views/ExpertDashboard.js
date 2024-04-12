import React, { Fragment } from "react";
import { Col, Dropdown, Row, Table, Button } from "react-bootstrap";
import ReactECharts from "echarts-for-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Chart
import Chart from "react-apexcharts";

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

    const chart6 = {
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
    };


    const chart3 = {
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
                max: 100,
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
    }
    const chart4 = {
        options: {
            chart: {
                height: 290,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function () {
                                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                                return 249
                            }
                        }
                    },
                    track: {
                        background: ['#089bab', '#FC9F5B', '#75DDDD', '#ffb57e']
                    }
                }
            },
        },
        series: [44, 55, 67, 83],
        labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        colors: ['#089bab', '#FC9F5B', '#75DDDD', '#ffb57e'],
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
                                                    <th scope="col">Date Of Appointment</th>
                                                    <th scope="col">Time Of Appointment</th>
                                                    <th scope="col"> Report</th>
                                                    <th scope="col">Diseases</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-center">
                                                        <img
                                                            className="rounded-circle img-fluid avatar-40"
                                                            src={user7}
                                                            alt="profile"
                                                        />
                                                    </td>
                                                    <td>Petey Cruiser</td>
                                                    <td>12-02-2020</td>
                                                    <td>12:00 PM</td>

                                                    <td>
                                                        <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                                                    </td>
                                                    <td>Fracture</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <img
                                                            className="rounded-circle img-fluid avatar-40"
                                                            src={user7}
                                                            alt="profile"
                                                        />
                                                    </td>
                                                    <td>Petey Cruiser</td>
                                                    <td>12-02-2020</td>
                                                    <td>12:00 PM</td>

                                                    <td>
                                                        <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                                                    </td>
                                                    <td>Fracture</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <img
                                                            className="rounded-circle img-fluid avatar-40"
                                                            src={user7}
                                                            alt="profile"
                                                        />
                                                    </td>
                                                    <td>Petey Cruiser</td>
                                                    <td>12-02-2020</td>
                                                    <td>12:00 PM</td>

                                                    <td>
                                                        <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                                                    </td>
                                                    <td>Fracture</td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center">
                                                        <img
                                                            className="rounded-circle img-fluid avatar-40"
                                                            src={user7}
                                                            alt="profile"
                                                        />
                                                    </td>
                                                    <td>Petey Cruiser</td>
                                                    <td>12-02-2020</td>
                                                    <td>12:00 PM</td>

                                                    <td>
                                                        <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                                                    </td>
                                                    <td>Fracture</td>
                                                </tr>

                                                <tr>
                                                    <td className="text-center">
                                                        <img
                                                            className="rounded-circle img-fluid avatar-40"
                                                            src={user7}
                                                            alt="profile"
                                                        />
                                                    </td>
                                                    <td>Petey Cruiser</td>
                                                    <td>12-02-2020</td>
                                                    <td>12:00 PM</td>

                                                    <td>
                                                        <i className="ri-file-pdf-line font-size-16 text-danger"></i>
                                                    </td>
                                                    <td>Fracture</td>
                                                </tr>
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
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="media-support-info">
                                                    <h6>Chitransh Kulshrestha</h6>
                                                    <Link to="#">Male</Link>
                                                </div>

                                                <Button variant="outline-warning" className="me-1 mb-3 ">
                                                    <i className="ri-message-fill"></i>{"       "}Chat
                                                </Button>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="media-support-info">
                                                    <h6>Chitransh Kulshrestha</h6>
                                                    <Link to="#">Male</Link>
                                                </div>

                                                <Button variant="outline-warning" className="me-1 mb-3 ">
                                                    <i className="ri-message-fill"></i>{"       "}Chat
                                                </Button>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="media-support-info">
                                                    <h6>Chitransh Kulshrestha</h6>
                                                    <Link to="#">Male</Link>
                                                </div>

                                                <Button variant="outline-warning" className="me-1 mb-3 ">
                                                    <i className="ri-message-fill"></i>{"       "}Chat
                                                </Button>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="media-support-info">
                                                    <h6>Chitransh Kulshrestha</h6>
                                                    <Link to="#">Male</Link>
                                                </div>

                                                <Button variant="outline-warning" className="me-1 mb-3 ">
                                                    <i className="ri-message-fill"></i>{"       "}Chat
                                                </Button>
                                            </li>
                                            <li className="d-flex mb-4 align-items-center">
                                                <div className="media-support-info">
                                                    <h6>Chitransh Kulshrestha</h6>
                                                    <Link to="#">Male</Link>
                                                </div>

                                                <Button variant="outline-warning" className="me-1 mb-3 ">
                                                    <i className="ri-message-fill"></i>{"       "}Chat
                                                </Button>
                                            </li>
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
                                        <li>
                                            <div className="timeline-dots-fill"></div>
                                            <h5 className="float-start mb-2 text-dark">
                                                {localStorage.getItem('username')}
                                            </h5>


                                            <div className="d-inline-block w-100">
                                                <p>
                                                    Description of the problem faced by the user
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between justify-content-end">
                                                <Button variant="primary" className="me-1 mb-3 ">
                                                    <i class="fa fa-check"></i>accept
                                                </Button>
                                                <Button variant="danger" className="me-1 mb-3 ">
                                                    <i class="fa fa-trash"></i>Reject
                                                </Button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots-fill"></div>
                                            <h5 className="float-start mb-2 text-dark">
                                                {localStorage.getItem('username')}
                                            </h5>


                                            <div className="d-inline-block w-100">
                                                <p>
                                                    Description of the problem faced by the user
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between justify-content-end">
                                                <Button variant="primary" className="me-1 mb-3 ">
                                                    <i class="fa fa-check"></i>accept
                                                </Button>
                                                <Button variant="danger" className="me-1 mb-3 ">
                                                    <i class="fa fa-trash"></i>Reject
                                                </Button>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="timeline-dots-fill"></div>
                                            <h5 className="float-start mb-2 text-dark">
                                                {localStorage.getItem('username')}
                                            </h5>


                                            <div className="d-inline-block w-100">
                                                <p>
                                                    Description of the problem faced by the user
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between justify-content-end">
                                                <Button variant="primary" className="me-1 mb-3 ">
                                                    <i class="fa fa-check"></i>accept
                                                </Button>
                                                <Button variant="danger" className="me-1 mb-3 ">
                                                    <i class="fa fa-trash"></i>Reject
                                                </Button>
                                            </div>
                                        </li>

                                        <li>
                                            <div className="timeline-dots-fill"></div>
                                            <h5 className="float-start mb-2 text-dark">
                                                {localStorage.getItem('username')}
                                            </h5>


                                            <div className="d-inline-block w-100">
                                                <p>
                                                    Description of the problem faced by the user
                                                </p>
                                            </div>
                                            <div className="d-flex justify-content-between justify-content-end">
                                                <Button variant="primary" className="me-1 mb-3 ">
                                                    <i class="fa fa-check"></i>Accept
                                                </Button>
                                                <Button variant="danger" className="me-1 mb-3 ">
                                                    <i class="fa fa-trash"></i>Reject
                                                </Button>
                                            </div>
                                        </li>


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