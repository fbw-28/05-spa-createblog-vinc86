import React from "react";
import {Link} from "react-router-dom";
import "./singlePost.css";
const Post=({setUser, setTitle, setContent, savePost})=>{
    
        return(
            <section className="post-section">
                <form onSubmit={savePost}>
                <h2>Create a Post!</h2>
                    <div className="form-container">
                    <div className="form-input">   
                        <label htmlFor="username">Username:</label>
                        <input onChange={setUser} type="text" id="username"/>
                    </div>
                    <div className="form-input"> 
                        <label htmlFor="title">Title:</label>
                        <input onChange={setTitle} type="text" id="title"/>
                    </div>
                    <div className="form-input"> 
                        <label htmlFor="content">Content:</label>
                        <input onChange={setContent} type="text" id="content"/>
                    </div>
                    <button type="submit" className ="create-btn">
                        Save Post</button>
                    </div>
                </form>
            </section>
        )
}
export default Post