import React from "react";
import { Link } from 'react-router-dom';
import BigLogo from '../Images/CliqueColorBig.png'

const Main = () => {


    return(
        <div className="mainPage">
            <h2>Welcome to</h2>
            <img src={BigLogo} className="biglogo" alt="clique logo big" />
            <br />
            <p className="welcomeText">A photo-sharing app for you and your friends to share adventures, memories, memes, and more.
            Invite your friends to your personal clique account to get started in your sharing experience.</p>
            <Link to='/register'><button className="mainButton1">Sign Up</button></Link>
        </div>
    )
}

export default Main;


