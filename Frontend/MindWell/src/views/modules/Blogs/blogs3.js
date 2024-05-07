import React, { Fragment, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faStar, faFlag } from '@fortawesome/free-solid-svg-icons';

const Blogs3 = () => {
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
                        <h2>What is the best physical activity for mental health?</h2>
                    </div>
                    {/* Text content of the blog */}
                    <p>
                    The best physical exercise is the one you do consistently. Whether it’s a daily walk or weekly yoga class, 
                    consistency will help ensure you always experience some of the mental health benefits of exercise.That said, 
                    certain workouts are better for treating specific mental health conditions:
                    </p>
                    <br></br>
                    <ul>
                        <li><b>Aerobics: </b>TAerobic activities, like running, swimming, cycling, and walking, 
                        are great ways to increase your heart rate, boost your cardiovascular system, and exercise for your mental 
                        health. In a study of 185 university students, people who regularly performed aerobic exercise reported lower
                        anxiety and better overall well-being.</li>

                        <li><b>Yoga and tai-chi:</b> Mindful stretching is known for its stress-reducing properties. These 
                        exercises are low impact and put minimal pressure on muscles and joints, making them safe for all ages 
                        and fitness levels. They’re also inexpensive and require no special equipment.</li>

                        <li><b>Team sports: </b> Team sports add extra accountability and social interaction to physical activity. 
                        They can also help you improve in a number of other areas: Executive functioning and creativity,Teamwork, 
                        Social responsibility Plus, they might be more fun than other exercises.<br></br>

                        And as you develop this body awareness, your perception of yourself changes. You’ll start identifying with 
                        the movements of your chosen exercise. For example, if you’re a long-distance runner, you might perceive 
                        yourself as having grit and resilience, which are qualities necessary to train for and complete a marathon 
                        or other grueling physical feats.</li>

                        <li><b>The power of achievement: </b>A healthy fitness routine usually involves setting goals. 
                        Whenever you reach a personal milestone or beat a personal record, you’ll motivate yourself to 
                        achieve the next one.

                        This sense of accomplishment can benefit your mental health. People who set realistic goals, in
                         general, tend to have higher self-motivation, self-esteem, independence, and confidence. It also gives 
                         them a sense of purpose and something to strive for.</li>
                    </ul>
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

export default Blogs3;
