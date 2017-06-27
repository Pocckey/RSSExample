import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as feedActions from '../../actions/feedActions';
import ContainerList from '../../components/FeedPage/FeedList/containerList';

let createHandlers = (dispatch) =>{
  // dispatch(feedActions.loadFeeds());
  dispatch(feedActions.loadFeeds());
};

class FeedList extends React.Component {
  constructor(props, context){
    super(props, context);
    this.handlers = createHandlers(this.props.dispatch);
  }

  clearLinks(feed){
    if(feed.length<=0){
      return;
    } else{
      for(let i =0; i< feed.length; i++){
        if(feed[i].link.split('url=')[1]){
          let newLink = feed[i].link.split('url=')[1];
          let newFeed = Object.assign([], feed[i].link = newLink);
          return newFeed;
        } else{
          return;
        }
      }
    }
  }

  render(){
    let {feed} = this.props;
    this.clearLinks(feed);
    return(
      <div className="feedlist">
        <ContainerList feed={feed}/>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps){
  return{
    feed: state.feed
  };
}

// used in OnClickSave
function mapDispatchToProps(dispatch){
  return{
    dispatch: dispatch,
    actions: bindActionCreators(feedActions,dispatch)
  };
}

// declare what props are required
FeedList.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  feed: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps) (FeedList);
