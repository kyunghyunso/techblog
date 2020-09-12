import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import PrivateRoute from '@components/common/PrivateRoute'

import Header from '@components/layout/Header'

import Login from 'src/pages/auth/login'
import About from 'src/pages/about'
import BlogArticleList from 'src/pages/blog/list'
import BlogArticleView from 'src/pages/blog/view/[id]'
import BlogArticleWriter from 'src/pages/blog/write'
import BlogArticleEditor from 'src/pages/blog/edit/[id]'

function App() {
  return (
    <Router>
        <Header />
        <div className="container">
          <Switch>
              <Route exact path="/" component={BlogArticleList} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/about" component={About} />
              <Route exact path="/blog/list" component={BlogArticleList} />
              <Route exact path="/blog/view/:id" component={BlogArticleView} />
              <PrivateRoute exact path="/blog/write" component={BlogArticleWriter} />
              <PrivateRoute exact path="/blog/edit/:id" component={BlogArticleEditor} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
