import React from 'react';

class AddressForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleStatePicker = this.handleStatePicker.bind(this);
    this.state = {
      value: 'state'
    };
  }

  handleStatePicker = (e) => {
    this.setState = {value: event.target.value};
  }

  getLocation = (e) => {
    e.preventDefault();
    let _this = this;
    let data = $('.address-form').serialize();  
    $.ajax({
      url: '/api/search',
      type: 'post',
      data: data,
      success:function(option) {
        _this.props.updateLocation(option);
      }
    })
  };

  render() {
    return (
      <div className="form-container">
        <form action="/api" method="post" ref={(input) => this.addressForm = input}  className="address-form" onSubmit={(e) => this.getLocation(e)}>
          <input name="address" ref={(input) => this.address = input} type="text" placeholder="Address" />
          <input name="city" ref={(input) => this.city = input} type="text" placeholder="City" />
          <select name="state" ref={(input) => this.shortState = input} defaultValue={this.state.value} onChange={this.handleStatePicker}>
            <option disabled value="state">State</option>
            <option value="AL">AL</option>
            <option value="AK">AK</option>
            <option value="AZ">AZ</option>
            <option value="AR">AR</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="CT">CT</option>
            <option value="DE">DE</option>
            <option value="DC">DC</option>
            <option value="FL">FL</option>
            <option value="GA">GA</option>
            <option value="HI">HI</option>
            <option value="ID">ID</option>
            <option value="IL">IL</option>
            <option value="IN">IN</option>
            <option value="IA">IA</option>
            <option value="KS">KS</option>
            <option value="KY">KY</option>
            <option value="LA">LA</option>
            <option value="ME">ME</option>
            <option value="MD">MD</option>
            <option value="MA">MA</option>
            <option value="MI">MI</option>
            <option value="MN">MN</option>
            <option value="MS">MS</option>
            <option value="MO">MO</option>
            <option value="MT">MT</option>
            <option value="NE">NE</option>
            <option value="NV">NV</option>
            <option value="NH">NH</option>
            <option value="NJ">NJ</option>
            <option value="NM">NM</option>
            <option value="NY">NY</option>
            <option value="NC">NC</option>
            <option value="ND">ND</option>
            <option value="OH">OH</option>
            <option value="OK">OK</option>
            <option value="OR">OR</option>
            <option value="PA">PA</option>
            <option value="RI">RI</option>
            <option value="SC">SC</option>
            <option value="SD">SD</option>
            <option value="TN">TN</option>
            <option value="TX">TX</option>
            <option value="UT">UT</option>
            <option value="VT">VT</option>
            <option value="VA">VA</option>
            <option value="WA">WA</option>
            <option value="WV">WV</option>
            <option value="WI">WI</option>
            <option value="WY">WY</option>
          </select>
          <input type="submit" value="GO!" />
        </form>
      </div>
    )
  }
}


export default AddressForm;