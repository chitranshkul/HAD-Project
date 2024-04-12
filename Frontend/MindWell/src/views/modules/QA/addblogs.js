import React, { Fragment, useState } from "react";
import { Row, Col, Form, FormControl, Button, Card } from "react-bootstrap"; // Importing necessary components from react-bootstrap


const Addblogs = () => {
    return(
        <Fragment>
          <Card className="iq-mb-3">
            <Row className="no-gutters">
                <Col md='12'>
                    <Card.Body>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" rows={3} placeholder="Enter text here..." />
                        </Form.Group>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
      </Fragment>
    );
};

export default Addblogs;
