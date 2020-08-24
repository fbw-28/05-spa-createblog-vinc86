import React from "react";
import {Link} from "react-router-dom";
import "./navbar.css";

const Nav=()=>{
    return(
        <nav>
            <ul>
                
                <Link to ="/"><li>Home</li></Link>
                <Link to="/create-post"><li>Create A Post</li></Link>
                <Link to="/show-posts"><li>Show Current Posts</li></Link>
                
            </ul>
        </nav>
    )
}
export default Nav;
