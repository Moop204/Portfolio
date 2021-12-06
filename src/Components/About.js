import React, { Component } from "react";
import Image from "material-ui-image";

class About extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var bio = this.props.data.bio;
      var city = this.props.data.address.city;
      var email = this.props.data.email;
    }

    console.log(profilepic);

    return (
      <section id="about">
        <Image src={profilepic} /> {/* <img src={this.props.data.image} /> */}
        <div className="row">
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Andrew Nguyen Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  {city}
                  <span>{email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
