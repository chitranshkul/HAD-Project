import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Card, Button, Image, Form, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFlag } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../axiosInstance';

import axios from 'axios';


const LowLevel = () => {
  // Array to store answers and their like counts along with the user who answered
  let { qid } = useParams();

  const navigate = useNavigate();
  const [question, setQuestion] = useState({
    question_text: "",
    posted_by: "",
    date_time: ""
  });

  const [postAnswer, setPostAnswer] = useState(
    {
      q_id: "",
      uid: "",
      answers_text: ""
    }
  );
  const [role,setRole] = useState(localStorage.getItem("role"));

  const [answers, setAnswers] = useState([{
    answer_id: 0,
    answer_posted_by: "",
    answers_text: "",
    Date: "",
    flag: 0,
    upvote: 0
  }]);

  const [flag, setFlag] = useState({
    id: ""
  });


  useEffect(() => {


    const fetchQuestion = async () => {
      const accessToken = localStorage.getItem('access_token');

      try {

        const headers = {
          "Content-Type": "application/json",
          // "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${accessToken}`,
        };
        axios.get('/api/v1/qaresponse/getQuestion/' + qid, { headers: headers })
          .then(response => {
            console.log("Admins: ", response.data);
            setQuestion(response.data);
          })
          .catch(error => {
            console.error('Error fetching responses:', error);
          });

          
        // axiosInstance.get(`/qaresponse/getQuestion/${qid}`, { headers: headers }).then((response) => {
        //   console.log("Admins: ", response.data);
        //   setQuestion(response.data);
        // });

      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    const fetchAnswers = async () => {
      const accessToken = localStorage.getItem('access_token');

      try {

        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${accessToken}`,
        };


        axios.get('/api/v1/qaresponse/responses/' + qid, { headers: headers })
          .then(response => {
            console.log("Admins: ", response.data);
            setAnswers(response.data);
          })
          .catch(error => {
            console.error('Error fetching responses:', error);
          });

        // axiosInstance.get(`/qaresponse/responses/${qid}`, { headers: headers }).then((response) => {
        //   console.log("Admins: ", response.data);
        //   setAnswers(response.data);
        // });

      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchQuestion();
    fetchAnswers();
  }, [navigate]);


  // Function to handle liking an answer
  const handleLike = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].likes += 1;
    setAnswers(updatedAnswers);
  };


  const handleOnChangeAddAnswer = (event) => {
    event.preventDefault();
    setPostAnswer({
      q_id: qid,
      uid: localStorage.getItem('id'),
      answers_text: event.target.value
    });
  }

  const handleAddQuestionSubmit = async (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem('access_token');

    try {
      const response = await axios({
        method: 'post',
        url: `/api/v1/qaresponse/postresponse`,
        data: postAnswer,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${accessToken}`,
      };

      axios.get('/api/v1/qaresponse/responses/' + qid, { headers: headers })
        .then(response => {
          console.log("Admins: ", response.data);
          setAnswers(response.data);
        })
        .catch(error => {
          console.error('Error fetching responses:', error);
        });

    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  // Dummy user data for the question
  const questionUser = {
    name: "John Doe",
    profilePic: "https://via.placeholder.com/150", // Replace with actual profile picture URL
  };

  const addToFlagResponses = async(event) => {
    event.preventDefault();

    const accessToken = localStorage.getItem('access_token');
    setFlag({ id: event.target.id });
    console.log("Flagged Response: ", event.target.id);
    try {
      const headers = {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${accessToken}`,
      };
      console.log("Flag: ", flag)

      const response = await axios({
        method: 'post',
        url: `/api/v1/qaresponse/flagresponse`,
        data: flag,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const addToUpvotes = async(event) => {
    event.preventDefault();

    const accessToken = localStorage.getItem('access_token');
    console.log("Upvoted Response: ", event.target.id);
    try {
      const headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${accessToken}`,
      };
      const upvoteData = {
        id: event.target.id
      }

      const response = await axios({
        method: 'post',
        url: `/api/v1/qaresponse/upvote`,
        data: upvoteData,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <Fragment>
      <div className="mb-3">
        <h4 className="mb-2">Question:</h4>
        <div className="px-3 mb-3">
          {" "}
          {/* Add padding */}
          <Card className="w-100">
            <Card.Body>
              <Card.Text as="h4">
                {question.question_text}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Profile Picture and Name Section */}
      <div className="px-3 d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <Image
            src={questionUser.profilePic}
            roundedCircle
            className="me-2"
            width={50}
            height={50}
          />
          <p className="mb-0">{question.posted_by}</p>
        </div>
        <div>
          <p className="mb-0">Posted on: {question.date_time}</p>
        </div>
      </div>
      <br></br>
      { ((role === "EXPERT" || role=="PATIENT") && (
      <Row className="justify-content-end mb-3">
        <Form className="d-flex" onSubmit={handleAddQuestionSubmit}>
          <FormControl
            type="search"
            placeholder="Do You Know About it? Then Post Your Suggestions Here!"
            className="me-3 "
            aria-label="Post Answer"
            onChange={handleOnChangeAddAnswer}
          />
          <Button variant="primary" className="me-5 " type="submit">
            Post Answer
          </Button>
        </Form>
      </Row>
      ))}
    
      {/* Answers Section */}
      <div className="mb-3">
        <h4 className="mb-2">Answers:</h4>
        <div className="px-3">
          {" "}
          {/* Add padding */}
          {/* Map through the answers array and render each answer with like and dislike buttons */}
          {answers.map((answer, index) => (
            <div key={index}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="mb-0">Posted on: {answer.Date}</p>
                <span className="me-2">Answered by: {answer.answer_posted_by}</span>
              </div>
              <Card className="iq-mb-3" style={{ borderRadius: "10px" }}>
                <Card.Body>
                  <Card.Text>{answer.answers_text}</Card.Text>
                </Card.Body>
              </Card>
              {/* Like and Dislike Buttons */}

              <div className="d-flex justify-content-end px-3 align-items-center">
                <Button variant="danger" className="me-1 mb-3" onClick={addToFlagResponses} id={answer.answer_id}>
                  <FontAwesomeIcon icon={faFlag} className="me-1" />
                  Flag Answer
                </Button>
                <Button variant="primary" className="me-1 mb-3" onClick={addToUpvotes} id={answer.answer_id}>
                  <FontAwesomeIcon icon={faThumbsUp} className="me-1" />
                  Upvote
                </Button>

                {/* Like count */}
                <span className="ms-2">Upvotes: {answer.upvote}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LowLevel;
