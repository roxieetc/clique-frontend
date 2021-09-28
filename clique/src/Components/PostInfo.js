import React, {useState, useEffect} from "react";
import axios from "axios";

function PostInfo() {

    const [info, setInfo] = useState([])

    useEffect(() => {
        getPostInfo();
    }, []);

    const getPostInfo = async () => {

    }

    return(
        <h3>Post detail will go here!</h3>
    )
}

export default PostInfo;