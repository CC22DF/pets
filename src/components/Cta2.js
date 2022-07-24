import React from "react";
import mokup4 from "../assets/mokup4.png";
import dog_left from "../assets/dog_left.png";
import CustomButton from "../customs/CustomButton";

function Cta2() {
  return (
    <div className=" flex justify-between h-96">
      <img
        className="fexed"
        src={dog_left}
        alt="dog_left"
        width={150}
        height={64}
      ></img>
      <div
        class="flex justify-center bg-center bg-auto items-center"
        style={{
          backgroundImage: `url(${mokup4})`,
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
        }}
      >
        <p class="text-2xl text-secondary-100 font-extrabold">
          Our customers can also create
          <span class="block">their own warehouse if they </span> want to
        </p>
        <CustomButton
          text="Above more"
          type="button"
          buttonStyle="primary"
          onClick={() => console.log("Above more!")}
        />
      </div>    
    </div>
  );
}

export default Cta2;
