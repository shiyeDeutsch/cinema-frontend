
import axios from 'axios'
import { useState } from 'react';
import LoginComp from './login';
import MoviesComp from './movies';
import UsersComp from './users'
import NavbarComp from './navbar'
import HomePageComp from'./homePage'
import  SubscriptionsComp from'./subscriptions'

import { Link, Switch, Route } from 'react-router-dom'
function App(props) {
  const [data, setData] = useState([])

  const next = (parm) => {
    props.history.push(parm)

  }
  return (
    <div >
     
      <Switch>
        <Route exact path="/movies" component={MoviesComp} />
        <Route exact path="/users" component={UsersComp} />
        <Route exact path="/login" component={LoginComp} />
        <Route exact path="/homePage" component={HomePageComp} />
        <Route exact path="/homePage" component={HomePageComp} />
        <Route exact path="/subscriptions" component={SubscriptionsComp} />
      </Switch>

    </div>
  );
}

export default App;
