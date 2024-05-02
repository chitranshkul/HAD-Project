import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// Chart
import Chart from 'react-apexcharts';

//Buttons and Dropdown
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

//Axios
import axiosInstance from '../axiosInstance';
import axios from 'axios';

const AdminDashboard = () => {


    const [totalAdmin, setToalAdmin] = useState(0);
    const [totalDoctors, setTotalDoctors] = useState(0);
    const [totalPatients, setTotalPatients] = useState(0);
    const [totalModerators, setTotalModerators] = useState(0);
    const [totalExperts, setTotalExperts] = useState(0);

    const [roleList, setRoleList] = useState([
        {
            name: "",
            gender: "",
            contact_no: ""
        }
    ]);

    const [selectedOption, setSelectedOption] = useState({
        key: 2, value: 'Patients', name: "PATIENT"
    });

    const dropdownOptions = [
        { key: 0, value: 'Admin', name: "ADMIN" },
        { key: 1, value: 'Doctors', name: "SENIOR_DOCTOR" },
        { key: 2, value: 'Patients', name: "PATIENT" },
        { key: 3, value: 'Moderators', name: "MODERATOR" },
        { key: 4, value: 'Experts', name: "EXPERT" }
    ];


    const handleOptionSelect = (option) => {
        setSelectedOption(dropdownOptions[option]);
    };

    const navigate = useNavigate();

    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const headers = {
            "Access-Control-Allow-Origin": "*",
            // "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        };
        const url = '/admin/getlistbyrole/' + selectedOption.name;
        console.log("Selected Option: ", selectedOption.name)
        axiosInstance.get(url, { headers: headers }).then((response) => {
            console.log("I had Changed the URL");
            setRoleList(response.data);
        });
    }, [selectedOption]);


    useEffect(() => {
        const accessToken = localStorage.getItem('access_token');
        const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${accessToken}`,
        };

        axios.get('/api/v1/admin/getcount/ADMIN', { headers: headers })
            .then(response => {
                console.log("Admins: ", response.data);
                setToalAdmin(response.data);
            })
            axios.get('/api/v1/admin/getcount/MODERATOR', { headers: headers })
            .then(response => {
                console.log("Admins: ", response.data);
                setTotalModerators(response.data);
            })
            axios.get('/api/v1/admin/getcount/PATIENT', { headers: headers })
            .then(response => {
                console.log("Admins: ", response.data);
                setTotalPatients(response.data);
            })
            axios.get('/api/v1/admin/getcount/EXPERT', { headers: headers })
            .then(response => {
                console.log("Admins: ", response.data);
                setTotalExperts(response.data);
            })
            axios.get('/api/v1/admin/getcount/SENIOR_DOCTOR', { headers: headers })
            .then(response => {
                console.log("Admins: ", response.data);
                setTotalDoctors(response.data);
            })


    }, [])




    // useEffect(()=>{
    //     const accessToken = localStorage.getItem('access_token');
    //     try {

    //         const headers = {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //             Authorization: `Bearer ${accessToken}`,
    //         };
    //         axiosInstance.get('/admin/getcount/SENIOR_DOCTOR', { headers: headers }).then((response) => {
    //             console.log("Admins: ", response.data);
    //             setTotalDoctors(response.data);
    //         });

    //     }catch(error){
    //         console.log(error);
    //     }
    // },[totalDoctors])
    // useEffect(()=>{

    // },[totalExperts])
    // useEffect(()=>{
    //     const accessToken = localStorage.getItem('access_token');
    //     try {

    //         const headers = {
    //             "Content-Type": "application/json",
    //             "Access-Control-Allow-Origin": "*",
    //             Authorization: `Bearer ${accessToken}`,
    //         };
    //         axiosInstance.get('/admin/getcount/PATIENT', { headers: headers }).then((response) => {
    //             setTotalPatients(response.data);
    //         });

    //     }catch(error){
    //         console.log(error);
    //     }
    // },[totalPatients])

    const Appointments = {  //Dummy Data
        options: {
            chart: {
                type: "bar",
                height: 350,
            },
            plotOptions: {
                bar: {
                    colors: {
                        ranges: [
                            {
                                from: 0,
                                to: 10,
                                color: "#e64141",
                            },
                            {
                                from: 10,
                                to: 20,
                                color: "#089bab",
                            },
                            {
                                from: 30,
                                to: 40,
                                color: "#FC9F5B",
                            },
                        ],
                    },
                    columnWidth: "80%",
                }
            },
            dataLabels: {
                enabled: false,
            },
            yaxis: {
                title: {
                    text: "Number of Appointments",
                },
            },
            xaxis: {
                title: {
                    text: "Date",
                },
                type: "date",
                categories: [   //To be fetched from backend
                    "2011-01-01",
                    "2011-02-01",
                    "2011-03-01",
                    "2011-04-01",
                    "2011-05-01",
                    "2011-06-01",
                    "2011-07-01",
                    "2011-08-01",
                    "2011-09-01",
                    "2011-10-01",
                ],
                labels: {
                    rotate: -90,
                },
            },
        },
        series: [
            {
                data: [
                    15, 23, 31, 49, 17, 24, 42, 36, 48, 10,
                ],
            },
        ],
    };
    return (
        <Fragment>
            <Row>
                {/* Main Content */}
                <Col lg="12">
                    <Row>   {/* Part 1 : Header */}

                    </Row>
                    <Row>   {/* Part 2 : Count of all users */}
                        <Col>   {/* Count of Patients */}
                            <div className="iq-card">
                                <div className="iq-card-body iq-bg-primary rounded-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="rounded-circle iq-card-icon bg-primary">
                                            <i className="ri-user-fill"></i>
                                        </div>
                                        <div className="text-end">
                                            <h2 className="mb-0">
                                                <span className="counter">{totalPatients}</span>
                                            </h2>
                                            <h5 className="">Patients</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="iq-card">
                                <div className="iq-card-body iq-bg-warning rounded-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="rounded-circle iq-card-icon bg-primary">
                                            <i className="ri-women-fill"></i>
                                        </div>
                                        <div className="text-end">
                                            <h2 className="mb-0">
                                                <span className="counter">{totalDoctors}</span>
                                            </h2>
                                            <h5 className="">Doctors</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="iq-card">
                                <div className="iq-card-body iq-bg-danger rounded-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="rounded-circle iq-card-icon bg-primary">
                                            <i className="ri-user-fill"></i>
                                        </div>
                                        <div className="text-end">
                                            <h2 className="mb-0">
                                                <span className="counter">{totalAdmin}</span>
                                            </h2>
                                            <h5 className="">Admin</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="iq-card">
                                <div className="iq-card-body iq-bg-info rounded-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="rounded-circle iq-card-icon bg-primary">
                                            <i className="ri-group-fill"></i>
                                        </div>
                                        <div className="text-end">
                                            <h2 className="mb-0">
                                                <span className="counter">{totalModerators}</span>
                                            </h2>
                                            <h5 className="">Moderators</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col>
                            <div className="iq-card">
                                <div className="iq-card-body iq-bg-primary rounded-4">
                                    <div className="d-flex align-items-center justify-content-between">
                                        <div className="rounded-circle iq-card-icon bg-primary">
                                            <i className="ri-hospital-line"></i>
                                        </div>
                                        <div className="text-end">
                                            <h2 className="mb-0">
                                                <span className="counter">{totalExperts}</span>
                                            </h2>
                                            <h5 className="">Experts</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>   {/* Part 3 : Graph & New Appointments & Table*/}
                        <Col lg={7}>
                            <Row> {/* Part 3.aa : Graph of Appointments/day*/}
                                <div className="iq-card">
                                    <div className="iq-card-header d-flex justify-content-between">
                                        <div className="iq-header-title">
                                            <h4 className="card-title">Total Appointments per day</h4>
                                        </div>
                                    </div>
                                    <div className="iq-card-body">
                                        <Chart
                                            options={Appointments.options}  //{graphData.options}
                                            series={Appointments.series}    //{graphData.series}
                                            type="bar"
                                            height={350}
                                        />
                                    </div>
                                </div>
                            </Row>
                            <Row> {/* Part 3.ab : New Appointments Table*/}
                                <Col lg="12">
                                    <div className="iq-card">
                                        <div className="iq-card-header d-flex justify-content-between">
                                            <div className="iq-header-title">
                                                <h4 className="card-title">List of all Appointments</h4>
                                            </div>
                                        </div>
                                        <div className="iq-card-body">
                                            <div className="table-responsive">
                                                <Table className="mb-0" borderless>
                                                    <thead>
                                                        <tr className="text-center">
                                                            <th scope="col">Patient Name</th>
                                                            <th scope="col">Doctor Name </th>
                                                            <th scope="col">Date and Time</th>
                                                            <th scope="col">Contact</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="text-center table-primary">
                                                            <td>Ashwini Pathak</td>
                                                            <td>Dyuti Sen</td>
                                                            <td>21/09/2023, 6:30:00</td>
                                                            <td>8932748</td>
                                                        </tr>
                                                    </tbody>
                                                    {/*
                                            <tbody>
                                            {appointments.map(appointment => (
                                                <tr className="text-center table-primary" key={appointment.id}>
                                                    <td>{appointment.patientName}</td>
                                                    <td>{appointment.doctorName}</td>
                                                    <td>{appointment.dateTime}</td>
                                                    <td>{appointment.contact}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                            */}
                                                </Table>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>

                        <Col lg={5}>   {/* Part 3.b : Table of Doctors/Patients etc*/}
                            <div className="iq-card" style={{ height: 'calc(100% - 30px)' }}>
                                <div className="iq-card-header d-flex justify-content-between align-items-center">
                                    {/*<div className="iq-header-title">
                                    <h4 className="card-title d-inline">Doctors Lists</h4>
    </div>*/}
                                    <ButtonGroup role="group" className="btn-group" aria-label="Button group with nested dropdown">
                                        <Dropdown role="group">
                                            <Dropdown.Toggle
                                                id="btnGroupDrop1"
                                                type="button"
                                                className="btn-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                {selectedOption.value}
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                                {dropdownOptions.map((option) => (
                                                    <Dropdown.Item key={option.key} className="dropdown-item" href="#" onClick={() => handleOptionSelect(option.key)}>
                                                        {option.value}
                                                    </Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </ButtonGroup>
                                    <Link to="#" className="btn btn-primary d-block">
                                        <i className="ri-add-line"></i> Add New
                                    </Link>
                                </div>
                                <div className="iq-search-bar">
                                    <form action="#" className="searchbox" style={{ width: '100%' }}>
                                        <input type="text" className="text search-input" placeholder="Type here to search..." />
                                        <a className="search-link" href="/"><i class="ri-search-line"></i></a>
                                    </form>
                                </div>

                                <div className="iq-card-body">
                                    <Table className="mb-0" borderless>
                                        <thead>
                                            <tr className="text-center">
                                                <th scope="col">Name</th>
                                                <th scope="col">Specilization</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {roleList.map((key, index) => (
                                                <tr className="text-center table-primary">
                                                    <td scope="row \">{key.name}</td>
                                                    <td>{key.contact_no}</td>
                                                    <td>{key.gender}</td>
                                                    <td>
                                                        {/*<button type="button" class="btn btn-danger" name="button"> Remove </button>*/}
                                                        <td>
                                                            <span className="table-remove"><button type="button"
                                                                className="btn iq-bg-danger btn-rounded btn-sm my-0">Remove</button></span>
                                                        </td>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        {/* <tbody>
                                    {doctors.map(doctor => (
                                        <tr className="text-center table-primary" key={doctor.id}>
                                            <td>{doctor.name}</td>
                                            <td>{doctor.specialization}</td>
                                            <td>{doctor.gender}</td>
                                            <td>
                                                <span className="table-remove">
                                                    <button
                                                        type="button"
                                                        className="btn iq-bg-danger btn-rounded btn-sm my-0"
                                                        onClick={() => removeDoctor(doctor.id)}
                                                    >
                                                        Remove
                                                    </button>
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody> */}
                                    </Table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Fragment>
    );
};

export default AdminDashboard;
