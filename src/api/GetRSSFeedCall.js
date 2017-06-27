import superagent from 'superagent';
import axios from 'axios';
// import Feed from 'rss-to-json';
// import * as RSSParse from '../../node_modules/rss-parser/dist/rss-parser.js';

const GetRSSFeedCall = {
  //https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=tech&output=rss
  //https://www.reddit.com/r/reactjs.json
  httpRequest(link){
    return superagent.get(link)
    .set('Content-Type', 'application/json')
    .then(response =>{
        if(response.status >= 200 && response.status <=300){
          return response.text;
        } else {
          // console.log(response.status);
          const error = new Error(response.statusText);
          throw error;
        }
      })
      .catch(error =>{
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log(error);
      // Something happened in setting up the request that triggered an Error
          if(error.message){
            console.log('Error', error.message);
          }
        }
        throw error;
      });
  },
  getRSSFeedJSON(link){
    return new Promise((resolve, reject)=>{
      console.log(link);
      return axios.get(link)
        .then((response) =>{
          if(response.status >= 200 && response.status <=300){
            resolve(response.data);
          } else {
            console.log(response.status);
            const error = new Error(response.statusText);
            throw error;
          }
        })
        .catch(error =>{
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error);
        // Something happened in setting up the request that triggered an Error
            if(error.message){
              console.log('Error', error.message);
            }
          }
          reject(error);
          throw error;
        });
      });
  }
};
export default GetRSSFeedCall;
