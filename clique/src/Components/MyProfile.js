import React, { useEffect, useState } from "react";
import { Card, Container, Col, Row } from 'react-bootstrap';

function HomeFeed() {
    const profilesUrl = "http://localhost:8000/api/profiles/"
    const [profiles, setProfiles] = useState([]);

    const fetchProfiles = async () => {
        const response = await fetch(profilesUrl);
        const json = await response.json();
        setProfiles(json)
    }

   

    const postUrl = "http://localhost:8000/api/posts/"
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch(postUrl);
        const json = await response.json();
        setPosts(json)
    }

    useEffect(() => {
        fetchProfiles()
        fetchPosts()
    }, []);


    return(
        <div className="myProfile">
            {profiles.map((profile) => {
                const {username, profile_pic, bio} = profile

                return (

                    <div className="profile">
                        <Card style={{ width: '25rem'}} className="profileCard">
                            <Card.Img className="profilePic" variant="top" src={profile_pic} width="200" height="200"/>
                            <Card.Title><strong>{username}</strong></Card.Title>
                            <Card.Body className="myBio">
                                <Card.Text>
                                {bio}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                    </div>

                )
            })}

            {posts.map((myposts) => {
                const {post_pic} = myposts

                return (
                    <div className="profileFeed">
                        <Container>
                            <Row>
                                <Col><img src={post_pic} className="feedPics" alt="feed pic"/></Col>
                            </Row>
                        </Container>
                    </div>
                )
            })}
        </div>
    );
}

export default HomeFeed;                                                                                                                                                                                                   