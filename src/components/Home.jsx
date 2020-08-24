import React from "react";
import {Link} from "react-router-dom";
import "./home.css"
const Home =()=>{
    return(
        <section className="home" >
            <div className="hero">
                <h1 className="cta-heading">Welcome to our blog site!</h1>
                <Link to="/show-posts"><button className="cta-btn">Discover</button></Link>
            </div>
        </section>
        )
    
}
export default Home;