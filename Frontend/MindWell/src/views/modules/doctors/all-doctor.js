import React, { Fragment } from "react";
import { Col, Row, Button} from "react-bootstrap";

// Images
import user1 from "../../../assets/images/user/12.jpg";
import user2 from "../../../assets/images/user/13.jpg";
import user3 from "../../../assets/images/user/14.jpg";
import user4 from "../../../assets/images/user/15.jpg";
import user5 from "../../../assets/images/user/16.jpg";
import user6 from "../../../assets/images/user/17.jpg";
import user7 from "../../../assets/images/user/18.jpg";

// Link
import { Link } from "react-router-dom";

const AllDoctors = () => {
  return (
    <Fragment>
        <Row>
          <Col sm="12">
            <div className="iq-card">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Docters List</h4>
                </div>
              </div>
            </div>
          </Col>
          
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          <Col sm="6" md="3">
            <div className="iq-card">
              <div className="iq-card-body text-center">
                <div className="doc-profile">
                  <img
                    className="rounded-circle img-fluid avatar-80"
                    src={user2}
                    alt="profile"
                  />
                </div>
                <div className="iq-doc-info mt-3">
                  <Link to = "/home/doctors-profile"><h4> Dr. Paul Molive</h4></Link>
                  <p className="mb-0">Heart Surgeons</p>
                  <Link to="#">www.demo.com</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p>
                </div>
                <br></br>
                <Button to="#" className="btn btn-primary">
                  Send Appointment Request 
                </Button>
              </div>
            </div>
          </Col>
          
        </Row>
    </Fragment>
  );
};

export default AllDoctors;
