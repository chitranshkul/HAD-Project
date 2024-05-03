import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Table } from "react-bootstrap";
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
// Images
import user1 from "../../../assets/images/user/11.png";

import { Link } from "react-router-dom";

function DoctorProfile() {


  // const { id } = useParams();
  let { uid } = useParams();


  const [profile, setProfile] = useState({
    fname: "Chitransh",
    mname: "",
    lname: "k",
    gender: "male",
    hno: "8",
    dob: "2024-04-09",
    dor: "",
    educationDetails: [
      {
        year: "88",
        degree: "88",
        institute: "",
        result: "8",
        summary: "I am good at everything"
      }
    ],
    expertienceDetails: [
      {
        year: "9",
        department: "9",
        position: "9",
        hospital: "9",
        feedback: "9"
      }
    ],
    state: "8",
    country: "India",
    city: "8",
    district: "8",
    mobile: "8",
    pin_Code: 0,
    street1: "8",
    street2: "88"
  })


  useEffect(() => {
    console.log("Fetching Profile");
    console.log(uid);

    axios.get('/api/v1/auth/getProfileDetails/' + uid)
      .then(response => {
        setProfile(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });
      
  }, [uid]);


  return (
    <Fragment>
      <Row>
        <Col lg="4">
          <div className="iq-card">
            <div className="iq-card-body ps-0 pe-0 pt-0">
              <div className="docter-details-block">
                <div
                  className="doc-profile-bg bg-primary"
                  style={{ height: 150 }}
                ></div>
                <div className="docter-profile text-center">
                  <img
                    src={user1}
                    alt="profile-img"
                    className="avatar-130 img-fluid"
                  />
                </div>
                <div className="text-center mt-3 ps-3 pe-3">
                  <h4>
                    <b>{profile.fname + " " + profile.mname + " " + profile.lname}</b>
                  </h4>
                  <p>Doctor</p>
                  {profile.educationDetails.length > 0 &&
                    (<p className="mb-0">
                      {profile.educationDetails[0].summary}
                    </p>
                    )}
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col lg="8">
          <div className="iq-card">
            <div className="iq-card-header d-flex justify-content-between">
              <div className="iq-header-title">
                <h4 className="card-title">Personal Information</h4>
              </div>
            </div>
            <div className="iq-card-body">
              <div className="about-info m-0 p-0">
                <Row>
                  <div className="col-4">DOB:</div>
                  <div className="col-8">{profile.dob}</div>
                  <div className="col-4">Age:</div>
                  <div className="col-8">27</div>
                  <div className="col-4">Gender:</div>
                  <div className="col-8">{profile.gender}</div>
                  <div className="col-4">Specialization:</div>
                  <div className="col-8">Senior Docter</div>

                  <div className="col-4">Phone:</div>
                  <div className="col-8">
                    <Link to="tel:001-2351-25612">+91 {profile.mobile}</Link>
                  </div>
                  <div className="col-4">Stree 1:</div>
                  <div className="col-8">{profile.street1}</div>
                  <div className="col-4">Stree 2:</div>
                  <div className="col-8">{profile.street2}</div>
                  <div className="col-4">PinCode:</div>
                  <div className="col-8">{profile.pin_Code}</div>
                  <div className="col-4">City:</div>
                  <div className="col-8">{profile.city}</div>
                  <div className="col-4">District:</div>
                  <div className="col-8">{profile.district}</div>
                  <div className="col-4">State:</div>
                  <div className="col-8">{profile.state}</div>
                  <div className="col-4">Date of Registration:</div>
                  <div className="col-8">{profile.dor}</div>
                </Row>
              </div>
            </div>
          </div>

        </Col>
        <Col>
          <Row>

            {profile.educationDetails.length > 0 && (
              <Col md="12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Education</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div className="table-responsive">
                      <Table className="mb-0" borderless>
                        <thead>
                          <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Degree</th>
                            <th scope="col">Institute</th>
                            <th scope="col">Result</th>
                          </tr>
                        </thead>
                        <tbody>

                          {
                            profile.educationDetails.map((education, index) => (
                              <tr>
                                <td>{education.year}</td>
                                <td>{education.degree}</td>
                                <td>{education.institute}</td>
                                <td>
                                  <span className="badge badge-success">
                                    {education.result}
                                  </span>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>)}

            {profile.expertienceDetails.length > 0 && (
              <Col md="12">
                <div className="iq-card">
                  <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                      <h4 className="card-title">Experience</h4>
                    </div>
                  </div>
                  <div className="iq-card-body">
                    <div className="table-responsive">
                      <Table className="mb-0" borderless>
                        <thead>
                          <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Department</th>
                            <th scope="col">Position</th>
                            <th scope="col">Hospital</th>
                            <th scope="col">Feedback</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(profile.expertienceDetails.map((experience, index) => (
                            <tr>
                              <td>{experience.year}</td>
                              <td>{experience.degree}</td>
                              <td>{experience.position}</td>
                              <td>{experience.hospital}</td>
                              <td>
                                <span className="badge badge-primary">{experience.feedback}</span>
                              </td>
                            </tr>
                          )))}
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </Col>)}
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default DoctorProfile;
