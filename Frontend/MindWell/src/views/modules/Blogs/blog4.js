import React, { Fragment, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faStar, faFlag } from '@fortawesome/free-solid-svg-icons';

const Blogs4 = () => {
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
                        <h2>Going smokefree; why the new age of sale proposal for smoking is good news for mental health</h2>
                    </div>
                    {/* Text content of the blog */}
                    <p>
                        In January 2023, we wrote with 25 other organisations to the Government. We urged them to publish a new tobacco plan with commitments to end
                        smoking and build on the progress made in recent years that has halved smoking rates in the UK (from around 27% in 1990s to 12.9% in 2022[1]).
                        So, when the Government announced its age of sale proposal in October 2023, it felt like a significant potential victory for public health.
                        The Government’s plan would see the age of sale for tobacco increase by one year, every year. This would prevent anyone born on or after
                        1 January 2009 from legally buying cigarettes in England.
                    </p>
                    <br></br>
                    <p>
                        For years, many people have believed a myth that smoking is a helpful way of reducing stress and anxiety.  For example, in evidence presented to the Mental
                        Health and Smoking Partnership, the Smokefree Sheffield coalition reported that in Yorkshire, 43% of people still believed that smoking reduced stress.
                        But we know the opposite is true. Although nicotine provides some short-term relief through the release of neurotransmitters like dopamine, this quickly
                        sgives way to much longer and increased withdrawal symptoms, including low mood, anxiety and depression.
                    </p>
                    <br></br>
                    <p>
                        We now have clear evidence of the role of smoking in the onset and maintenance of poor mental health. Indirectly, through trapping smokers in a cycle of
                        dependence that worsens physical and mental health (see fig 1). And directly, by increasing the risk of some mental health conditions (such as depression and
                        schizophrenia) and through the creation of addiction, which harms people’s mental wellbeing.
                        It has also been shown that that quitting smoking improves your mental health, at least as much as some anti-depressants. And we also know the mental health
                        benefits of stopping smoking increase as people abstain from smoking long-term.
                    </p>
                    <br></br>
                    <p>
                        In 2021, we produced our best mental health tips, backed by research. One of the most important tips was to avoid the use of recreational
                        drugs and alcohol because of their damaging impact on our mental health. And this should include smoking. Any reduction in smoking rates will
                        have a disproportionately positive impact on those with poor mental health. It will protect people with an existing diagnosis from the harms of
                        smoking and prevent poor mental health in young people by reducing the number smoking in the first place.
                        Reduced smoking rates will also benefit people with low income.  Smoking increases your risk of poverty and is also a major cause of health inequalities.
                        For example, deaths attributable to smoking happen at a 2.1 times higher rate[8] in the most deprived local authorities than in the least deprived[9].
                        We know that work to reduce poverty and inequalities are correlated to improved mental health outcomes.
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

export default Blogs4;
