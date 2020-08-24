import React from "react";
import "./allPosts.css";
const ShowPosts =(props)=>{
    console.log(props.location.createdPost);
        return(
            <section className ="post-section">
                <h2 style={{marginLeft:"50px"}}>See all posts Here</h2>
                {/* <p>{username} says: </p>
                <h2>{title}</h2>
                <p>{content}</p> */}
            </section>
        )
    
}
export default ShowPosts;