import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PostInfo({ match }) {

    const [info, setInfo] = useState([]);
    const [comment, setComment] = useState([]);

    const getInfo = async () => {
        const response = await fetch(`http://localhost:8000/api/posts/${match.params.id}`);
        const data = await response.json();
        console.log(data)
        setInfo(data)
    }

    const deletePost = async () => {
        const url = `http://localhost:8000/api/posts/${match.params.id}`
        axios.delete(url);
    }

    const getComment = async () => {
        const response = await fetch(`http://localhost:8000/api/comments/${match.params.id}/`);
        const data = await response.json();
        console.log(data)
        setComment(data)
    }

    useEffect(() => {
        getInfo()
        getComment()
    }, []);

        return (
            <div className="detailCard">
                <Card style={{ width: '35.1rem'}} className="detailPost">
                <Card.Title className="detailTitle"><strong>{info.author}</strong></Card.Title>
                    <Card.Img className="detailImage" variant="top" src={info.post_pic} />
                    <Card.Body className="detailInfo">
                        <Card.Text>
                        <strong>{info.author}:</strong> {info.caption} <br /><span className="date">{info.created}</span>
                        </Card.Text>
                    
                    <Card.Text className="commentSection">
                        <strong>{comment.author}:</strong> {comment.body} <br /><span className="date">{comment.created}</span>
                    </Card.Text>
                    </Card.Body>
                </Card>


                <Link to={`editpost/${info.id}`}><button className="editButton">Edit</button></Link>
                <Link to='/myprofile'><button className="deleteButton" onClick={() => {
                deletePost()
                getInfo()
            }}>Delete</button></Link>
            </div>
        )}
   


export default PostInfo;