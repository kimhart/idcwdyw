import React from 'react';

class Template extends React.Component {

  render() {
    return (
      <div className="page-wrap">
        { this.props.children }
      </div>
    );
  }
}

export default Template;
