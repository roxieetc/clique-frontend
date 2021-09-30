import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Form, Button, Image } from 'react-bootstrap';
import axios from 'axios';

function UpdateProfile({ match }) {

    const [info, setInfo] = useState([]);
    const [caption, setCaption] = useState("");

    useEffect(() => {
        getInfo()
    }, []);

    const getInfo = async () => {
        const response = await fetch(`http://localhost:8000/api/posts/${match.params.id}`);
        const data = await response.json();
        setInfo(data)
    }

     const confirmEdit = async () => {
        let newCaption = document.querySelector(".editCaption").value
        const url = `http://localhost:8000/api/posts/${match.params.id}/`
        axios.put(url, {
            author: info.author,
            post_pic: info.post_pic,
            caption: newCaption
        })}


    return (
        <div className="updateForm">
            <h2 className="updateTitle">Update Post</h2>
            <hr />
        <Form>
        <Image src={info.post_pic} className="picPreview" rounded />
        {/* <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author:</Form.Label>
                <Form.Control className="editauthor" as="textarea" rows={3} defaultValue={info.author} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="post_pic">
                <Form.Label>Image:</Form.Label>
                <Form.Control className="editcaption" as="textarea" rows={3} defaultValue={info.post_pic} />
            </Form.Group> */}

            <Form.Group className="mb-3" controlId="caption">
                <Form.Label>Caption:</Form.Label>
                <Form.Control className="editCaption" as="textarea" rows={3} defaultValue={info.caption} 
                 onChange={(e) => setCaption(e.target.value)} />
            </Form.Group>
 
            <Link to='/myprofile'>
                <Button  className="postButton" variant="primary" type="submit"
             onClick={() => {
                confirmEdit()
            }}>
                Submit
            </Button>
            </Link>
        </Form>
        </div>
    )
}

export default UpdateProfile;