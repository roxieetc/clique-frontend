import React from 'react';
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from '../cliquelogo.png';
import profile from '../profile.png';
import newpost from '../newpost.png';
import signout from '../signout.png';

function NavBar() {

    return (
        <div>
            <Navbar className="navi">
                <Container>
                    <Navbar.Brand href="/home" className="logo">
                        <Link to='/home'>
                        <img
                            src={logo}
                            width="100"
                            height="50"
                            alt="Clique logo"
                        /></Link>
                    </Navbar.Brand>
                    <Nav.Link href="/myprofile" className="navLinks"><img src={profile} alt="profilelogo" /></Nav.Link>
                    <Nav.Link href="/newpost" className="navLinks"><img src={newpost} alt="newpostlogo" /></Nav.Link>
                    <Nav.Link href='/' className="navLinks"><img src={signout} alt="signoutlogo" /></Nav.Link>
                 </Container>
             </Navbar>
        </div>
    )
}

export default NavBar;