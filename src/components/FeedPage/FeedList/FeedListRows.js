import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router';

const feedListRows = ({feed}) =>{
  return(
    <tbody className='feedRow'>
        <tr><td>{ feed.thumbnail &&<img className='feedThumbnail' src={feed.thumbnail} />}</td></tr>
        <tr className='feedTitle'><td>{feed.title}</td></tr>
        <tr className='feedCategory'><td>{'category: ' +feed.category}</td></tr>
        <tr className='feedDescription'><td>{feed.description}</td></tr>
        <tr className='author'><td>{'-' + feed.author}</td></tr>
        <tr className='feedLink'><td><a href={feed.link}>{feed.link}</a></td></tr>
        <tr className='feedPubDate'><td>{feed.pubDate}</td></tr>
    </tbody>
  );
};

feedListRows.propTypes ={
  feed: PropTypes.object.isRequired
};

export default feedListRows;
