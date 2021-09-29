import React from "react";
import { Link } from 'react-router-dom';
import BigLogo from '../CliqueColorBig.png'

const Main = () => {


    return(
        <div className="mainPage">
            <h2>Welcome to</h2>
            <img src={BigLogo} className="biglogo" alt="clique logo big" />
            <br />
            <Link to='/register'><button className="mainButton1">Sign Up</button></Link>
            <button className="mainButton2">Log In</button>
        </div>
    )
}

export default Main;


