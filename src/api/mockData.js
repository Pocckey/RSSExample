import delay from './delay';
import * as RSSFeedObj from './mockFeedData';

const rssToJsonLink = [
  {
    link: 'https://api.rss2json.com/v1/api.json?rss_url='
  }
];

const feed = [
  {
    title: 'twitter',
    description: 'testing feed',
    id: 123
  },
  {
    title: 'google News',
    description: 'testing google news',
    id: 124,
    publicationDate: '26-4-2017:'
  }
];

const feedLink = [
  {
    topic: 'w',
    source: 'news.google.com',
    link: 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=w&output=rss'
  },
  {
    topic: 'tech',
    source: 'news.google.com',
    link: 'https://news.google.com/news?cf=all&hl=en&pz=1&ned=ca&topic=tech&output=rss'
  },
  {
    topic: 'docker',
    source: 'blog.docker.com',
    link: 'https://blog.docker.com/feed/'
  }
];

class mockDataAPI{
  static getFeed(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log('getFeed');
        resolve(Object.assign([], RSSFeedObj.RSSFeed));
      }, delay);
    })
    .catch(error=>{
      console.log(error);
      throw error;
    });
  }
  static getFeedLink(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve(Object.assign([], feedLink));
      }, delay);
    })
    .catch(error=>{
      console.log(error);
      throw error;
    });
  }

  static saveFeed(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log('save Feed');
      },delay);
    })
    .catch(error=>{
      console.log(error);
      throw error;
    });
  }

  static getRSSFeedXML(){
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(
           Object.assign([], feed)
        );
      }, delay);
    })
    .catch(error=>{
      console.log(error);
      throw error;
    });
  }

  static deleteFeed(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log('deleteFeed');
      }, delay);
    })
    .catch(error=>{
      console.log(error);
      throw error;
    });
  }
}
export default mockDataAPI;
