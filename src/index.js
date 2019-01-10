import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, NavLink, Switch, Redirect} from 'react-router-dom'


 //COMPONENTS
import Home from './components/home';
import Posts from './components/post';
import Profiles from './components/profiles';
import PostsItem from './components/post_item';
import Life from './components/lifecycles';
import Condit from './components/condit';
import User from './components/user';
import Layout from './Layout/layout'



//ronaldo.com/post
//ronaldo.com/profiles/post

const App = () =>{
  return (
    <BrowserRouter>
      <div>
        <header>
           <div>
            <NavLink to ="/"> Home </NavLink>
          </div>
          <NavLink
            to ="/post"
            activeStyle = {{color:'red'}}
            activeClassName ="selected"
          > Posts </NavLink>
          <NavLink to ={{
            pathname: '/profiles',
          }}> Profiles </NavLink>
          <NavLink to ="/lifecycles"> Life </NavLink>
          <NavLink to ="/condit"> Condit </NavLink>
          <NavLink to ="/user"> User </NavLink>
        </header>
          <Layout>
            <Switch>
            <Redirect from ="/profiles" to="/"/>
              <Route path="/post/:id/:username" component = {PostsItem}/>
              <Route path="/profiles" component = {Profiles}/>
              <Route path="/post"  component = {Posts}/>
              <Route path="/lifecycles"  component = {Life}/>
              <Route path="/condit"  component = {Condit}/>
              <Route path="/user"  component = {User}/>
              <Route path="/" exact component = {Home}/>
              <Route render = {() => <h3>ooopss 404</h3>}/>
            </Switch>
          </Layout>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
