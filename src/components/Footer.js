import React from "react";
import logo from "../assets/logo.png";
import CustomInput from "../customs/CustomInput";
import CustomButton from "../customs/CustomButton";
function Footer() {
  return <div className=" bg-primary-100 grid grid-cols-2 h-96">
     <div class=' p-12 rounded-xl space-x-12 space-y-4'>

<img src={logo} alt='logo' width={150} height={64}></img>
<p > Hay bir anzarane block 13 rue 13 nr 13 tikiouine Agadir</p>
<p> Num for contact:0518181212</p>
<p > Mail : petspool@gmail.ma</p>

</div>
<div class='p-12 rounded-xl space-x-12 space-y-4'>
      <p class='text-2xl text-secondary-100 font-extrabold'> For contact and inquiries</p>
      <div>
</div>
      <form
 

 >
  <div className="mb-3 pt-0">
    <CustomInput
      type="email"
      placeholder="Email"
      name="email"
      InputStyle="primary"
      required
    />
  </div>
  <div className="mb-3 pt-0">
    <textarea
      placeholder="Your message"
      name="message"
      className="px-3 py-3 placeholder-primary-200 text-secondary-100  bg-primary-300 relative  rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
      required
    />
  </div>
  <div className="mb-3 pt-0">
  <CustomButton
              text=" Send a message"
              type="button"
              buttonStyle="primary"
              onClick={() => console.log("invite!")}
            />
  </div>
</form>


    </div>
  </div>;
}

export default Footer;
