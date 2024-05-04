import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Button, Alert } from "react-bootstrap";
import axios from "axios";

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
import { exp } from "@amcharts/amcharts5/.internal/core/util/Ease";

const DoctorsList = () => {

  const [experts, setExperts] = useState([
    {
      name: "",
      gender: "",
      contact_no: "",
      uid: "",
    }
  ]);
  useEffect(() => {
    console.log("Fetching experts");
    axios.get('/api/v1/admin/getlistbyrole/EXPERT')
      .then(response => {
        console.log(response.data)
        setExperts(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });

  }, []);
  const [show7, setShow7] = useState(false);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }

  const handleSendAppointment = async (event) => {
    console.log(event.target.id);
    const userid = localStorage.getItem('id');
    console.log(userid);

    const currentDateTime = new Date();

    const Appointment = {
      Patient_ID: userid,
      Expert_ID: event.target.id,
      Date: formatDate(currentDateTime),

      Time: formatTime(currentDateTime)
    }

    try {

      const response = await axios({
        method: 'post',
        url: `/api/v1/appointment/send-appointment-request`,
        data: Appointment,
      });
      console.log(response);
      setShow7(true);

    } catch (excecption) {
      console.log(excecption);
    }
  }

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

        {experts.map((expert, index) => (
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
                  <Link to="/home/doctors-profile"><h4> {expert.name}</h4></Link>
                  <p className="mb-0">{expert.gender}</p>
                  <Link to={"/home/doctors-profile/" + expert.contact_no}>View Profile</Link>
                </div>
                <div className="iq-doc-description mt-2">
                  {/* <p className="mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                    auctor non erat non gravida. In id ipsum consequat
                  </p> */}
                </div>
                <br></br>
                <Button to="#" id={expert.uid} onClick={handleSendAppointment} className="btn btn-primary">
                  Send Appointment Request
                </Button>
                <br></br>

              </div>
            </div>
          </Col>
        ))}


      </Row>
      <Row>
        <Col>
        </Col>
        <Col>
          <Alert
            show={show7}
            className="alert text-white alert-dismissible bg-primary"
            role="alert"
            onClick={() => setShow7(false)}
            dismissible
          >
            <div className="iq-alert-icon">
              <i className="ri-alert-fill"></i>
            </div>
            <div className="iq-alert-text">
              Appointent Request Send Successfully
            </div>
          </Alert>
        </Col>
        <Col>
        </Col>
        <Col>
        </Col>
      </Row>

    </Fragment>
  );
};

export default DoctorsList;
