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
        setInfo(data)
    }

    const deletePost = async () => {
        const url = `http://localhost:8000/api/posts/${match.params.id}`
        axios.delete(url);
    }

    const getComment = async () => {
        const response = await fetch(`http://localhost:8000/api/comments/`);
        const data = await response.json();
        setComment(data)
    }

    useEffect(() => {
        getInfo()
        getComment()
    }, []);

    // console.log(comment.map((feed) => { return (feed.post)}))                Will  pull all comments' post values
    // console.log(info.id)                                                     Will pull the post id that is being matched in the parameter.

    let theseComments = [];
    for(let i = 0; i < comment.length; i++) {
        if (comment[i].post === info.id) {
            theseComments.push(comment[i]);
        }
    }

        let postComments = theseComments.map((feed) => {
            const {author, body, created} = feed

            return (
                <div>
                    <Card.Text className="commentSection">
                        <strong>{author}</strong> {body} <br /><span className="date">{created}</span>
                    </Card.Text>
                </div>
            )
        })

        return (
            <div className="detailCard">
                <Card style={{ width: '35.1rem'}} className="detailPost">
                <Card.Title className="detailTitle"><strong>{info.author}</strong></Card.Title>
                    <Card.Img className="detailImage" variant="top" src={info.post_pic} />
                    <Card.Body className="detailInfo">
                        <Card.Text>
                        <strong>{info.author} </strong> {info.caption} <br /><span className="date">{info.created}</span>
                        </Card.Text>
                        {postComments}
                    </Card.Body>
                </Card>


                <Link to={`comment/${info.id}`}><button className="editButton">Comment</button></Link>
                <Link to={`editpost/${info.id}`}><button className="editButton">Edit</button></Link>
                <Link to='/myprofile'>
                    <button className="deleteButton" 
                onClick={() => {
                deletePost()
                getInfo()}}>Delete</button>
                
                </Link>
            
            </div>
        )}

export default PostInfo;