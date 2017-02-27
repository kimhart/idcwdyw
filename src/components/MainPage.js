import React from 'react';
import Explainer from './Explainer';
import AddressForm from './AddressForm';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.getCategories = this.getCategories.bind(this);
    this.state = {
      location: {},
      error: null
    }
  }

  handleChange = (option) => {
    console.log(option);
    if (option === "Error") {
      this.setState({
        location: {},
        error: "Either that address is wrong, or you're currently in a wasteland."
      })
    } else {
      this.setState({
        location: option,
        error: null
      })
    }
  }

  getCategories = () => {
    let categories = this.state.location.categories;
    return categories ? categories.map((category, index) => <li key={index}>{category.title}</li>) : null;
  }

  render() {
    let location = this.state.location;
    let error = this.state.error;
    return (
      <div className="main">
        <Explainer />
        <AddressForm updateLocation={this.handleChange} />
        { error &&
          <p className="error">{this.state.error}</p>
        }
        { location.id && 
        <div className="display">
          <h2>Congratulations, you're going to:</h2>
          <h3>{location.name}</h3>
          <ul>{this.getCategories()}</ul>
        </div>
        }
      </div>
    )
  }
}

export default MainPage;