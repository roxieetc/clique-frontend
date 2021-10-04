import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import axios from "axios";

function Register() {

    const [username, setUsername] = useState("")
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [bio, setBio] = useState("")
    const [profile_pic, setProfilePic] = useState("")

    const newUser = async () => {
        const url = "http://localhost:8000/api/profiles/"
        axios.post(url, {
            username,
            first_name,
            last_name,
            bio,
            profile_pic
        })
        .then((res) => {
            console.log("Posted!")
        })
    }

    const storeUsername = (e) => {
        setUsername(e.target.value)
    }

    const storeFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const storeLastName = (e) => {
        setLastName(e.target.value)
    }

    const storeBio = (e) => {
        setBio(e.target.value)
    }

    const storeProfilePic = (e) => {
        setProfilePic(e.target.value)
    }


    return(
        <div>
            
            <Form className="registerForm">
            <h2 className="makeNewUser">Register New User</h2>
            <hr />
                <Form.Group className="mb-3" controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter a username" onChange={storeUsername} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your first name" onChange={storeFirstName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="last_name">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your last name" onChange={storeLastName} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="bio">
                    <Form.Label>User Bio</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter a short bio...." onChange={storeBio} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="profile_pic">
                    <Form.Label>Profile Pic</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Profile pic URL" onChange={storeProfilePic} />
                </Form.Group>
                
                <Link to="/home">
                <Button className="registerButton" variant="primary" type="submit" onClick={newUser}>
                    Register 
                </Button>
                </Link>
            </Form>
        </div>
    )
}

export default Register;