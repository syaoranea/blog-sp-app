import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './Pages/home';
import { Post } from './Pages/Post';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>    
        </Route>
        <Route path="/post/:slug">
          <Post/>
        </Route>
        <Route path="*">
          <Home/>
        </Route>
      </Switch>
    </Router>
    
  </React.StrictMode>,
)


