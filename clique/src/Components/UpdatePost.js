import React from "react";
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function UpdateProfile() {

    return (
        <div className="updateForm">
            <h2 className="updateTitle">Update Post</h2>
            <hr />
        <Form>
            <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author:</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="post_pic">
                <Form.Label>Image URL:</Form.Label>
                <Form.Control type="text" placeholder="Enter image URL here" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="caption">
                <Form.Label>Caption:</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter caption here...." />
            </Form.Group>
 
            <Button  className="postButton" variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        </div>
    )
}

export default UpdateProfile;