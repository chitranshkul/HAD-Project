import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Col,
  Nav,
  Row,
  Tab,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
// img
import user1 from "../../../assets/images/user/05.jpg";
import user8 from '../../../assets/images/user/1.jpg'

const Chat = () => {
  const [appointments, setAppointments] = useState([
    {
      Name: "Chitransh Kulshrestha",
      Date: "2024-04-03",
      Time: "01:00:00",
      username: "chituh@iiitb.ac.in",
      gender: "Male",
      appointid: "1"
    }

  ]);
  const [message, setMessage] = useState({
    from_id: 0,
    to_id: 0,
    message: ""
  })
  const [expert, setExpert] = useState();

  const [chats, setChats] = useState([
    {
      senderid: 0,
      receiverid: 0,
      message: "",
      date: ""
    }

  ]);


  useEffect(() => {
    console.log("Fetching Experts");
    axios.get('/api/v1/appointment/RoleBasedAppointment/' + localStorage.getItem('id'))
      .then(response => {
        console.log(response.data)
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('Error fetching questions:', error);
      });


  }, []);


  const handleLoadChats = (event, appointment) => {
    event.preventDefault();
    setExpert(appointment.username)
    axios.get('/api/v1/chatting/getChat/' + localStorage.getItem('username') + "/" + appointment.username)
      .then(response => {
        console.log(response.data)
        setChats(response.data);
      })
      .catch(error => {
        setChats([{}])
        console.error('Error fetching questions:', error);
      });
    console.log("Patient ID: " + appointment.username)
    setMessage({ ...message, from_id: localStorage.getItem('username'), to_id: appointment.username })
  }

  const handleSendChats = async (event) => {
    event.preventDefault();
    console.log("Sending Message: ", message);

    console.log("Sending Message: ", message)
    try {
      const response = await axios({
        method: 'post',
        url: `/api/v1/chatting/sendChat`,
        data: message,
      });
      console.log(response);
      axios.get('/api/v1/chatting/getChat/' + localStorage.getItem('username') + "/" + message.to_id)
      .then(response => {
        console.log(response.data)
        setChats(response.data);
      })
      .catch(error => {
        setChats([{}])
        console.error('Error fetching questions:', error);
      });
    }
    catch (excecption) {
      console.log(excecption)
    }


  }

  return (
    <Fragment>
      <Tab.Container defaultActiveKey={"default-block"}>
        <Row>
          <Col lg="3" className="col-lg-3 chat-data-left scroller">
            <div className="chat-sidebar-channel scroller ps-3">
              <h5 className="">Chat With Your Patient and Help Them...</h5>
              <Nav className="iq-chat-ui nav flex-column nav-pills">
                {appointments.map((appointment) => (
                  <Nav.Item as={"li"} onClick={(event) => handleLoadChats(event, appointment)}>
                    <Nav.Link data-bs-toggle="pill" eventKey="default-block-1">
                      <div className="d-flex align-items-center">
                        <div className="avatar me-3">
                          <img
                            src={user1}
                            alt="chatuserimage"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-success"></i>
                          </span>
                        </div>
                        <div className="chat-sidebar-name">
                          <h6 className="mb-0">{appointment.Name}</h6>
                          <span>{appointment.Date + " " + appointment.Time}
                            <br></br>
                            Gender: {appointment.gender}
                          </span>
                        </div>
                        <div className="chat-meta float-end text-center mt-2">
                          <div className="chat-msg-counter bg-primary text-white">
                            20
                          </div>
                          <span className="text-nowrap">05 min</span>
                        </div>
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                ))}

              </Nav>
            </div>
          </Col>
          <Col lg="9" className="mb-4">
            <div className="chat-data chat-data-right">
              <Tab.Content>
                <Tab.Pane
                  className="tab-pane fade show"
                  eventKey="default-block"
                  role="tabpanel"
                >
                  <div className="chat-start">
                    <span className="iq-start-icon text-primary">
                      <i className="ri-message-3-line"></i>
                    </span>
                    <Button id="chat-start" className="btn bg-primary mt-3">
                      Start Conversation!
                    </Button>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  className="tab-pane fade"
                  eventKey={"default-block-1"}
                  role="tabpanel"
                >
                  <div className="chat-head">
                    <header className="d-flex justify-content-between align-items-center pt-3 pe-3 pb-3">
                      <div className="d-flex align-items-center">
                        <div className="sidebar-toggle">
                          <i className="ri-menu-3-line"></i>
                        </div>
                        <div className="avatar chat-user-profile m-0 me-3">
                          <img
                            src={user1}
                            alt="avatar"
                            className="avatar-50 rounded"
                          />
                          <span className="avatar-status">
                            <i className="ri-checkbox-blank-circle-fill text-success"></i>
                          </span>
                        </div>
                        <h5 className="mb-0"> {expert}</h5>
                      </div>
                    </header>
                  </div>
                  <div className="chat-content scroller">
                    {chats.map((chat) => (
                      chat.senderid == localStorage.getItem('username') ? (
                        <div className="chat">
                          <div className="chat-user">
                            <Link className="avatar m-0">
                              <img
                                src={user8}
                                alt="avatar"
                                className="avatar-35 rounded "
                              />
                            </Link>
                            <span className="chat-time mt-1">{chat.date}</span>
                          </div>
                          <div className="chat-detail">
                            <div className="chat-message">
                              <p>{chat.message}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="chat chat-left">
                          <div className="chat-user">
                            <Link className="avatar m-0">
                              <img
                                src={user1}
                                alt="avatar"
                                className="avatar-35 rounded "
                              />
                            </Link>
                            <span className="chat-time mt-1">{chat.date}</span>
                          </div>
                          <div className="chat-detail">
                            <div className="chat-message">
                              <p>
                                {chat.message}
                              </p>
                            </div>
                          </div>
                        </div>
                      )

                    ))}
                  </div>
                  <div className="chat-footer p-3 bg-white">
                    <form className="d-flex align-items-center" action="#" onSubmit={handleSendChats}>
                      <div className="chat-attagement d-flex">
                        <Link to="#">
                          <i
                            className="fa fa-smile-o pe-3"

                          ></i>
                        </Link>
                        <Link to="#">
                          <i
                            className="fa fa-paperclip pe-3"

                          ></i>
                        </Link>
                      </div>
                      <input
                        type="text"
                        className="form-control me-3"
                        placeholder="Type your message"
                        value={message.message}
                        onChange={(event) => setMessage({ ...message, message: event.target.value })}
                      />
                      <Button
                        type="submit"
                        className="btn btn-primary d-flex align-items-center p-2"
                      >
                        <i
                          className="fa fa-paper-plane-o"

                        ></i>
                        <span className="d-none d-lg-block ms-1">Send</span>
                      </Button>
                    </form>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </div>
          </Col>
        </Row>
      </Tab.Container>
    </Fragment>
  );
};

export default Chat;
