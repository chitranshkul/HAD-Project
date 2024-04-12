import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

// Img
import img from "../assets/images/user/11.png";

//Buttons and Dropdown
import { Button, ButtonGroup, Dropdown} from "react-bootstrap";

//Axios
import axios from 'axios';

const AdminProfile = () => {
    return (
    <Fragment>
        <Row>
            <Col lg="4">  {/* Part 1 : Design of Left Side Part */}
            <div className="iq-card" style={{backgroundColor: '#ceebee'}}>
                <div className="iq-card-body">
                    <div className="text-center">
                        <img
                        src={img}
                        alt="profile-img"
                        className="avatar-130 img-fluid"
                        />
                    </div>
                    <div className="text-center mt-3">
                        <div> <h4> <b>ADMIN</b> </h4> </div>
                        <div style={{ marginTop: '20px' }}>
                        <Button variant="primary" className="me-1 mb-3">
                        <i className="ri-bill-fill"></i>Update Profile
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
            </Col>

            <Col lg="8">   {/* Part 2 : Design of Right Side Part */}
            <div className="iq-card" style={{backgroundColor: '#ceebee'}}>
                <div className="iq-card-body">
                    <div className="text-center">
                        
                    </div>
                </div>
            </div>
            </Col>
        </Row>
    </Fragment>
    );
};
export default AdminProfile;