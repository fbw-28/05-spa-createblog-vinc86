import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./singlePost.css";
class Post extends Component{
    state={
        username: '',
        title: '',
        content: '',
        post:{}
    }

    setUsername=(e)=>{
        e.preventDefault();
        this.setState({username: e.target.value})
    }
    setTitle=(e)=>{
        e.preventDefault();
        this.setState({title: e.target.value})
    }
    setContent=(e)=>{
        e.preventDefault();
        this.setState({content: e.target.value})
    }

    savePost =(e)=>{
        e.preventDefault();
        this.setState({post:{
            username: this.state.username,
            title: this.state.title,
            content: this.state.content
        }})
    }
    render(){
        return(
            <section className="post-section">
                <form >
                <h2>Create a Post!</h2>
                    <div className="form-container">
                    <div className="form-input">   
                        <label htmlFor="username">Username:</label>
                        <input onChange={this.setUsername} type="text" id="username"/>
                    </div>
                    <div className="form-input"> 
                        <label htmlFor="title">Title:</label>
                        <input onChange={this.setTitle} type="text" id="title"/>
                    </div>
                    <div className="form-input"> 
                        <label htmlFor="content">Content:</label>
                        <input onChange={this.setContent} type="text" id="content"/>
                    </div>
                    <button onClick={this.savePost} type="submit" className ="create-btn">
                        <Link to={{pathname:"/show-posts", createdPost: this.state.post }}>Create a post</Link></button>
                    </div>
                </form>
            </section>
        )
    }
}
export default Post