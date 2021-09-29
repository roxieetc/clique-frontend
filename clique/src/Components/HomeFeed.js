import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';

function HomeFeed() {
    const postsUrl = "http://localhost:8000/api/posts/"
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(postsUrl);
        const json = await response.json();
        setPosts(json)
    }

    useEffect(() => {
        fetchPosts()
    }, []);

    let homeFeed = posts.reverse().map((feed) => {
        const {post_pic, author, caption} = feed

        return (

            <div className="feedCards">
                <Card style={{ width: '35.1rem'}} className="singlePost">
                <Card.Title><strong>{author}</strong></Card.Title>
                    <Card.Img className="postImage" variant="top" src={post_pic} />
                    <Card.Body className="postInfo">
                        <Card.Text>
                        <strong>{author}:</strong> {caption}
                        </Card.Text>
                    </Card.Body>
                    </Card>
            </div>

        )
        })

    return(
        <div className="postFeed">
            {homeFeed}
        </div>
    );
}

export default HomeFeed;