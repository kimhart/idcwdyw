import React from 'react';

class Explainer extends React.Component {

  render() {
    return (
      <div className="explainer">
        <h1>Are you indecisive af? <br/>
            Have trouble picking a restaurant? <br/>
            Is your significant other tired of your shit? <br/>
        </h1>
        <h2>Chill. We'll find one. (You can take credit, though.)</h2>
        <p>Type in your address and we'll randomly select a restaurant within 1 mile of you.</p>
      </div>
    )
  }
}

export default Explainer;