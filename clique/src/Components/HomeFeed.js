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
                        <Card style={{ width: '25rem'}} className="singlePost">
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
            })}
        </div>
    );
}

export default HomeFeed;