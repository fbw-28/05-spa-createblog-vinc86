import React from "react";
import { Link} from "react-router-dom";
import "./allPosts.css";
const ShowPosts =(props)=>{
    const post = props.post.map(post=>{
        return (
        <div className ="post">
            <h2>{post.username} says: </h2>
            <div className="post-content">
                <h3>{post.title}</h3>
                <p>{post.content}</p>
            </div>
        </div>
        ) 
    })
    const noPost =  <p className="no-post">Sorry! No posts to show! :/ <button className="create-btn"><Link to="/create-post" >Create a new post</Link></button></p>
     return(
    <section className ="post-section">
        <h2 style={{marginLeft:"50px"}}>See all posts Here</h2>
        {props.isPost===true? post : noPost}
    </section>
     )
    
}
export default ShowPosts;