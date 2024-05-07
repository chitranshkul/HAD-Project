import React, { Fragment, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faStar, faFlag } from '@fortawesome/free-solid-svg-icons';

const Blogs2 = () => {
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
                        <h2>How does exercise improve and benefit mental health?</h2>
                    </div>
                    {/* Text content of the blog */}
                    <p>
                    The effects of exercise are hardly magic. There’s a direct relationship between your body and brain, 
                    so taking care of one helps take care of the other.Here are the primary mechanisms through which exercise 
                    leads to better mental health:
                    </p>
                    <br></br>
                    <ul>
                        <li><b>1. Happy hormones: </b>Through regular physical activity, your body releases chemicals such as dopamine
                         and endorphins. These hormones are responsible for most of the emotional benefits of exercise due to their 
                         capacity to create joy. That’s why they’re sometimes called “happy hormones.” They’re also known to induce
                          euphoria in athletes, creating the phenomenon called “runner’s high.”</li>

                        <li><b>Suppressed stress:</b> In addition to producing happy chemicals, exercise reduces your body’s stress 
                        hormone levels. This means less cortisol and adrenaline running through your body, lowering your risk of 
                        chronic stress and the accompanying long-term health risks. This also has the happy side effect of improving 
                        your sleep. Less stress, coupled with a physically tired body, will help you get much-needed shuteye.</li>

                        <li><b>Mind-body connection: </b> Every time you move a muscle, sensory receptors send information to your 
                        brain about what’s happening. Doing this intentionally through exercise helps your mind become more aware of 
                        your body’s position in space, increasing your physical self-awareness.<br></br>

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

export default Blogs2;
