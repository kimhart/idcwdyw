import React from 'react';
import Explainer from './Explainer';
import AddressForm from './AddressForm';

class MainPage extends React.Component {

  constructor(props) {
    super(props);
    this.getCategories = this.getCategories.bind(this);
    this.getRestaurantImage = this.getRestaurantImage.bind(this);
    this.state = {
      location: {},
      error: null
    }
  }

  componentDidUpdate() {
    this.refs.display.scrollIntoViewIfNeeded({behavior: "smooth"});

    let latLng = {
      lat: this.state.location.coordinates.latitude,
      lng: this.state.location.coordinates.longitude
    }

    let map = new google.maps.Map(this.refs.map, {
      center: latLng,
      zoom: 16
    });

    let marker = new google.maps.Marker({
      position: latLng,
      map: map,
      title: this.state.location.name
    });
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


  getRestaurantImage = () => {
    let src = this.state.location.image_url;
    let style = { 
      background: `url('${src}') center center`,
      backgroundSize: 'cover'
    }
    return <div className="restaurant-photo" style={style}></div>
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
                {this.getRestaurantImage()}
              </div>
              <div className="right">
                <div className="map" ref="map"></div>
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