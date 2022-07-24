import React from "react";
import CustomButton from "../customs/CustomButton";
import imghero from "../assets/imghero.png";
import NavBar from "./NavBar";
function Hero() {
  return (
    <div className="flex flex-col h-screen bg-gradient-to-r from-primary-300 to-primary-100">
      <NavBar />
      <div className="flex flex-row items-center justify-around space-x-8 flex-grow w-full px-64">
      <div className="flex flex-col justify-center space-y-4">
          <p class="text-5xl text-secondary-100 font-extrabold">
            Find the perfect pet for you
          </p>
          <p class="text-xl text-secondary-200">
            Let us help you find the right pet with all
            <span class="block">the information you will need!</span>
          </p>
          <div className="flex items-center ">
            <CustomButton
              text="read more"
              type="button"
              buttonStyle="primary"
              onClick={() => console.log("readmore!")}
            />
            <CustomButton
              text="Invite Friend"
              type="button"
              buttonStyle="primary"
              onClick={() => console.log("invite!")}
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-around">
          <img className="w-5/6 h-5/6" src={imghero} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
