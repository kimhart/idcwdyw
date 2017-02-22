import React from 'react';
import Explainer from './Explainer';
import AddressForm from './AddressForm';

class MainPage extends React.Component {

  constructor() {
    super();
    this.state = {
      location: {}
    }
  }

  render() {
    return (
      <div className="main">
        <Explainer />
        <AddressForm />
      </div>
    )
  }
}

export default MainPage;