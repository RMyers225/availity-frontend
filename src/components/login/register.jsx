/* Register.jsx */
import React from "react";
import loginImg from "../../logo.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="firstname">First Name</label>
              <input type="text" name="firstname" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input type="text" name="lastname" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="npinumber">NPI number</label>
              <input type="text" name="npinumber" placeholder="NPI Number" />
            </div>
            <div className="form-group">
              <label htmlFor="businessaddress">Business Address</label>
              <input type="text" name="businessaddress" placeholder="Business Address" />
            </div>
            <div className="form-group">
              <label htmlFor="phonenumber">Phone Number</label>
              <input type="text" name="phone" placeholder="Phone Number" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            Register
          </button>
        </div>
      </div>
    );
  }
}
