import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {
  render() {
    return (
      <div className="AppContainer container-fluid">
        <div className="col-md-2 dropdownContainer">
          <ul className="dropdown-menu nav nav-pills nav-stacked">
            <li><IndexLink to="/">Home</IndexLink></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/feed">Feed</Link></li>
          </ul>
        </div>
        {this.props.loading && <div className="loading" >loading</div>}
        <div className="col-md-10 contentContainer">
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    loading: state.ajaxCallsInProgress > 0
  };
}

App.propTypes = {
  children: PropTypes.element,
  loading: PropTypes.bool
};

export default connect(mapStateToProps)(App);
