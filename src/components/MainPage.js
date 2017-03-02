import React from 'react';
import Headline from './Headline';
import AddressForm from './AddressForm';
import Display from './Display';

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      error: null
    }
  }

  handleLocation = (option) => {
    if (option === "error") {
      this.setState({
        location: {},
        error: "Either that address is wrong, or you're SOL for restaurants that match those requirements."
      })
    } else {
      this.setState({
        location: option,
        error: null
      })
    }
  }

  render() {
    const location = this.state.location;
    const error = this.state.error;
    return (
      <div className="wrap">
        <section className="logo">
          <h1>IDCWDYW<span className="question">?</span></h1>
        </section>
        <Headline />
        <section className="main">
          <p>Pressure's off. This randomly picks one open restaurant near you, so you don't have to use your brain AT ALL 😏</p>  
          <AddressForm updateLocation={this.handleLocation} />
          { error && <p ref="errorMsg" className="error">{this.state.error}</p> }
          { location.id && <Display {...this.state} /> }
        </section>
      </div>
    )
  }
}

export default MainPage;