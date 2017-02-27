import React from 'react';

class Explainer extends React.Component {

  render() {
    return (
      <div className="explainer">
        <h1>Are you indecisive af? <br/>
            Did someone just ask you where you want to eat?<br/>
            Did you say<br/> 
            <span>"I don't care, what do you want?"&trade;</span><br/>
            Is your significant other tired of your shit? <br/>
        </h1>
        <h2>Chill. This picks a random restaurant within a 1 mile radius of your location, so you don't have to use your brain AT ALL 🌈</h2>
        <p>PS this app is only for the truly lazy. If you want filters and options and all that jazz, go hangout on <a href="https://yelp.com">Yelp</a>.</p>
      </div>
    )
  }
}

export default Explainer;