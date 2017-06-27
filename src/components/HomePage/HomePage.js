import React from 'react';
import {Link} from 'react-router';
// import './about-page.scss';

// Since this component is simple and static, there's no parent container for it.
class HomePage extends React.Component {
  render(){
    return (
      <div className="homePage">
          <h2 className="alt-header">Home</h2>
      </div>
    );
  }
}

export default HomePage;
