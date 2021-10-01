import React, { useState, useEffect } from "react";
import { Form, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from "axios";

function MakeComment({ match }) {

    const [info, setInfo] = useState([]);
    const [comment, setComment] = useState("");

    useEffect(() => {
        getInfo()
    }, []);

    const getInfo = async () => {
        const response = await fetch(`http://localhost:8000/api/posts/${match.params.id}`);
        const data = await response.json();
        setInfo(data)
    }

    const postComment = async () => {
        let newUserComment = document.querySelector(".addUsername").value
        let newComment =  document.querySelector(".commentArea").value
        const url = `http://localhost:8000/api/comments/${match.params.id}/`
        axios.put(url, {
            post: info.id,
            author: newUserComment,
            body: newComment,
        })}

    return (
            <div className="commentForm">
            <h2 className="commentTitle">Leave a Comment!</h2>
            <hr />
        <Form>
        <Image src={info.post_pic} className="picPreview" rounded />
        <Form.Group className="mb-3" controlId="caption">
                <Form.Label>Username</Form.Label>
                <Form.Control className="addUsername" as="input" rows={3} placeholder="Enter username here" 
                 onChange={(e) => setComment(e.target.value)}></Form.Control>

                <Form.Label>Comment</Form.Label>
                <Form.Control className="commentArea" as="textarea" rows={3} placeholder="Enter a comment"
                 onChange={(e) => setComment(e.target.value)}></Form.Control>
            </Form.Group>
 
            {/* <Link to='/myprofile'> */}
                <Button  className="commentButton" variant="primary" type="submit"
                 onClick={() => {
                     postComment()
                 }}>
                Post Comment
            </Button>
            {/* </Link> */}
        </Form>
        </div>
    )
}

export default MakeComment;
