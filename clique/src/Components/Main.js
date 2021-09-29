import React from "react";
import { Link } from 'react-router-dom';

const Main = () => {


    return(
        <div className="mainPage">
            <p>This is the main page</p>
            <Link to='/register'><button className="mainButton1">Sign Up</button></Link>
            <button className="mainButton2">Log In</button>
        </div>
    )
}

export default Main;


