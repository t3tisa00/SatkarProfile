import React from "react";
import FacebookLogo from "../images/facebooklogo.png";
import TwitterLogo from "../images/twitterlogo.png";
const Footlast = () => {
  return (
    <div className="footerarea">
      <b className="followme">Follow me @ </b>
      <img src={FacebookLogo} className="footerimage" alt="facebook" />
      <img src={TwitterLogo} className="footerimage" alt="twitter" />
      <p className="footertext">@copyright SatkarTiwari</p>
    </div>
  );
};
export default Footlast;
