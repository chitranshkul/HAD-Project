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



const DoctorDashboard = () => {





    const [experts, setExperts] = useState([
        {
            name: "",
            username: "",
            gender: "",
            phone: ""
        }
    ]);


    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const role = localStorage.getItem('role');
        console.log("Role: ", role, "Access Token: ", accessToken)
        if (role !== "SENIOR_DOCTOR" || !accessToken)
            navigate('/sign-in');
        else {
            console.log("Fetching Experts");
            axios.get('/api/v1/SeniorDoctor/getExpertsUnderDoctor/' + localStorage.getItem('username'))
                .then(response => {
                    console.log(response.data)
                    setExperts(response.data);
                })
                .catch(error => {
                    console.error('Error fetching questions:', error);
                });
        }

    }, []);


    return (
        <Fragment>
            <Row>
                <Col md="12">
                    <Row>
                        <Col>
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Experts under You</h4>
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
                                                    <th scope="col"></th>
                                                    <th scope="col">Expert Name</th>
                                                    <th scope="col">Gender </th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Phone No.</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {experts.map((expert, index) => (
                                                    <tr>
                                                        <td className="text-center">
                                                            <img
                                                                className="rounded-circle img-fluid avatar-40"
                                                                src={user7}
                                                                alt="profile"
                                                            />
                                                        </td>
                                                        <td><Link to={"/home/doctors-profile/" + expert.username}>{expert.name}</Link></td>
                                                        <td>{expert.gender}</td>
                                                        <td>{expert.username}</td>
                                                        <td>{"+91 "+expert.phone}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
}
export default DoctorDashboard;