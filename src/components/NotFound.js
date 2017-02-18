import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h2>Go <Link to="/">home</Link>, human. You're drunk.</h2>
      </div>
    )
  }
}

export default NotFound;