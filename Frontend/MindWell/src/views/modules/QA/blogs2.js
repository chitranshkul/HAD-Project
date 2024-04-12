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
            <h2>Title of the Blog</h2>
          </div>
          {/* Text content of the blog */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            ornare magna. Donec fermentum ligula sed eros pretium, sit amet
            mollis nunc lacinia. Donec auctor est vel mi iaculis, vel
            imperdiet risus condimentum. Duis vestibulum eleifend magna ut
            vestibulum. Aliquam erat volutpat. Sed pellentesque, arcu nec
            molestie consequat, eros ligula consectetur magna, id lobortis
            mauris nunc vitae lorem. Nullam ac fringilla metus, vel interdum
            nulla. Nulla tincidunt tortor in ex lacinia, nec commodo magna
            consequat. Sed vitae lacinia ante. Donec euismod velit non
            tristique convallis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            ornare magna. Donec fermentum ligula sed eros pretium, sit amet
            mollis nunc lacinia. Donec auctor est vel mi iaculis, vel
            imperdiet risus condimentum. Duis vestibulum eleifend magna ut
            vestibulum. Aliquam erat volutpat. Sed pellentesque, arcu nec
            molestie consequat, eros ligula consectetur magna, id lobortis
            mauris nunc vitae lorem. Nullam ac fringilla metus, vel interdum
            nulla. Nulla tincidunt tortor in ex lacinia, nec commodo magna
            consequat. Sed vitae lacinia ante. Donec euismod velit non
            tristique convallis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id
            ornare magna. Donec fermentum ligula sed eros pretium, sit amet
            mollis nunc lacinia. Donec auctor est vel mi iaculis, vel
            imperdiet risus condimentum. Duis vestibulum eleifend magna ut
            vestibulum. Aliquam erat volutpat. Sed pellentesque, arcu nec
            molestie consequat, eros ligula consectetur magna, id lobortis
            mauris nunc vitae lorem. Nullam ac fringilla metus, vel interdum
            nulla. Nulla tincidunt tortor in ex lacinia, nec commodo magna
            consequat. Sed vitae lacinia ante. Donec euismod velit non
            tristique convallis.
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
            <p className="mb-0">Author: John Doe</p>
            {/* Blog image */}
            <img
              src="https://via.placeholder.com/150" // Adjust image source as needed
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
