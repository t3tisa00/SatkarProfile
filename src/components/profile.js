import React, { Component } from "react";
import ProfilePic from "../images/profile.png";
import Github from "../images/github.png";
import Linkedin from "../images/linkedin.png";

const Profile = () => {
  return (
    <div className="profile">
      <a className="white-text" href={"mailto:satkar.tiwari1@gmail.com"}>
        <button className="website-link">Contact Me</button>
      </a>

      <img src={ProfilePic} className="profile-pic" alt="logo" />
      <h2 className="name">Hello, I'm Satkar Tiwari</h2>
      <p className="profile-info">Frontend | Backend | Web designer</p>
      <div>
        <a href="https://github.com/t3tisa00">
          <img className="link" src={Github} />
        </a>
        <a href="https://www.linkedin.com/in/satkar-tiwari-590a388b/">
          <img className="link" src={Linkedin} />
        </a>
      </div>
    </div>
  );
};

export default Profile;
