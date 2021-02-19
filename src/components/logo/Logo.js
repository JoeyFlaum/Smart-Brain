import React from "react";
import Tilt from "react-tilt";
import './logo.css';

const Logo = () => {
  return (

    <div className="ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 40 }}
        style={{ height: 150,width: 150 }}
      >
        <div className="Tilt-inner"><img src="https://www.freeiconspng.com/uploads/brain-icon-4.png" alt="Download Vectors Brain Icon Free" /></div>
      </Tilt>
    </div>

  );
};
export default Logo;
