import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../Clique2Color.png';
import profile from '../profile.png';
import newpost from '../newpost.png';
import signout from '../signout.png';
import home from '../homebutton.png';

function NavBar() {

    return (
        <div>
            <Navbar className="navi">
                <Container>
                    <Navbar.Brand href="/home" className="logo">
                        <Link to='/home'>
                        <img
                            src={logo}
                            width="120"
                            height="70"
                            alt="Clique logo"
                        /></Link>
                    </Navbar.Brand>
                    <Nav.Link href='/home' className="navLinks"><img src={home} alt="homeButton" /></Nav.Link>
                    <Nav.Link href="/myprofile" className="navLinks"><img src={profile} alt="profilelogo" /></Nav.Link>
                    <Nav.Link href="/newpost" className="navLinks"><img src={newpost} alt="newpostlogo" /></Nav.Link>
                    <Nav.Link href='/' className="navLinks"><img src={signout} alt="signoutlogo" /></Nav.Link>
                 </Container>
             </Navbar>
        </div>
    )
}

export default NavBar;