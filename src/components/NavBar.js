import React from "react";
import logo from "../assets/logo.png";
import CustomButton from "../customs/CustomButton";
import CustomInput from "../customs/CustomInput";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-4  ">
      <div className="flex items-center space-x-8 ml-4 ">
        <img src={logo} alt="logo" width={150} height={64}></img>
        <ul className="flex gap-8">
            <li className="cursor-pointer text-primary-200 hover:text-primary-100">Home</li>
            <li className="cursor-pointer text-primary-200 hover:text-primary-100">Stors</li>
            <li className="cursor-pointer text-primary-200 hover:text-primary-100">Offers</li>
            <li className="cursor-pointer text-primary-200 hover:text-primary-100">Contact</li>
        </ul>
      </div>
      <div className="flex items-center space-x-0">
          <CustomButton
          text="Sign UP"
        type="button"
        buttonStyle="secondary"
        onClick={() => console.log("Signup!")}
          />
           <CustomButton
          text="log in"
        type="button"
        buttonStyle="secondary"
        onClick={() => console.log("login!")}
          />
      </div>
    </nav>
  );
};

export default NavBar;
