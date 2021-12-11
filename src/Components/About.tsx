import React, { Component, FunctionComponent } from "react";
import Image from "material-ui-image";
import { ChipTypeMap } from "@mui/material";
import ProfilePic from "../media/profilepic.jpg";

interface ResumeData {
  data: {
    name: string;
    image: string;
    bio: string;
    address: {
      city: string;
    };
    email: string;
  };
}

const ProfilePicture = () => {
  return (
    <div className="three columns">
      <img
        className="profile-pic"
        src={ProfilePic}
        alt="Andrew Nguyen Profile Pic"
      />
    </div>
  );
};

const AboutMe = ({ bio }: { bio: string }) => {
  return (
    <div>
      <h2>About Me</h2>
      <p>{bio}</p>
    </div>
  );
};

const ContactDetails = ({
  name,
  city,
  email,
}: {
  name: string;
  city: string;
  email: string;
}) => {
  return (
    <div className="contact-details">
      <h2>Contact Details</h2>
      <p className="address">
        <span>{name}</span> <br />
        <span>{email}</span> <br />
        <span>{city}</span> <br />
      </p>
    </div>
  );
};

const About: FunctionComponent<any> = (prop) => {
  if (!prop.data) {
    return <div />;
  }

  const data = prop.data;
  const name = data.name;
  const city = data.address ? data.address.city : "No city";
  const email = data.email ?? "No email";

  return (
    <section id="about">
      <div className="row">
        <ProfilePicture />
        <div className="nine columns main-col">
          <div className="row">
            <AboutMe bio={data.bio} />
            <ContactDetails name={name} city={city} email={email} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
