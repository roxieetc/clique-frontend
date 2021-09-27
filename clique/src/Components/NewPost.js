import React, {useState} from "react";
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

function NewPost () {

    const [imgurl, setImageUrl] = useState("")
    const [caption, setCaption] = useState("")
    const [author, setAuthor] = useState("")

    const submitPost = async () => {
        const url = "http://localhost:8000/api/posts/"
        axios.post(url, {
            imgurl,
            caption,
            author
        })
        .then((res) => {
            console.log("Posted!")
        })
    }

    const storeImgUrl = (e) => {
        setImageUrl(e.target.value)
    }

    const storeCaption = (e) => {
        setCaption(e.target.value)
    }

    const storeAuthor = () => {
        setAuthor("1")
    }

    return(
        <div className="newPostForm">
            <Form>
  <Form.Group className="mb-3" controlId="postAuthor">
    <Form.Label>Author</Form.Label>
    <Form.Control type="text" placeholder="Enter username" onChange={storeAuthor} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="imgURL">
    <Form.Label>Image URL</Form.Label>
    <Form.Control type="text" placeholder="Enter image URL here" onChange={storeImgUrl} />
    <Form.Text className="text-muted">
      Must be in .jpg/jpeg/png format
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="imgCaption">
    <Form.Label>Image Caption</Form.Label>
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