import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './otp-verification.css';

import axios from 'axios';

const OTPVerification = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const validateRequest = () => {
            if (localStorage.getItem('OTPStatus') == null) {
                navigate('/sign-in');
            }

            console.log("Inside Function:")
        }
        validateRequest()
    }, [navigate]);


    const [otpDetails, setotpDetails] = useState({
        email: localStorage.getItem('email'),
        otp: ""
    });


    const [errors, setErrors] = useState({});

    const validateForm = (data) => {
        const errors = {};

        if (!data.otp.trim()) {
            errors.otp = 'OTP is required';
        }
        else if (!/^\d{6}$/.test(data.otp)) {
            errors.otp = 'OTP is invalid';
        }
        return errors;
    }


    const handleChangeInLoginDetails = (e) => {

        const { name, value } = e.target;
        console.log("Input: ", name, value);
        setotpDetails({
            ...otpDetails,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const accessToken = localStorage.getItem('access_token');


        const validationErrors = validateForm(otpDetails);
        if (Object.keys(validationErrors).length === 0) {
            const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${accessToken}`,
            };

            try {
                const response1 = await axios({
                    method: 'post',
                    url: `/api/v1/users/verifyuseraccount`,
                    data: otpDetails,
                });
                console.log(response1);
                navigate("/sign-in")
            } catch (error) {
                console.log("Error: ", error)
            }
        }
        else {
            console.log("Validataion Failed")
            setErrors(validationErrors);
        }
    }

    return (
        <div className="white-box">
            <div className="center-content white-box">
                <Container className="mt-5">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={10}>
                            <h2 className="text-center">OTP Verification</h2>
                            <br></br><br></br>
                            <Form onSubmit={handleSubmit}>

                                <Row>
                                    <Col xs={12} md={4}>
                                        <Form.Group controlId="firstname">

                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Form.Label>Enter OTP:</Form.Label>
                                        <Form.Group controlId="otp">
                                            <Form.Control
                                                name="otp"
                                                type="text"
                                                value={otpDetails.otp}
                                                onChange={handleChangeInLoginDetails}
                                                placeholder="6 digit OTP"
                                                isInvalid={!!errors.otp}
                                            />
                                            <Form.Control.Feedback type="invalid">{errors.otp}</Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Button type="submit" className="btn btn-primary float-mid" style={{ marginTop: '10px' }}>Veriy</Button>
                            </Form>

                        </Col>
                    </Row>
                    <Row>
                        <div className="sign-info">
                            <span className="dark-color d-inline-block line-height-2">Already have an account? <Link to="/sign-in">Sign in</Link></span>
                            <ul className="iq-social-media">
                                <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default OTPVerification;
