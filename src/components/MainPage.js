import React from 'react';
import ReactDOM from 'react-dom';
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
    if (option === "error") {
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
    return categories ? categories.map((category, index) => <li key={index}><i className="material-icons">check_circle</i> {category.title}</li>) : null;
  }

  componentDidUpdate() {
    this.refs.display.scrollIntoView();
  }

  render() {
    let location = this.state.location;
    let error = this.state.error;
    console.log(location);
    return (
      <div className="wrap">
        <div className="logo">
          <h1>IDCWDYW<span className="question">?</span></h1>
        </div>
        <Explainer />
        <div className="main">
          <p>Pressure's off. This randomly picks one open restaurant within 2 miles of you, so you don't have to use your brain AT ALL 😏</p>  
          <AddressForm updateLocation={this.handleChange} />
          { error &&
            <p className="error">{this.state.error}</p>
          }
          { location.id && 
          <div className="display" ref="display">
            <h3 className="congrats">Congratulations, you're going to:</h3>
            <h3 className="name"><a target="_blank" href={location.url}>{location.name}</a></h3>
            <p className="address">{location.location.display_address[0]}, {location.location.display_address[1]}<br/>
              {location.location.display_address[2]}</p>
            <ul className="categories">{this.getCategories()}</ul>
            <div className="columns">
              <div className="left">
                <img className="restaurant-photo" src={location.image_url} alt={location.name}/>
              </div>
              <div className="right">
                <p>Google map</p>
              </div>
            </div>
          </div>
          }
        </div>
      </div>
    )
  }
}

export default MainPage;