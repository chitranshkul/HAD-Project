import React, { Fragment } from "react";
import { Col, Row, Table } from "react-bootstrap";

// Images
import user1 from "../../../assets/images/user/11.png";

import { Link } from "react-router-dom";

function DoctorProfile() {
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
                    <b>Bini Jets</b>
                  </h4>
                  <p>Doctor</p>
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus repudiandae eveniet harum.
                  </p>
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
                  <div className="col-8">25-07-2000</div>
                  <div className="col-4">Age:</div>
                  <div className="col-8">27</div>
                  <div className="col-4">Gender:</div>
                  <div className="col-8">Male</div>
                  <div className="col-4">Specialization:</div>
                  <div className="col-8">Senior Docter</div>
                  <div className="col-4">Email:</div>
                  <div className="col-8">
                    <Link to="mailto:biniJets24@demo.com">
                      {" "}
                      biniJets24@demo.com{" "}
                    </Link>
                  </div>
                  <div className="col-4">Phone:</div>
                  <div className="col-8">
                    <Link to="tel:001-2351-25612">+91 897 919 7985</Link>
                  </div>
                  <div className="col-4">Stree 1:</div>
                  <div className="col-8">Z/3-12, ZSI Housing Complex</div>
                  <div className="col-4">Stree 2:</div>
                  <div className="col-8">218 Kaulagarh Road</div>
                  <div className="col-4">PinCode:</div>
                  <div className="col-8">248195</div>
                  <div className="col-4">City:</div>
                  <div className="col-8">Dehradun</div>
                  <div className="col-4">District:</div>
                  <div className="col-8">Dehradun</div>
                  <div className="col-4">State:</div>
                  <div className="col-8">Uttarakhand</div>
                  <div className="col-4">Date of Registration:</div>
                  <div className="col-8">20-03-2020</div>
                </Row>
              </div>
            </div>
          </div>

        </Col>
        <Col>
          <Row>
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
                        <tr>
                          <td>2010</td>
                          <td>MBBS, M.D</td>
                          <td>University of Wyoming</td>
                          <td>
                            <span className="badge badge-success">
                              Distinction
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>2014</td>
                          <td>M.D. of Medicine</td>
                          <td>Netherland Medical College</td>
                          <td>
                            <span className="badge badge-success">
                              Distinction
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>
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
                        <tr>
                          <td>2014 - 2018</td>
                          <td>MBBS, M.D</td>
                          <td>Senior Docter</td>
                          <td>Midtown Medical Clinic</td>
                          <td>
                            <span className="badge badge-primary">Good</span>
                          </td>
                        </tr>
                        <tr>
                          <td>2018 - 2020</td>
                          <td>M.D. of Medicine</td>
                          <td>Associate Prof.</td>
                          <td>Netherland Medical College</td>
                          <td>
                            <span className="badge badge-success">
                              excellence
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Fragment>
  );
}

export default DoctorProfile;
