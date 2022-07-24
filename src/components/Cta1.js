import React from "react";
import cat_right from "../assets/cat_right.png";
import mokup1 from "../assets/mokup1.png";
import mokup2 from "../assets/mokup2.png";
import mokup3 from "../assets/mokup3.png";
import mokup5 from "../assets/mokup5.jpeg";
import CustomButton from "../customs/CustomButton";
import Cta2 from "./Cta2";

function Cta1() {
  return (
    <div className="space-y-8 flex flex-col">
      <div className=" flex justify-between">
        <div className="flex flex-col items-center justify-center space-y-2 w-full">
          <p class="text-5xl text-secondary-100 font-extrabold">
            What can we offer
          </p>
          <p class="text-xl text-secondary-200">
            You will find the pet store, its food and supplies,
            <span class="block">
              you will find them with high quality and excellent prices.
            </span>
          </p>
        </div>
        <img src={cat_right} alt="cat_right" width={150} height={64}></img>
      </div>
      <div className="flex flex-col items-center w-full h-full space-y-4 ">
        <div className="h-96 w-[80rem]">
          <div
            class="flex h-full bg-auto bg-center items-center justify-center"
            style={{
              backgroundImage: `url(${mokup1})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="flex flex-col pl-72">
              <p class="text-2xl text-secondary-100 font-extrabold">
                You Can Easily Find
                <span class="block">The Animal Accessories …!</span>
              </p>
              <CustomButton
                text="Go to store!"
                type="button"
                buttonStyle="primary"
                onClick={() => console.log("petsstore!")}
              />
            </div>
          </div>
        </div>
        <div className="h-96 w-[80rem]">
          <div
            class="flex h-full bg-auto bg-center items-center justify-center"
            style={{
              backgroundImage: `url(${mokup2})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="flex flex-col pr-72">
              <p class="text-2xl text-secondary-100 font-extrabold">
                You Can Easily Find
                <span class="block"> The Animals Shop …!</span>
              </p>
              <CustomButton
                text="Go to store!"
                type="button"
                buttonStyle="primary"
                onClick={() => console.log("petsstore!")}
              />
            </div>
          </div>
        </div>
        <div className="h-96 w-[80rem] ">
          <div
            class="flex h-full bg-auto bg-center items-center justify-center"
            style={{
              backgroundImage: `url(${mokup3})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="flex flex-col pl-72">
              <p class="text-2xl text-secondary-100 font-extrabold">
                You Can Easily Find
                <span class="block"> The Animals Food …!</span>
              </p>
              <CustomButton
                text="Go to store!"
                type="button"
                buttonStyle="primary"
                onClick={() => console.log("petsstore!")}
              />
            </div>
          </div>
        </div>
        <div className=" felx  flex-col rounded-xl  h-[31rem] w-[80rem] ">
          <div
            class="flex bg-cover bg-center rounded-xl items-center  w-full inset-y-0 left-0"
            style={{
              backgroundImage: `url(${mokup5})`,
              backgroundRepeat: "no-repeat",
              height: "100%",
              width: "100%",
            }}
          >
            <div className="flex flex-col px-4 justify-center items-center">
              <p class="text-2xl text-secondary-100 font-extrabold">
                To contact our services and obtain instructions{" "}
                <span class="block"> Or information, do not hesitate</span>
              </p>
              <CustomButton
                text="Contact Us"
                type="button"
                buttonStyle="primary"
                onClick={() => console.log("Contact Us!")}
              />
            </div>
          </div>
        </div>
      </div>
      <Cta2 />
    </div>
  );
}

export default Cta1;
