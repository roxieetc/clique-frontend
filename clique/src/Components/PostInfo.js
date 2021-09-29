import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';

function PostInfo({ match }) {

    const [info, setInfo] = useState([]);
    
    const getInfo = async () => {
        const response = await fetch(`http://localhost:8000/api/profiles/${match.params.id}`);
        const json = await response.json();
        setInfo(json)
    }

    useEffect(() => {
        getInfo()
    }, []);

    let postDeets = info.map((item) => {
        const {post_pic, author, post_caption} = item
        return (
            <div className="feedCards">
                <Card style={{ width: '35.1rem'}} className="singlePost">
                <Card.Title><strong>{author}</strong></Card.Title>
                    <Card.Img className="postImage" variant="top" src={post_pic} />
                    <Card.Body className="postInfo">
                        <Card.Text>
                        <strong>{author}:</strong> {post_caption}
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