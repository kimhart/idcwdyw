import React from 'react';
import scrollIntoViewIfNeeded from 'scroll-into-view-if-needed';

class Display extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: this.props.location,
      error: this.props.error
    }
  }

  componentDidMount() {
      const coords = this.state.location.coordinates;
      const latLng = {lat: coords.latitude, lng: coords.longitude};
      const map = new google.maps.Map(this.refs.map, {
        center: latLng,
        zoom: 16
      });
      const marker = new google.maps.Marker({
        position: latLng,
        title: this.state.location.name,
        animation: google.maps.Animation.DROP
      });
      marker.setMap(map);
      scrollIntoViewIfNeeded(this.refs.display, false, {
      duration: 130
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.id !== nextProps.location.id) {
      this.setState({
        location: nextProps.location
      });
      const coords = nextProps.location.coordinates;
      const latLng = {lat: coords.latitude, lng: coords.longitude};
      const map = new google.maps.Map(this.refs.map, {
        center: latLng,
        zoom: 16
      });
      const marker = new google.maps.Marker({
        position: latLng,
        title: nextProps.location.name,
        animation: google.maps.Animation.DROP
      });
      marker.setMap(map);
      scrollIntoViewIfNeeded(this.refs.display, false, { duration: 130 });
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

  getCategories = () => {
    const categories = this.state.location.categories;
    return categories ? categories.map((category, index) => <li key={index}><i className="material-icons">check_circle</i> {category.title}</li>) : null;
  }

  getRestaurantImage = () => {
    const src = this.state.location.image_url;
    const style = { 
      background: `url('${src}') center center`,
      backgroundSize: 'cover'
    }
    return <div className="restaurant-photo" style={style}></div>
  }

  // renderMap = () => {
  //   const coords = this.state.location.coordinates;
  //   const latLng = {lat: coords.latitude, lng: coords.longitude};
  //   const map = new google.maps.Map(this.refs.map, {
  //     center: latLng,
  //     zoom: 16
  //   });
  //   console.log(map)
  //   const marker = new google.maps.Marker({
  //     position: latLng,
  //     title: this.state.location.name,
  //     animation: google.maps.Animation.DROP
  //   });
  //   marker.setMap(map);
  // }

  render() {
    const location = this.state.location;
    return (
      <div className="display" ref="display">
        <h3 className="congrats">Congratulations, you're going to:</h3>
        <h3 className="name"><a target="_blank" href={location.url}>{location.name}</a></h3>
        <h3 className="price">{location.price}</h3>
        <p className="address"><a target="_blank" href={`http://maps.google.com/maps?ll=${location.coordinates.latitude},${location.coordinates.longitude}`}>{location.location.display_address[0]}, {location.location.display_address[1]}<br/>
          {location.location.display_address[2]}</a></p>
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
    )
  }


}

export default Display;