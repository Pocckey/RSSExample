import React from 'react';
import PropTypes from 'prop-types';
import FeedListRows from './FeedListRows';

const containerList = ({feed}, {index}) =>{
  //pass props to FeedListRows
  return(
    <table className="feedTable">
        {feed.map((feed, index) =>
          <FeedListRows key={index} feed={feed}/>
        )}
    </table>
  );
};

containerList.propTypes = {
  feed: PropTypes.array.isRequired
};

export default containerList;
