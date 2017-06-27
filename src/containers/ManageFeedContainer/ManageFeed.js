import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as feedActions from '../../actions/feedActions';
import * as ajaxRSSFeedAction from '../../actions/ajaxRSSFeedAction';
import * as decodeUnicodeAction from '../../actions/decodeUnicodeAction';
import axios from 'axios';
import FeedListRows from '../../components/FeedPage/FeedList/FeedListRows';
import placeHolderImg from '../../assets/news_icon.png';

class ManageFeed extends React.Component {
  constructor(props, context){
    super(props, context);
    this.state={
      name:{
        title: 'ManageFeed'
      },
      RSSFeedObj: {}
    };
    this.addNewFeed = this.addNewFeed.bind(this);
    this.decodeFeed = this.decodeFeed.bind(this);
  }

  // componentWillReceiveProps(){
  //  for testing requests on client side
  //   let self = this;
  //   //ajax call after page render example
  //   // let link = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fblog.docker.com%2Ffeed%2F';
  //   let link ="https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=w&output=rss";
  //   let request = axios.get(link)
  //     .then((response) =>{
  //       if(response.status >= 200 && response.status <=300){
  //         console.log(response.data);
  //         self.setState({
  //           newFeed: response.data
  //         });
  //       } else {
  //         console.log(response.status);
  //         const error = new Error(response.statusText);
  //         throw error;
  //       }
  //     })
  //     .catch(error =>{
  //       if (error.response) {
  //         console.log(error.response.data);
  //         console.log(error.response.status);
  //         console.log(error.response.headers);
  //       } else if (error.request) {
  //         console.log(error.request);
  //       } else {
  //         console.log(error);
  //         if(error.message){
  //           console.log('Error', error.message);
  //         }
  //       }
  //       throw error;
  //     });
  //     console.log(this.newFeed);
  // }

  FeedRow(RSSFeedObj, index){
    return (<div key={index}>{RSSFeedObj}</div>);
  }

  addNewFeed(){
    this.props.actions.loadRSSFeed().then(()=>{
      this.setState({
        RSSFeedObj: this.props.RSSFeedObj
      });
    });
  }

  clearLinks(feed){
    if(!feed.link){
      return;
    } else{
        if(feed.link.split('url=')[1]){
          let newLink = feed.link.split('url=')[1];
          let newFeed = Object.assign({}, feed, { link: newLink });
          return newFeed;
        } else{
          return;
        }
    }
  }

  decodeFeed(obj){
    if(!obj.description){
      console.log('no description');
      return;
    } else{
      // create temporary html for the feed
      let tempHTML = document.createElement('feed');
      tempHTML.innerHTML = obj.description;
      let feedImg;
      if(tempHTML.getElementsByTagName('img')[0].src){
        feedImg = tempHTML.getElementsByTagName('img')[0].src;
      } else {
        feedImg = placeHolderImg;
      }
      let tempFeed = obj.description.replace(/<(?:.|\n)[^>]*>?/gm, '').trim().split('\n');
      let decodedFeed = new Array();
      for (let i =0; i<tempFeed.length; i++){
        if(tempFeed[i]){
          decodedFeed.push(tempFeed[i]);
        }
      }
      return Object.assign({}, obj, {author: decodedFeed[0]}, {description: decodedFeed[1]}, {thumbnail: feedImg});
    }
  }

  // Redux function
  // decodeFeed(obj){
  //   return new Promise((resolve, reject)=>{
  //     if(!obj.description){
  //       reject('decode error');
  //     } else{
  //       return resolve(this.props.decodeActions.decodeUnicode(obj));
  //       // this.props.decodeActions.decodeUnicode(obj).then((decodedFeed)=> {
  //         // console.log(newObj);
  //         // return Object.assign({}, obj,{description: decodedFeed.description});
  //       // });
  //     }
  //   });
  // }

  returnNewFeed(feedObj, key){
    let newFeedObj = this.clearLinks(feedObj.items[key]);
    // return newFeedObj
    let decodeObj = this.decodeFeed(newFeedObj);
    return decodeObj;

    // Redux function
    // console.log(newFeedObj);
    // let feedList = [];
    // return this.decodeFeed(newFeedObj);
  }

  render(){
    console.log( Object.keys(this.state.RSSFeedObj)>0);
      return(
        <div>
          <button type="submit" onClick={this.addNewFeed}>refresh Feed</button>
          <table className="manageFeed">
            {
              Object.keys(this.state.RSSFeedObj).length>0 &&
              Object.keys(this.state.RSSFeedObj.items).map(key=>{
                return (<FeedListRows key={key} feed={this.returnNewFeed(this.state.RSSFeedObj, key)}/>);
              })
            }
          </table>
        </div>
      );
  }
}

//only called when there's an update to the object
//use reselect if there is expensive calls
function mapStateToProps(state, ownProps){
  return{
    RSSFeedObj: state.RSSFeedObj
  };
}

//what action to provide for the component
//actions are under this.props
function mapDispatchToProps(dispatch){
  return{
    dispatch: dispatch,
    actions: bindActionCreators(ajaxRSSFeedAction,dispatch),
    decodeActions: bindActionCreators(decodeUnicodeAction, dispatch)
  };
}

// declare what props are required
ManageFeed.propTypes = {
  actions: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  RSSFeedObj: PropTypes.object.isRequired,
  decodedFeed: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps) (ManageFeed);
