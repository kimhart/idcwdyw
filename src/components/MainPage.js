import React from 'react';
import ReactDOM from 'react-dom';
import Explainer from './Explainer';

class MainPage extends React.Component {
  render() {
    return (
      <div className="main">
        <Explainer />
      </div>
    )
  }
}

export default MainPage;