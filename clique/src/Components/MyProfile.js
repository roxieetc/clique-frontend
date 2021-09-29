import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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


    let profileFeed = posts.reverse().map((item) => {
        return(
            <Col sm={3}>
                <Card style={{ width: "20rem"}}>
                <Link className="thisPost" to={`/${item.id}`}><Card.Img variant="top" src={item.post_pic} /></Link>
                </Card>
            </Col>
        )
    })

    let profileInfo = profiles.map((item) => {
        return(
                <Container className="profileInfo">
                    <Image className="profilePic" src={item.profile_pic} roundedCircle />
                    <div className="username">{item.username}</div>
                    <div className="realName">({item.first_name} {item.last_name})</div>
                    <div className="myBio">{item.bio}</div>
                </Container>
        
            )
    })

    return(
        
        <div className="profileFeed">
           
            <div className="myInfo">
                {profileInfo}
            </div>
            <hr />
            <div className="myPosts">
                <Row>    
                    {profileFeed}
                </Row>
            </div>
       
        </div>

        );
}

export default HomeFeed;                                                                                                                                                                                                