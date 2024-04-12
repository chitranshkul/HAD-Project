import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';

import './register.css';


const Register = () => {


  const navigate = useNavigate();
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();


  const formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;

  const [userDetail, setUserDetail] = useState({
    fname: "",
    mname: "",
    lname: "",
    email: "",
    password: "",
    gender: "",
    hno: "",
    street1: "",
    street2: "",
    pin_code: "",
    city: "",
    state: "",
    country: "India",
    district: "",
    mobile: "",
    dob: "",
    dor: formattedDateTime,
    role: "PATIENT"
  });

  const [otpDetails, setOTPDetials] = useState({
    email: ""
  });
  const [errors, setErrors] = useState({});


  const handleChangeInUserDetails = (e) => {

    const { name, value } = e.target;
    setUserDetail({
      ...userDetail,
      [name]: value
    });
  };


  const validateForm = (data) => {
    const errors = {};
    if (!data.fname.trim()) {
      errors.fname = 'First name is required';
    }


    if (!data.lname.trim()) {
      errors.lname = 'Last name is required';
    }
    // else errors.lname = '';

    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    // else errors.email = ''; 

    if (!data.password.trim()) {
      errors.password = 'Password is required';
    }
    // else errors.password = '';
    // else if (data.password.length < 6) {
    //   errors.password = 'Password must be at least 6 characters long';
    // }
    if (!data.gender.trim()) {
      errors.gender = 'Gender is required';
    }
    // else errors.password = '';

    if (!data.hno.trim()) {
      errors.hno = 'House number is required';
    }
    // else  errors.hno = '';

    if (!data.street2.trim()) {
      errors.street2 = 'Street 2 is required';
    }
    // else errors.street2 = '';

    if (!data.street1.trim())
      errors.street1 = 'Street 1 is required';
    // else errors.street1 = '';

    if (!data.pin_code.trim()) {
      errors.pin_code = 'Pincode is required';
    }
    // else errors.pin_code = '';

    if (!data.city.trim()) {
      errors.city = 'City is required';
    }
    // else errors.city = '';

    if (!data.state.trim()) {
      errors.state = 'State is required';
    }
    // else errors.state = '';
    // if (!data.district.trim()) {
    //   errors.district = 'District is required';
    // }
    if (!data.mobile.trim()) {
      errors.mobile = 'Mobile number is required';
    } else if (!/^\d{10}$/.test(data.mobile)) {
      errors.mobile = 'Mobile number is invalid';
    }
    // else errors.mobile = '';
    if (!data.dob.trim()) {
      errors.dob = 'Date of birth is required';
    }
    // else errors.dob = '';
    if (!data.country.trim()) {
      errors.country = 'Country is required';
    }
    // else  errors.country = '';

    console.log("errors", errors);

    return errors;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();


    setUserDetail({
      ...userDetail,
      dor: formattedDateTime
    });


    const validationErrors = validateForm(userDetail);
    if (Object.keys(validationErrors).length === 0) {
      axiosInstance.post('/auth/register', userDetail)
        .then((response) => {

          const token = response.data;
          console.log(token);
          localStorage.setItem('id', token.id);
          localStorage.setItem('access_token', token.access_token);
          localStorage.setItem('username', userDetail.email);
          localStorage.setItem('OTPStatus', 'register');
          setOTPDetials({
            ...otpDetails,
            email: userDetail.email
          });
          const accessToken = localStorage.getItem('access_token');

          const headers = {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Authorization: `Bearer ${accessToken}`,
          };
          console.log("Now Sending OTP: ",headers);
          axiosInstance.post('/users/send-otp',{email: userDetail.email}, { headers: headers})
            .then((response) => {
              console.log(response.data);
              navigate('/confirm-mail');
            })
            .catch((error) => {
              console.log("This Errors is in Sending OTP");
              console.log(error);
            });
          // navigate('/sign-in');
        })
        .catch((error) => {
          console.log(error);
        });


    } else {
      console.log("Validataion Failed")
      setErrors(validationErrors);
    }

  }

  return (
    <div className="white-box">
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={10}>
            <h2 className="text-center">REGISTERATION</h2>
            <br></br><br></br>
            <Form onSubmit={handleSubmit}>

              <Row>
                <Col xs={12} md={4}>
                  <Form.Group controlId="firstname">
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control
                      name="fname"
                      type="text"
                      value={userDetail.fname}
                      onChange={handleChangeInUserDetails}
                      placeholder="Enter First Name"
                      isInvalid={!!errors.fname}
                    />
                    <Form.Control.Feedback type="invalid">{errors.fname} Hello</Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} md={4}>
                  <Form.Group controlId="middleName">
                    <Form.Label>Middle Name:</Form.Label>
                    <Form.Control
                      name="mname"
                      type="text"
                      value={userDetail.mname}
                      onChange={handleChangeInUserDetails}
                      placeholder="Enter Middle Name"
                      isInvalid={!!errors.mname}
                    />
                    <Form.Control.Feedback type="invalid">{errors.mname}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col xs={12} md={4}>
                  <Form.Group controlId="lastName">
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control
                      name="lname"
                      type="text"
                      value={userDetail.lname}
                      onChange={handleChangeInUserDetails}
                      placeholder="Enter Last Name"
                      isInvalid={!!errors.lname}
                    />
                    <Form.Control.Feedback type="invalid">{errors.lname}</Form.Control.Feedback>
                  </Form.Group>

                </Col>
              </Row>

              <br></br>

              <Row>

                <Col xs={12} md={4}>
                  <Form.Group controlId="email">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      name="email"
                      type="text"
                      value={userDetail.email}
                      placeholder="Enter Email"
                      isInvalid={!!errors.email}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} md={4}>
                  <Form.Group controlId="password">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      value={userDetail.password}
                      placeholder="Enter Password"
                      isInvalid={!!errors.password}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>

                </Col>

                <Col xs={12} md={4}>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password:</Form.Label>
                    <Form.Control
                      name="password"
                      type="password"
                      value={userDetail.password}
                      placeholder="Confirm Password"
                      isInvalid={!!errors.password}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <br></br>

              <Row>
                <Col xs={12} md={3}>
                  <Form.Group controlId="gender">
                    <Form.Label>Gender:</Form.Label>
                    <Form.Control
                      name="gender"
                      as="select"
                      value={userDetail.gender}
                      isInvalid={!!errors.gender}
                      onChange={handleChangeInUserDetails}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Control.Feedback type="invalid">{errors.gender}</Form.Control.Feedback>
                </Col>
                <Col xs={12} md={3}>
                  <Form.Group controlId="dob">
                    <Form.Label>Date of Birth:</Form.Label>
                    <Form.Control
                      name="dob"
                      type="date"
                      value={userDetail.dob}
                      isInvalid={!!errors.dob}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.dob}</Form.Control.Feedback>
                  </Form.Group>

                </Col>
                <Col xs={12} md={3}>
                  <Form.Group controlId="pincode">
                    <Form.Label>Pincode:</Form.Label>
                    <Form.Control
                      name="pin_code"
                      type="text"
                      value={userDetail.pin_code}
                      isInvalid={!!errors.pin_code}
                      onChange={handleChangeInUserDetails}
                      placeholder="Enter Pincode"
                    />
                    <Form.Control.Feedback type="invalid">{errors.pin_code}</Form.Control.Feedback>
                  </Form.Group>

                </Col>
                <Col xs={12} md={3}>
                  <Form.Group controlId="houseNumber">
                    <Form.Label>House Number:</Form.Label>
                    <Form.Control
                      name="hno"
                      type="text"
                      value={userDetail.hno}
                      placeholder="Enter House Number"
                      isInvalid={!!errors.hno}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.hno}</Form.Control.Feedback>
                  </Form.Group>

                </Col>
              </Row>

              <br></br>

              <Row>
                <Col xs={12} md={4}>

                  <Form.Group controlId="mobileNumber">
                    <Form.Label>Mobile Number:</Form.Label>
                    <Form.Control
                      name="mobile"
                      type="text"
                      value={userDetail.mobile}
                      onChange={handleChangeInUserDetails}
                      isInvalid={!!errors.mobile}
                      placeholder="Enter Mobile Number" />
                    <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                  </Form.Group>

                </Col>
                <Col xs={12} md={4}>
                  <Form.Group controlId="street1">
                    <Form.Label>Street 1:</Form.Label>
                    <Form.Control
                      name="street1"
                      type="text"
                      value={userDetail.street1}
                      placeholder="Enter Street 1"
                      isInvalid={!!errors.street1}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.street1}</Form.Control.Feedback>
                  </Form.Group>

                </Col>
                <Col xs={12} md={4}>
                  <Form.Group controlId="street2">
                    <Form.Label>Street 2:</Form.Label>
                    <Form.Control
                      name="street2"
                      type="text"
                      value={userDetail.street2}
                      placeholder="Enter Street 2"
                      isInvalid={!!errors.street2}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.street2}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <br></br>

              <Row>
                <Col xs={12} md={4}>
                  <Form.Group controlId="state">
                    <Form.Label>State:</Form.Label>
                    <Form.Control
                      name="state"
                      type="text"
                      value={userDetail.state}
                      placeholder="Enter State"
                      isInvalid={!!errors.state}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.state}</Form.Control.Feedback>
                  </Form.Group>

                </Col>

                <Col xs={12} md={4}>
                  <Form.Group controlId="city">
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                      name="city"
                      type="text"
                      value={userDetail.city}
                      placeholder="Enter City"
                      isInvalid={!!errors.city}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.city}</Form.Control.Feedback>
                  </Form.Group>
                </Col>

                <Col xs={12} md={4}>
                  <Form.Group controlId="country">
                    <Form.Label>Country:</Form.Label>
                    <Form.Control
                      name="country"
                      type="text"
                      value={userDetail.country}
                      placeholder="Enter Country"
                      isInvalid={!!errors.country}
                      onChange={handleChangeInUserDetails}
                    />
                    <Form.Control.Feedback type="invalid">{errors.country}</Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Button type="submit" className="btn btn-primary float-end" style={{ marginTop: '10px' }}>Register</Button>
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
  );
};

export default Register;
