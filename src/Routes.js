import React from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Contact from './components/Contact'
import Compose from './components/Compose';
import Signup from './components/User/Signup';
import Signin from './components/User/Signin';
import PrivateRoute from './components/Auth/PrivateRoutes';
import Dashboard from './components/User/Dashboard';
import Post from './components/Post';
import ManagePost from './components/User/ManagePosts';
import UserBlog from './components/User/UserBlogs';
import UpadePost from './components/User/UpdatePost';

const Routes = () => {
    return ( 
        <Router>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/about" exact component={About}></Route>
                <Route path="/contact" exact component={Contact}></Route>
                <Route path="/signup" exact component={Signup}></Route>
                <Route path="/signin" exact component={Signin}></Route>
                <Route path="/post/:postId" exact component={Post}></Route>
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} ></PrivateRoute>                
                <PrivateRoute path="/user/compose" exact component={Compose} ></PrivateRoute>                
                <PrivateRoute path="/user/posts/manage" exact component={ManagePost} ></PrivateRoute>                
                <PrivateRoute path="/user/blogs" exact component={UserBlog} ></PrivateRoute>               
                <PrivateRoute path="/user/post/update/:postId" exact component={UpadePost} ></PrivateRoute>               
            </Switch>
        </Router>
     );
}
 
export default Routes;