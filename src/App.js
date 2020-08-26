import React, {Component} from "react"
import Nav from "./components/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ShowPosts from "./components/ShowAllPosts.jsx";
import Post from "./components/ShowSinglePost.jsx";
import Home from "./components/Home.jsx"
export default class App extends Component {
    state={
        username: '',
        title: '',
        content: '',
        isPost: false,
        post: []
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
        const newPost = {
          username: this.state.username,
          title: this.state.title,
          content: this.state.content,
          date: Date.now().toString
        }
        this.setState({
          isPost: true,
          post:[...this.state.post, newPost]
        })
        
    }
    render() {
      
      return (
        <div className="App">
          <BrowserRouter>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-post" render={()=><Post setUser={this.setUsername} setTitle={this.setTitle} setContent={this.setContent} savePost={this.savePost}/>} />
            <Route path="/show-posts" render={()=><ShowPosts post={this.state.post} isPost={this.state.isPost}/>} />
          </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }