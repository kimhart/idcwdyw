import React from 'react';

class AddressForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stateShort: 'state'
    };
  }

  handleStatePicker = (e) => {
    this.setState = {stateShort: event.target.value};
  }

  handlePrice = () => {
    const priceOptions = [this.refs.price1, this.refs.price2, this.refs.price3, this.refs.price4];
    const priceChosen = [];
    for (let i = 0; i < priceOptions.length; i++) {
      if (priceOptions[i].checked) {
        priceChosen.push(priceOptions[i].value);
      } else {
        if (priceChosen.includes(priceOptions[i])) {
          let index = priceChosen.indexOf(priceOptions[i])
          priceChosen.splice(index, 1)
        }
      }
      priceChosen.sort();
    }
    return priceChosen.join();
  }

  getLocation = (e) => {
    e.preventDefault();
    const price = this.handlePrice();
    const _this = this;
    const address = $('.address-form').serialize();
    const data = `${address}&price=${price}`;
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
        <form action="/api/search" method="post" className="address-form" onSubmit={(e) => this.getLocation(e)}>
          <div className="form-row">
            <div className="form-group">
              <span className="topic-label">Price Range:</span>
              <input defaultChecked id="check1" type="checkbox" value={1} ref="price1" className="price-check" /><label htmlFor="check1">$</label>
              <input defaultChecked id="check2" type="checkbox" value={2} ref="price2" className="price-check" /><label htmlFor="check2">$$</label>
              <input defaultChecked id="check3" type="checkbox" value={3} ref="price3" className="price-check" /><label htmlFor="check3">$$$</label>
              <input defaultChecked id="check4" type="checkbox" value={4} ref="price4" className="price-check" /><label htmlFor="check4">$$$$</label>
            </div>
            <div className="form-group">
              <span className="topic-label radius">Max distance (miles):</span>
              <input name="radius" defaultValue={1} type="number" id="radius" min="1" max="5" />
            </div>
          </div>
          <div className="form-row">
            <input required name="address" type="text" placeholder="Address" />
            <input required name="city" type="text" placeholder="City" />
            <select required name="state" defaultValue={this.state.stateShort} onChange={this.handleStatePicker}>
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
            <input type="submit" value="GO" />
          </div>
        </form>
      </div>
    )
  }
}


export default AddressForm;