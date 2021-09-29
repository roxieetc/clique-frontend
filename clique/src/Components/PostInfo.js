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
        setInfo(data.id)
        console.log(data.id)
    }

    let postDeets = info.map((item) => {
        const {post_pic, author, caption, created} = item
        return (
            <div className="feedCards">
                <Card style={{ width: '35.1rem'}} className="singlePost">
                <Card.Title><strong>{author}</strong></Card.Title>
                    <Card.Img className="postImage" variant="top" src={post_pic} />
                    <Card.Body className="postInfo">
                        <Card.Text>
                        <strong>{author}:</strong> {caption} <br /><span className="date">{created}</span>
                        </Card.Text>
                    </Card.Body>
                    </Card>
            </div>
        )
    })

    return(
        <div>
        {postDeets}
        </div>
    )
}

export default PostInfo;