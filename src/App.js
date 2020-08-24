import React, {Component} from "react"
import Nav from "./components/Navbar"
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ShowPosts from "./components/ShowAllPosts.jsx";
import Post from "./components/ShowSinglePost.jsx";
import Home from "./components/Home.jsx"
export default class App extends Component {
    render() {
      return (
        <div className="App">
          <BrowserRouter>
          <Nav/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-post" component={Post} />
            <Route path="/show-posts" component={ShowPosts} />
          </Switch>
          </BrowserRouter>
        </div>
      );
    }
  }