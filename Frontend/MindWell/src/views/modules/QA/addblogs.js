import React, { Fragment, useState, useRef } from "react";
import { Row, Col, Form, Button, Image } from "react-bootstrap";
const Blog = () => {
    // Existing states
    const [name, setName] = useState("Your Name");
    const [designation, setDesignation] = useState("Your Designation");
    const [profilePicture, setProfilePicture] = useState("https://via.placeholder.com/150");
    const [blogContent, setBlogContent] = useState("");
    const [file, setFile] = useState(null);

    // New ref for file input
    const fileInputRef = useRef(null);

    // Existing and new handlers
    const handleBlogContentChange = (event) => {
        setBlogContent(event.target.value);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0]; // Get the first file
        setFile(file); // Update the state
        console.log(file); // Optional: Log file info or handle the file
    };

    const handleAddMediaClick = () => {
        fileInputRef.current.click(); // Simulate click on the file input
    };

    return (
        <Fragment>
            <div className="d-flex align-items-center justify-content-start mb-3">
                <Image src={profilePicture} roundedCircle style={{ width: "50px", height: "50px", marginRight: "10px" }} />
                <div>
                    <h4>{name}</h4>
                    <p>{designation}</p>
                </div>
            </div>
            <Form style={{ padding: "0" }}>
                <Form.Control
                    as="textarea"
                    rows={5}
                    value={blogContent}
                    onChange={handleBlogContentChange}
                    placeholder="Write your blog content here..."
                    className="iq-mb-3"
                />
                <div className="d-flex">
                    <Button variant="primary" className="me-1" onClick={handleAddMediaClick}>
                         Add Image
                    </Button>
                    <Button variant="primary" className="me-1" onClick={handleAddMediaClick}>
                       Add Audio/Video
                    </Button>
                    <Button variant="primary">
                        <span style={{ marginRight: "5px" }}>+</span> Add the Blog
                    </Button>
                </div>
                <br/>
                <input
                  type="file"
                  style={{ display: 'none' }}
                  accept="audio/,video/"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                />
             </Form>
        </Fragment>
    );
};

export default Blog;