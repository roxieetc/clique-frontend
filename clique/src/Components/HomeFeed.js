import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';

function HomeFeed() {
    const postsUrl = "http://localhost:8000/api/posts/"
    const [posts, setPosts] = useState([]);

    const fetchData = async () => {
        const response = await fetch(postsUrl);
        const json = await response.json();
        setPosts(json)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return(
        <div className="postFeed">
            {posts.map((feed) => {
                const {post_pic, author, post_caption} = feed

                return (

                    <div className="feedCards">
                        <Card style={{ width: '18rem'}}>
                            <Card.Img className="postImage" variant="top" src={post_pic} />
                            <Card.Body className="postInfo">
                                <Card.Title>{author}</Card.Title>
                                <Card.Text>
                                {post_caption}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </div>

                )
            })}
        </div>
    );
}

export default HomeFeed;