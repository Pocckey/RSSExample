import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import HomePage from './components/HomePage/HomePage';
import AboutPage from './components/AboutPage/AboutPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import FeedPage from './components/FeedPage/FeedPage';

// declare routes path
export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about" component={AboutPage}/>
    <Route path="feed" component={FeedPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
