import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

function PostInfo({ match }) {

    const [info, setInfo] = useState([]);
    
    useEffect(() => {
        getInfo()
    }, []);

    const getInfo = async () => {
        const response = await fetch(`http://localhost:8000/api/posts/${match.params.id}`);
        const data = await response.json();
        console.log(data)
        setInfo(data)
    }

    console.log(info)
    if (!info) {
        return <h2>Loading</h2>
    } else {
        return (
            <div className="feedCards">
                <Card style={{ width: '35.1rem'}} className="singlePost">
                <Card.Title><strong>{info.author}</strong></Card.Title>
                    <Card.Img className="postImage" variant="top" src={info.post_pic} />
                    <Card.Body className="postInfo">
                        <Card.Text>
                        <strong>{info.author}:</strong> {info.caption} <br /><span className="date">{info.created}</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
        )}
   
}

export default PostInfo;