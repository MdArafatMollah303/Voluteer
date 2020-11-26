import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import AddEvent from './Component/AddEvent/Addevent';
import AddEvent from './Component/AddEvent/AddEvent';
import Admin from './Component/Admin/Admin';
import Blog from './Component/Blog/Blog';
import Donation from './Component/Donation/Donation';
import Header from './Component/Header/Header';
import HeroArea from './Component/HeroArea/HeroArea';
//import Login from './Component/Login/Login';
import Login from './Component/Login/firebaseConfig';
//import NotFound from './Component/NotFound/NotFound';
import NotFound from './Component/Notfound/NotFound';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import RegEvent from './Component/RegEvent/RegEvent';
import Register from './Component/Register/Register';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({
      name : '',
      email : '',
      date: '',
      description:'',
      img:''
  });
  return (
    <UserContext.Provider value={[loggedInUser , setLoggedInUser]}>
      <Router>
        <Switch>
            <Route exact path='/'>
                <HeroArea></HeroArea>
            </Route>
            <Route path='/home'>
                <HeroArea></HeroArea>
            </Route>
            <Route path='/login'>
                <Login />
            </Route>
            <Route path='/RegEvent'>
                <RegEvent />
            </Route>
            <PrivateRoute path='/register/:key'>
                <Register></Register>
            </PrivateRoute>
            <Route path='/register'>
                <Login />
            </Route>
            <Route path='/blog'>
                <Blog />
            </Route>
            <Route path='/events'>
                <RegEvent />
            </Route>
            <Route path='/donation' >
                <Donation />
            </Route>
            <Route path='/admin' >
                <Admin />
            </Route>
            <Route path='/addEvent' >
                <AddEvent />
            </Route>
            <Route path='*' >
                <NotFound />
            </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;
