import React, { Fragment, useEffect } from "react";
import { Col, Nav, Row, Tab, Table, Button } from "react-bootstrap";

import { Link } from "react-router-dom";

import axiosInstance from "../axiosInstance";

const ModeratorDashboard = () => {

    const [flaggedQuestion, setFlaggedQuestion] = React.useState([{
        id: 0,
        QuestionText: ""
    }]);

    const [flaggedResponses, setFlaggedResponses] = React.useState([{
        id: 0,
        answers_text: ""
    }]);

    useEffect(() => {
        const fetchDashboardData = async () => {
            const accessToken = localStorage.getItem('access_token');
            try {

                const headers = {
                    "Content-Type": "application/json",
                    // "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${accessToken}`,
                };

                axiosInstance.get('/qaresponse/flaggedallquestions', { headers: headers }).then((response) => {
                    console.log("Flag Questions", response.data);
                    setFlaggedQuestion(response.data);
                });

                axiosInstance.get('/qaresponse/flaggedallresponse', { headers: headers }).then((response) => {
                    console.log("Flag Responses", response.data);
                    setFlaggedResponses(response.data);
                });

            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchDashboardData();
    }, []);


    const testMedthod = () => {
        console.log("testMedthod");
        axiosInstance.get("qaresponse/getQuestion/1").then((res) => {
            console.log(res);
        });
    };
    return (
        <Fragment>
            <Row>
                <Col lg="8">
                    {flaggedQuestion.map((question, index) => (
                        <div className="iq-card " id={question.id}>
                            <div className="iq-card-header d-flex justify-content-between gap-2">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Recently Flagged Posts</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="d-flex justify-content-between tasks-card" role="alert">
                                    <div className="custom-control custom-checkbox">
                                        <label className="custom-control-label" htmlFor="customCheck11">
                                            {question.QuestionText}
                                        </label>
                                    </div>
                                    <div>
                                        <Button variant="warning" className="me-1 mb-3 " onClick={testMedthod}>
                                            <i className="fa fa-bars" aria-hidden="true" ></i>Edit
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="primary" className="me-1 mb-3 ">
                                            <i className="fa fa-solid fa-check"></i>Unflag
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="danger" className="me-1 mb-3 ">
                                            <i className="fa fa-trash"></i>Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {flaggedResponses.map((response, index) => (
                        <div className="iq-card " id={response.id}>
                            <div className="iq-card-header d-flex justify-content-between gap-2">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Recently Flagged Posts</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <div className="d-flex justify-content-between tasks-card" role="alert">
                                    <div className="custom-control custom-checkbox">
                                        <label className="custom-control-label" htmlFor="customCheck11">
                                            {response.answers_textf}
                                        </label>
                                    </div>
                                    <div>
                                        <Button variant="warning" className="me-1 mb-3 " onClick={testMedthod}>
                                            <i className="fa fa-bars" aria-hidden="true" ></i>Edit
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="primary" className="me-1 mb-3 ">
                                            <i className="fa fa-solid fa-check"></i>Unflag
                                        </Button>
                                    </div>
                                    <div>
                                        <Button variant="danger" className="me-1 mb-3 ">
                                            <i className="fa fa-trash"></i>Delete
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </Col>
                <Col lg="4">
                    <div className="iq-card">
                        <div className="iq-card-header d-flex justify-content-between">
                            <div className="iq-header-title">
                                <h4 className="card-title">Deleted Posts</h4>
                            </div>
                            <div className="iq-card-header-toolbar d-flex align-items-center">
                                {/* <Dropdown>
                                    <Dropdown.Toggle
                                        variant="dropdown-toggle text-primary"
                                        id="dropdownMenuButton4"
                                        data-bs-toggle="dropdown"
                                        style={{ border: "none" }}
                                    >
                                        View All
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        className="dropdown-menu dropdown-menu-end"
                                        aria-labelledby="dropdownMenuButton4"
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
                                            <i className="ri-file-download-fill me-2"></i>Download
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown> */}
                            </div>
                        </div>
                        <div className="iq-card-body">
                            <ul className="iq-timeline">
                                <li>
                                    <div className="timeline-dots"></div>
                                    <h6 className="float-start mb-1">Username</h6>
                                    <small className="float-end mt-1">23 November 2019</small>
                                    <div className="d-inline-block w-100">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Quisque scelerisque{" "}
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
}
export default ModeratorDashboard;