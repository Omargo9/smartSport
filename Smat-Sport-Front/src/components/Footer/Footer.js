import React from "react";

import withfooterstyle from './WithfooterStyle';
import img from './pic/LOGO-white.png';

function Footer(props) {
  const { className } = props;
  return (

    <div className={className}>
      <div className="Footer__Container">
        <div className="Footer__div1">
          <img className="Footer__img" src={img} alt="" />
        </div>
        <div className="Footer__div2">
          <div className="Footer__ContDiv2">
            <div className="Footer__B1">
              <div className="Footer__lDiv">FIND A STORE</div>
              <div className="Footer__lorem">BECOME A MEMBER </div>
            </div>
            <div className="Footer__B2">
              <div className="Footer__lDiv">CONTACT US</div>

            </div>
            <div className="Footer__B3">
              <div className="Footer__lDiv">ABOUT AS</div>
              <div className="Footer__lorem">NEWS<br />CAREERS<br ></br> INVESTORS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withfooterstyle(Footer);
