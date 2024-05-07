import React, { Fragment, useState } from "react";
import { Row, Col, Form, FormControl, Button, Card } from "react-bootstrap"; // Importing necessary components from react-bootstrap
import { Link } from "react-router-dom";

const BlogList = () => {
    // Array to store relevant blog titles
    const relevantBlogs = [
        "Exercise And Mental Health: How Do They Relate?",
        "How does exercise improve and benefit mental health?",
        "What is the best physical activity for mental health?",
        "Going smokefree; why the new age of sale proposal for smoking is good news for mental health",
    ];

    const handleSearch = () => {
        // Add functionality for search button
        console.log("Search button clicked!");
    };

    const handleAddImage = () => {
        // Add functionality for add image button
        console.log("Add Image button clicked!");
    };

    const handleAddAudioVideo = () => {
        // Add functionality for add audio/video button
        console.log("Add Audio/Video button clicked!");
    };

    const handleAddBlog = () => {
        // Add functionality for add blog button
        console.log("Add Blog button clicked!");
    };

    const handleSeeMoreBlogs = () => {
        // Add functionality for see more blogs button
        console.log("See more blogs button clicked!");
    };

    return (
        <Fragment>
            <Row className="justify-content-end mb-3">
            </Row>



            {/* Relevant Blogs Section */}
            <Row className="justify-content-center align-items-center mb-3" style={{ height: "50px" }}>
                <h3 className="text-center">Relevant Blogs</h3> {/* Added text-center class to center align */}
            </Row>

            {/* Display each blog title in a Card component */}
            {relevantBlogs.map((blogTitle, index) => (
                <Col key={index} xs={12} className="mb-3">
                    <Card style={{ borderRadius: '20px', padding: '5px', fontSize: '14px' }}> {/* Reduced padding and font size */}
                        <Card.Body>
                            <Card.Title><Link to={"/home/"+blogTitle}>{blogTitle}</Link></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            {/* "See more blogs" button */}
            <Row className="justify-content-center">
                <Col xs={3}>
                    <Button variant="primary" className="me-1 mb-3 rounded-pill" onClick={handleSeeMoreBlogs} style={{ borderRadius: '50px' }}>
                        See more blogs
                    </Button>
                </Col>
            </Row>
        </Fragment>
    );
};

export default BlogList;
