import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

function NewPost () {

    const [author, setAuthor] = useState("")
    const [post_pic, setPostPic] = useState("")
    const [post_caption, setPostCaption] = useState("")

    const submitPost = async () => {
        const url = "http://localhost:8000/api/posts/"
        axios.post(url, {
            author,
            post_pic,
            post_caption
        })
        .then((res) => {
            console.log("Posted!")
        })
    }

    const storeImgUrl = (e) => {
        setPostPic(e.target.value)
    }

    const storeCaption = (e) => {
        setPostCaption(e.target.value)
    }

    const storeAuthor = () => {
        setAuthor("1")
    }

    return(
        <div className="newPostForm">
            <h1>Make A Post</h1>
            <hr />
            <Form>
  <Form.Group className="mb-3" controlId="author">
    <Form.Label>Author:</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={storeAuthor} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="post_pic">
    <Form.Label>Image URL:</Form.Label>
    <Form.Control type="text" placeholder="Enter image URL here" onChange={storeImgUrl} />
    <Form.Text className="text-muted">
      Must be in .jpg/jpeg/png format
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="post_caption">
    <Form.Label>Caption:</Form.Label>
    <Form.Control as="textarea" rows={3} placeholder="Enter caption here...." onChange={storeCaption} />
  </Form.Group>
 
  <Button  className="postButton" variant="primary" type="submit" onClick={submitPost} >
    Submit
  </Button>
</Form>
        </div>
    )
}

export default NewPost;