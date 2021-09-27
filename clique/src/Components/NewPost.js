import React from "react";
import { Form, Button } from 'react-bootstrap';

function NewPost () {

    return(
        <div className="newPostForm">
            <Form>
  <Form.Group className="mb-3" controlId="imgURL">
    <Form.Label>Image URL</Form.Label>
    <Form.Control type="text" placeholder="Enter image URL here" />
    <Form.Text className="text-muted">
      Must be in .jpg/jpeg/png format
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="imgCaption">
    <Form.Label>Image Caption</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter caption here...." />
  </Form.Group>
 
  <Button  className="postButton" variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}

export default NewPost;