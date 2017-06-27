import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import { syncHistoryWithStore } from 'react-router-redux';

import Root from './containers/Root';
import configureStore from './store/configureStore';
import { loadFeeds } from './actions/feedActions';
import { loadRSSFeed } from './actions/ajaxRSSFeedAction';

import 'bootstrap/dist/css/bootstrap.css';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/main.scss';


const store = configureStore();

//call loadFeeds from action Feed, props will load globally if called here
// store.dispatch(loadFeeds());

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);


render(
  <AppContainer>
    <div className="routes">

      <Root store={store} history={history} />
    </div>
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./containers/Root', () => {
    const NewRoot = require('./containers/Root').default;
    render(
      <AppContainer>
        <div className="routes">
          <NewRoot store={store} history={history} />
        </div>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
