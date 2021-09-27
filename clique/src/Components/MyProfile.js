import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';

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


    let profileFeed = posts.map((item) => {
        return(
            <Col sm={4}>
                <Card style={{ width: "20rem", margin: "0, auto"}}>
                        <Card.Img variant="top" src={item.post_pic} />
                </Card>
            </Col>
        )
    })

    let profileInfo = profiles.map((item) => {
        return(
                <Container className="profileInfo">
                    <Image className="profilePic" src={item.profile_pic} roundedCircle />
                    {item.username}
                    {item.bio}
                </Container>
        
            )
    })

    return(
        
        <div className="profileFeed">
                {profileInfo}
            <Row>    
                {profileFeed}
            </Row>
        </div>

        );
}

export default HomeFeed;                                                                                                                                                                                                