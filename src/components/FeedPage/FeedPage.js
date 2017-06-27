import FeedList from '../../containers/FeedContainer/FeedList';
import ManageFeed from '../../containers/ManageFeedContainer/ManageFeed';
import React, {Component} from 'react';

class FeedPage extends React.Component {
  render(){
    return(
      <div className="FeedPageContainer">
        <h1>FeedPage</h1>
        <FeedList />
        <ManageFeed />
      </div>
    );
  }
}
export default FeedPage;
