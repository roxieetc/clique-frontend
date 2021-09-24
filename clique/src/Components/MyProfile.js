import React, { useEffect, useState } from "react";
import { Card } from 'react-bootstrap';

function HomeFeed() {
    const profilesUrl = "http://localhost:8000/api/profiles/"
    const [profiles, setProfiles] = useState([]);

    const fetchProfiles = async () => {
        const response = await fetch(profilesUrl);
        const json = await response.json();
        setProfiles(json)
    }

    useEffect(() => {
        fetchProfiles()
    }, []);

    return(
        <div className="postFeed">
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
        </div>
    );
}

export default HomeFeed;