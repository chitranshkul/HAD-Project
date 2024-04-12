import React, { Fragment,useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination';

import { useNavigate } from 'react-router-dom';
import img from "../../../assets/images/login/4.png"
import my_logo from "../../../assets/images/custome-logo.png"
import axiosInstance from '../../../axiosInstance';

const LoginPage = () => {

    const [alert, setAlert] = useState('');

    const [errors, setErrors] = useState({});
    const [loginDetails, setLoginDetails] = useState({
        email: '',
        password: ''
    });

    const validateForm = (data) => {
        const errors = {};
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        }

        if (!data.password.trim()) {
            errors.password = 'Password is required';
        }
        return errors;
    }

    const handleChangeInLoginDetails = (e) => {

        const { name, value } = e.target;
        console.log("INput: ", name, value);
        setLoginDetails({
            ...loginDetails,
            [name]: value
        });
    };


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm(loginDetails);
        if (Object.keys(validationErrors).length === 0) {

            axiosInstance.post('/auth/authenticate', loginDetails)
                .then((response) => {
                    console.log(response.data);
                    const token = response.data;
                    console.log(token)
                    // Store token in local storage (not secure, consider better methods)
                    
                    localStorage.setItem('id', token.id);
                    localStorage.setItem('username', loginDetails.email);
                    localStorage.setItem('access_token', token.access_token);
                    localStorage.setItem('role',response.data.role);

                    console.log("login Sucessful");
                    console.log(response.data.role)
                    if(response.data.role=="ADMIN")
                        navigate('/home/AdminDashboard');
                    if(response.data.role=="EXPERT")
                        navigate('/home/ExpertDashboard');
                    if(response.data.role=="SENIOR_DOCTOR")
                        navigate('/home/DoctorDashboard');
                    if(response.data.role=="MODERATOR")
                        navigate('/home/ModeratorDashboard')
                    else if(response.data.role=="PATIENT")
                        navigate('/home/PatientDashboard');
                    
                })
                .catch((error) => {
                    setAlert("Username or Password is Incorrect")
                    console.error('Login failed:', error);
                })
        }
        else {
            console.log("Validataion Failed")
            setErrors(validationErrors);
        }


    };


    return (
        <Fragment>
            <section className="sign-in-page">
                <Container className="sign-in-page-bg mt-5 mb-md-5 mb-0 p-0">
                    <Row className="row no-gutters">
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
                        <Col md='6' className="position-relative">
                            <div className="sign-in-from">
                                <h1 className="mb-0">Sign in</h1>
                                <p>Enter your email address and password to access admin panel.</p>
                                <Form className="mt-4" onSubmit={handleSubmit}>
                                    <Form.Group className='form-group'>
                                        <Form.Label htmlFor="exampleInputEmail1" className="mb-2">Email address</Form.Label>
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            className="form-control mb-0"
                                            id="exampleInputEmail1"
                                            placeholder="Enter email"
                                            value={loginDetails.email}
                                            onChange={handleChangeInLoginDetails}
                                            isInvalid={!!errors.email}
                                        />
                                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                                    </Form.Group>

                                    <div className="d-flex justify-content-between my-2">
                                        <Form.Label htmlFor="exampleInputPassword1" className='mb-0'>Password</Form.Label>
                                        <Link to="/recover-password" className="float-end">Forgot password?</Link>
                                    </div>

                                    <Form.Control
                                        name="password"
                                        type="password"
                                        className="form-control mb-0"
                                        id="exampleInputPassword1"
                                        placeholder="Password" s
                                        value={loginDetails.password}
                                        isInvalid={!!errors.password}
                                        onChange={handleChangeInLoginDetails}
                                    />
                                    <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
                                    <div className="d-flex w-100 justify-content-between align-items-center mt-3 w-100">
                                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                            <Form.Check.Input
                                                type="checkbox"
                                                className="custom-control-input"
                                                id="customCheck1"
                                            />
                                            <Form.Label className="custom-control-label" htmlFor="customCheck1">Remember Me</Form.Label>
                                        </div>
                                        <Button type="submit" className="btn btn-primary float-end">Sign in</Button>
                                    </div>
                                    <div className="sign-info">
                                        <span className="dark-color d-inline-block line-height-2">Don't have an account? <Link to="/sign-up">Sign up</Link></span>
                                        <ul className="iq-social-media">
                                            <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                            <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                            <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                                        </ul>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Fragment>
    )
}

export default LoginPage
