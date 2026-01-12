import React from 'react';
import Typewriter from "typewriter-effect";


const WelcomeMessage = () => {
    return (
    <h1 className=" font-medium text-center">
      <span className="xopacity-70">Explore </span>
      <span className="text-primary">
        <Typewriter
          options={{
            strings: [
              "Global Trade",
              "Smart Logistics",
              "Export Markets",
              "Import Opportunities",
              "Worldwide Business"
            ],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 35
          }}
        />
      </span>
    </h1>
  );
};

export default WelcomeMessage;