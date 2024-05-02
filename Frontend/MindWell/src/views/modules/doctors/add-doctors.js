import React, { Fragment, useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

// Image
import user1 from "../../../assets/images/user/11.png";
import { use } from "echarts";
import axios from "axios";


const AddDoctors = () => {

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
      dor: "",
      role: ""
   });

   const [usereducationdetails, setUserEducationDetails] = useState({
      uid: "",
      edyear: "",
      introsummary: "",
      degree: "",
      institute: "",
      result: "",
   })

   const [userExperience, setUserExperience] = useState({
      uid: "",
      exyear: "",
      department: "",
      position: "",
      hospital: "",
      rating: "",
   })


   const handleChangeInUserDetails = (e) => {

      const { name, value } = e.target;
      setUserDetail({
         ...userDetail,
         [name]: value
      });
   };


   const handleChangeInUserEducation = (e) => {

      const { name, value } = e.target;
      setUserEducationDetails({
         ...usereducationdetails,
         [name]: value
      });
   };



   const handleChangeInExperience = (e) => {

      const { name, value } = e.target;

      setUserExperience({
         ...userExperience,
         [name]: value
      });
   };

   const handleSubmit = async(e) => {
      e.preventDefault();

      console.log(userDetail);

      const response = await axios({
         method: 'post',
         url: `/api/v1/auth/register`,
         data: userDetail,
       });

       console.log(response);
      
       setUserExperience({
         ...userExperience,
         uid: userDetail.email
      });

      setUserEducationDetails({
         ...usereducationdetails,
         uid: userDetail.email
      });
 
   }

   const handleSubmitEducation = async(e) => {
      e.preventDefault();
      console.log(usereducationdetails);

      const response = await axios({
         method: 'post',
         url: `/api/v1/education/addEducation`,
         data: usereducationdetails,
       });

       console.log(response);
   }

   const handleSubmitExperience = async(e) => {
      e.preventDefault();
      console.log(userExperience);

      const response = await axios({
         method: 'post',
         url: `/api/v1/experience/addExperience`,
         data: userExperience,
       });

       console.log(response);
   }

   return (
      <Fragment>
         <Row>
            <Col lg="3">
               <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">Add New User</h4>
                     </div>
                  </div>
                  <div className="iq-card-body">
                     <form>
                        <div className="form-group">
                           <div className="add-img-user profile-img-edit">
                              <img className="profile-pic img-fluid" src={user1} alt="profile-pic" />
                              <div className="p-image">
                                 <Link to='#' className="upload-button btn iq-bg-primary">File Upload</Link>
                                 <input className="file-upload" type="file" accept="image/*" />
                              </div>
                           </div>
                           <div className="img-extension mt-3">
                              <div className="d-inline-block align-items-center">
                                 <span>Only</span>
                                 <Link to='#'>.jpg</Link>
                                 <Link to='#'>.png</Link>
                                 <Link to='#'>.jpeg</Link>
                                 <span>allowed</span>
                              </div>
                           </div>
                        </div>

                     </form>
                  </div>
               </div>
            </Col>
            <Col lg='9'>
               <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                     <div className="iq-header-title">
                        <h4 className="card-title">New User Information</h4>
                     </div>
                  </div>
                  <div className="iq-card-body">
                     <div className="new-user-info">
                        <Form onSubmit={handleSubmit}>
                           <Row>
                              <Form.Group className="col-md-4">
                                 <Form.Label className="mb-0" htmlFor="fname">First Name:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    className="form-control my-2"
                                    id="fname"
                                    name="fname"
                                    placeholder="First Name"
                                    value={userDetail.fname}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </Form.Group>
                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="lname">Middle Name:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    name="mname"
                                    className="form-control my-2"
                                    id="mname"
                                    placeholder="Middle Name"
                                    value={userDetail.mname}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>
                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="lname">Last Name:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    name="lname"
                                    className="form-control my-2"
                                    id="lname"
                                    placeholder="Last Name"
                                    value={userDetail.lname}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>


                              <Form.Group className="col-md-4">
                                 <Form.Label className="mb-0" htmlFor="fname">email:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    name="email"
                                    className="form-control my-2"
                                    id="fname"
                                    placeholder="Email"
                                    value={userDetail.email}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </Form.Group>
                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="lname">Password:</Form.Label>
                                 <Form.Control
                                    type="password"
                                    name="password"
                                    className="form-control my-2"
                                    id="mname"
                                    placeholder="Password"
                                    value={userDetail.password}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>
                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="lname">Confirm Password:</Form.Label>
                                 <Form.Control
                                    type="password"
                                    name="password"
                                    className="form-control my-2"
                                    id="lname"
                                    placeholder="Confirm Password"
                                    value={userDetail.password}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>

                              <div className="form-group col-md-4">
                                 <Form.Group controlId="gender">
                                    <Form.Label>Gender:</Form.Label>
                                    <Form.Control
                                       name="gender"
                                       as="select"
                                       value={userDetail.gender}
                                       onChange={handleChangeInUserDetails}
                                    >
                                       <option value="">Select Gender</option>
                                       <option value="male">Male</option>
                                       <option value="female">Female</option>
                                       <option value="other">Other</option>
                                    </Form.Control>
                                 </Form.Group>
                              </div>
                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="add1">Pincode</Form.Label>
                                 <Form.Control
                                    type="text"
                                    name="pin_code"
                                    className="form-control my-2"
                                    id="add1"
                                    placeholder="Pincode"
                                    value={userDetail.pin_code}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>

                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="add1">House Number:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    name="hno"
                                    className="form-control my-2"
                                    id="add1"
                                    placeholder="House Number"
                                    value={userDetail.hno}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>

                              <div className="form-group col-md-6">
                                 <Form.Label className="mb-0" htmlFor="add1">Street Address 1:</Form.Label>
                                 <Form.Control
                                    name="street1"
                                    type="text"

                                    className="form-control my-2"
                                    id="add1"
                                    placeholder="Street Address 1"
                                    value={userDetail.street1}
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>
                              <div className="form-group col-md-6">
                                 <Form.Label className="mb-0" htmlFor="add2">Street Address 2:</Form.Label>
                                 <Form.Control
                                    name="street2"
                                    type="text"
                                    className="form-control my-2"
                                    id="add2"
                                    placeholder="Street Address 2"
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>

                              <Form.Group className="col-md-4">
                                 <Form.Label className="mb-0" htmlFor="fname">District:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    className="form-control my-2"
                                    id="fname"
                                    placeholder="District"
                                    name="district"
                                    onChange={handleChangeInUserDetails}
                                 />
                              </Form.Group>
                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="lname">City:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    className="form-control my-2"
                                    id="mname"
                                    placeholder="City"
                                    name="city"
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>
                              <div className="form-group col-md-4">
                                 <Form.Label className="mb-0" htmlFor="lname">State:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    name="state"
                                    className="form-control my-2"
                                    id="lname"
                                    placeholder="State"
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>

                              <div className="form-group col-md-6">
                                 <Form.Label className="mb-0" htmlFor="mobno">Mobile Number:</Form.Label>
                                 <Form.Control
                                    type="text"
                                    className="form-control my-2"
                                    id="mobno"
                                    placeholder="Mobile Number"
                                    name="mobile"
                                    onChange={handleChangeInUserDetails}
                                 />
                              </div>
                              <div className="form-group col-md-6">
                                 <Form.Group controlId="dob">
                                    <Form.Label>Date of Birth:</Form.Label>
                                    <Form.Control
                                       name="dob"
                                       type="date"
                                       value={userDetail.dob}
                                       onChange={handleChangeInUserDetails}
                                    />
                                 </Form.Group>
                              </div>

                           </Row>
                           <hr />
                           <h5 className="mb-3">role</h5>
                           <div className="row">
                              <div className="form-group col-md-12">

                                 <Form.Group controlId="role">
                                    <Form.Label>Role:</Form.Label>
                                    <Form.Control
                                       name="role"
                                       as="select"
                                       value={userDetail.role}
                                       onChange={handleChangeInUserDetails}
                                    >
                                       <option value="">Select Role to Assign</option>
                                       <option value="ADMIN">Admin</option>
                                       <option value="PATIENT">Patient</option>
                                       <option value="EXPERT">Expert</option>
                                       <option value="SENIOR_DOCTOR">Doctor</option>
                                       <option value="MODERATOR">Moderator</option>
                                    </Form.Control>
                                 </Form.Group>
                              </div>
                           </div>
                           <button type="submit" className="btn btn-primary">Add New User</button>
                        </Form>
                        <br></br>
                        {(userDetail.role === "SENIOR_DOCTOR" || userDetail.role === "EXPERT") && (
                           <div>
                              <div className="row">
                                 <hr />
                                 <Form onSubmit={handleSubmitEducation}>
                                    <Row>
                                       <div className="row">
                                          <div className="form-group col-md-12">
                                             <Form.Label className="mb-0" htmlFor="introsummary">Introduction Summary:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="introsummary"
                                                placeholder="Introduction Summary"
                                                name="introsummary"
                                                onChange={handleChangeInUserEducation}
                                             />
                                          </div>
                                          <div className="form-group col-md-3">
                                             <Form.Label className="mb-0" htmlFor="introsummary">Year:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="edyear"
                                                placeholder="Year of Education"
                                                name="edyear"
                                                onChange={handleChangeInUserEducation}
                                             />
                                          </div>
                                          <div className="form-group col-md-9">
                                             <Form.Label className="mb-0" htmlFor="introsummary">Degree:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="degree"
                                                placeholder="Name of Degree"
                                                name="degree"
                                                onChange={handleChangeInUserEducation}
                                             />
                                          </div>
                                          <div className="form-group col-md-9">
                                             <Form.Label className="mb-0" htmlFor="introsummary">institute:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="instiute"
                                                placeholder="Introduction Summary"
                                                name="Name of the Institute"
                                                onChange={handleChangeInUserEducation}
                                             />
                                          </div>
                                          <div className="form-group col-md-3">
                                             <Form.Label className="mb-0" htmlFor="introsummary">Result:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="result"
                                                placeholder="Result"
                                                name="result"
                                                onChange={handleChangeInUserEducation}
                                             />
                                          </div>
                                       </div>
                                    </Row>
                                    <button type="submit" className="btn btn-primary">Add Educational Details</button>
                                 </Form>
                              </div>
                              <br />
                              <div className="row">
                                 <hr />
                                 <Form onSubmit={handleSubmitExperience}>
                                    <Row>
                                       <div className="row">
                                          <div className="form-group col-md-2">
                                             <Form.Label className="mb-0" htmlFor="departement">Year:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="exyear"
                                                placeholder="Years of Experience"
                                                name="exyear"
                                                onChange={handleChangeInExperience}
                                             />
                                          </div>
                                          <div className="form-group col-md-5">
                                             <Form.Label className="mb-0" htmlFor="departement">Departement:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="depatment"
                                                placeholder="Departement"
                                                name="department"
                                                onChange={handleChangeInExperience}
                                             />
                                          </div>
                                          <div className="form-group col-md-5">
                                             <Form.Label className="mb-0" htmlFor="departement">Hospital:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="hospital"
                                                placeholder="Hospital"
                                                name="hospital"
                                                onChange={handleChangeInExperience}
                                             />
                                          </div>
                                          <div className="form-group col-md-5">
                                             <Form.Label className="mb-0" htmlFor="departement">Position:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="position"
                                                placeholder="Position"
                                                name="position"
                                                onChange={handleChangeInExperience}
                                             />
                                          </div>
                                          <div className="form-group col-md-7">
                                             <Form.Label className="mb-0" htmlFor="departement">Overall Feedback:</Form.Label>
                                             <Form.Control
                                                type="text"
                                                className="form-control my-2"
                                                id="feedback"
                                                placeholder="Overall Feedback"
                                                name="rating"
                                                onChange={handleChangeInExperience}
                                             />
                                          </div>
                                       </div>
                                    </Row>
                                    <button type="submit" className="btn btn-primary">Add Experience Details</button>
                                 </Form>
                              </div>
                           </div>
                        )}

                     </div>
                  </div>
               </div>
            </Col>
         </Row>
      </Fragment>
   );
};

export default AddDoctors;
