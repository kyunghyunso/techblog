import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

import Header from './components/layout/Header'

import './App.css';

function App() {
  return (
    <Router>
        <Header />
        <div className="container">
          <Switch>
              <Route exact path="/" component={BlogViewer} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/blog/viewer" component={BlogViewer} />
              <PrivateRoute exact path="/blog/writer" component={BlogWriter} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
