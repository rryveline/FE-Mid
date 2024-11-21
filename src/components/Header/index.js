import React from "react";
import img1 from "../../assets/images/meee.jpeg";

const Header = () => {
  return (
    <header id="header">
      <img src={img1} alt="ryveline" id="pic" />
      <h1>Ryveline Robot</h1>
      <p>
        <strong>Phone:</strong>{" "}
        <a href="tel:+6281394750257">+62 813 94750257</a>
        <br />
        <strong>Email:</strong>{" "}
        <a href="mailto:ryvelinerobot@gmail.com">ryvelinerobot@gmail.com</a>
      </p>
    </header>
  );
};

export default Header;