import React, { Fragment, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import img from "../../../assets/images/login/4.png"
import my_logo from "../../../assets/images/custome-logo.png";
import axiosInstance from '../../../axiosInstance';

const RecoverPassword = () => {


  const navigate = useNavigate();
  const [otpSendDetails, setOTPSendDetails] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    }
    return errors;
  }


  const handleChangeInOTPSendDetails = (e) => {

    const { name, value } = e.target;
    console.log("Input: ", name, value);
    setOTPSendDetails({
      ...otpSendDetails,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const accessToken = localStorage.getItem('access_token');


    const validationErrors = validateForm(otpSendDetails);
    if (Object.keys(validationErrors).length === 0) {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      axiosInstance.post('/users/send-otp', otpSendDetails, { headers: headers })
        .then((response) => {
          console.log(otpSendDetails.email);
          localStorage.setItem('email', otpSendDetails.email);
          console.log(response.data);
          localStorage.setItem('OTPStatus', "reset");
          navigate('/confirm-mail');
        })
        .catch((error) => { console.log(error); });
    }
    else {
      console.log("Validataion Failed")
      setErrors(validationErrors);
    }
  }


  return (
    <Fragment>
      <section className="sign-in-page">
        <Container className=" sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
          <Row className="no-gutters">
            <Col md='6' className="text-center">
              <div className="sign-in-detail text-white">
                <Link className="sign-in-logo mb-5" to="/"><img src={my_logo} className="img-fluid" alt="logo" /></Link>
                <Swiper className="owl-carousel" autoplay={{ delay: 3000 }} loop='true' modules={[Pagination, Autoplay]} spaceBetween={30}>
                  <SwiperSlide className="item">
                    <img src={img} className="img-fluid mb-4" alt="logo" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </Col>
            <Col md="6" className="position-relative">
              <div className="sign-in-from">
                <h1 className="mb-0">Reset Password</h1>
                <p>
                  Enter your email address and we'll send you an email with
                  OTP to reset your password.
                </p>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1" className="mb-2">
                      Email address
                    </Form.Label>
                    <Form.Control
                      name="email"
                      type="email"
                      className="form-control mb-0"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      onChange={handleChangeInOTPSendDetails}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-inline-block w-100">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn btn-primary float-end mt-3"
                    >
                      Send OTP
                    </Button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RecoverPassword;
