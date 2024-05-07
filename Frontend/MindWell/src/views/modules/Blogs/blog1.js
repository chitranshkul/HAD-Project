import React, { Fragment, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faStar, faFlag } from '@fortawesome/free-solid-svg-icons';

const Blogs1 = () => {
    // State to hold the like count, initialized to 0
    const [likeCount, setLikeCount] = useState(0);

    // Function to handle like button click
    const handleLikeClick = () => {
        setLikeCount(likeCount + 1);
    };

    return (
        <Fragment>
            <Row>
                <Col xs={12} md={9}> {/* Blog content in a 9/12 column */}
                    {/* Center aligned title */}
                    <div className="text-center mb-3">
                        <h2>Exercise And Mental Health: How Do They Relate?</h2>
                    </div>
                    {/* Text content of the blog */}
                    <p>
                        The impact of exercise on mental health has been a hot topic for research. The science is clear: Regular exercise can
                        improve mental and emotional well-being and lower your risk of mental illness. In fact, the CDC says you can experience
                        benefits for your mental and physical health with as little as 30 minutes of moderate exercise per day.
                    </p>
                    <br></br>
                    <p>Here are some of the benefits of exercise on mental health. It can</p>
                    <ul>
                        <li>Help you sleep better</li>
                        <li>Help you cope with anxiety disorders</li>
                        <li>Increase your emotional regulation</li>
                        <li>Reduce your risk of dementia (including Alzheimer’s disease)</li>
                        <li>Lower your risk of major depressive disorder</li>
                        <li>Help you cope with stress</li>
                        <li>Increase your energy</li>
                        <li>Improve your self self-esteem</li>
                        <li>Make your more focused and attentive</li>
                        <li>Train your resilience</li>
                    </ul>

                    <p>
                        Exercise programs are just one potential intervention for mental health issues. For people with more severe mental
                        health conditions, exercise is a complement to, not a replacement for, additional care. Seek out psychotherapy,
                        psychiatry, or other types of mental health care if you have symptoms of depression or anxiety.
                    </p>

                    <p>
                        Mental health professionals may prescribe exercise for mental health issues if they feel it’ll improve your situation. 

                        For many of us, we simply need help forming healthy habits. Outside support, such as from a coach or group, 
                        can help you understand your why and hold you accountable to make consistent progress toward your goals. 
                    </p>
                </Col>
                <Col xs={12} md={3}>
                    {/* Profile picture and image in a single column */}
                    <div className="d-flex flex-column align-items-center">
                        {/* Profile picture */}
                        <img
                            src="https://via.placeholder.com/100" // Smaller image size
                            alt="Dummy Image"
                            className="img-fluid rounded-circle mb-3"
                        />
                        {/* Author name */}
                        <p className="mb-0">Author: Gramya Gupta</p>
                        {/* Blog image */}
                        <img
                            src="https://cdn.dnaindia.com/sites/default/files/2023/10/08/2610562-untitled-design-25.jpg?im=FitAndFill=(1200,900)" // Adjust image source as needed
                            alt="Blog Image"
                            className="img-fluid mt-3"
                        />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={9} className="text-start"> {/* Align elements to the left */}
                    {/* Like and Dislike Buttons */}
                    <Button variant="primary" className="me-1 mb-3">
                        <FontAwesomeIcon icon={faFlag} /> Flag the Blog
                    </Button>
                    <Button variant="primary" className="me-1 mb-3" onClick={handleLikeClick}>
                        <FontAwesomeIcon icon={faThumbsUp} /> Like
                    </Button>
                    <Button variant="primary" className="me-1 mb-3">
                        <FontAwesomeIcon icon={faThumbsDown} /> Dislike
                    </Button>
                    {/* Stars */}
                    {[1, 2, 3, 4, 5].map((starIndex) => (
                        <FontAwesomeIcon key={starIndex} icon={faStar} className="ms-1" />
                    ))}
                    {/* Like count */}
                    <span className="ms-2">Likes: {likeCount}</span>
                </Col>
            </Row>
        </Fragment>
    );
};

export default Blogs1;
