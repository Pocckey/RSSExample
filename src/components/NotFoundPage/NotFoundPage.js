import React from 'react';
import {Link} from 'react-router';
// import './not-found-page.scss';

// Since this component is simple and static, there's no parent container for it.
const NotFoundPage = () => {
  return (
    <div>
      <h2 className="alt-header">404 - Page Not Found</h2>
    </div>
  );
};

export default NotFoundPage;
