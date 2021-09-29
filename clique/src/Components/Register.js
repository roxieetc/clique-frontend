import React from "react";
import { Form, Button } from 'react-bootstrap';

function Register() {

    return(
        <div>
            
            <Form className="registerForm">
            <h2 className="makeNewUser">Register New User</h2>
            <hr />
                <Form.Group className="mb-3" controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter a username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter a password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formProfilePic">
                    <Form.Label>Profile Pic</Form.Label>
                    <Form.Control type="text" placeholder="Image URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formUserBio">
                    <Form.Label>User Bio</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter a short bio...." />
                </Form.Group>
                
                <Button className="registerButton" variant="primary" type="submit">
                    Register 
                </Button>
            </Form>
        </div>
    )
}

export default Register;