import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from '@components/common/PrivateRoute'

import Header from '@components/layout/Header'

import Login from '@components/page/auth/login'
import About from '@components/page/about'
import BlogViewer from '@components/page/blog/view'
import BlogWriter from '@components/page/blog/write'

import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <div className="container">
          <Switch>
              <Route exact path="/" component={BlogViewer} />
              <Route exact path="/auth/login" component={Login} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog/view" component={BlogViewer} />
              <PrivateRoute exact path="/blog/write" component={BlogWriter} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
