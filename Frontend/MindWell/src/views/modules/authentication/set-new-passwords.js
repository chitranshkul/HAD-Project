import React, { Fragment, useState, useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import img from "../../../assets/images/login/4.png"
import my_logo from "../../../assets/images/custome-logo.png";
import axiosInstance from '../../../axiosInstance';

const SetNewPassword = () => {

  
  const navigate = useNavigate();


  useEffect(() => {
    const validateRequest =  () => {
        if(localStorage.getItem('OTPStatus') != "reset"){
            navigate('/sign-in');
        }
    }
    validateRequest()
}, [navigate]);

  const [passwordDetails, setPasswordDetails] = useState({
    email: localStorage.getItem('email'),
    password: ""
  });

  const [errors, setErrors] = useState({});

  const validateForm = (data) => {
    const errors = {};

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }
    return errors;
  }


  const handleChangePasswordDetails = (e) => {

    const { name, value } = e.target;
    console.log("Input: ", name, value);
    setPasswordDetails({
      ...passwordDetails,
      [name]: value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm(passwordDetails);
    if (Object.keys(validationErrors).length === 0) {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      };

      axiosInstance.post('/auth/resetpassord', passwordDetails, { headers: headers })
        .then((response) => {
          console.log(response.data);
          navigate('/home/home');
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
                  Set Your New Password
                </p>
                <Form className="mt-4" onSubmit={handleSubmit}>
                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1" className="mb-2">
                      Password
                    </Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      className="form-control mb-0"
                      value={passwordDetails.password}
                      id="exampleInputEmail1"
                      placeholder="Enter Password"
                      onChange={handleChangePasswordDetails}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="form-group">
                    <Form.Label htmlFor="exampleInputEmail1" className="mb-2">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      value={passwordDetails.password}
                      className="form-control mb-0"
                      id="exampleInputEmail2"
                      placeholder="Confirm Password"
                      onChange={handleChangePasswordDetails}
                      isInvalid={!!errors.password}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>

                  <div className="d-inline-block w-100">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn btn-primary float-end mt-3"
                    >
                      Reset Password
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

export default SetNewPassword;
