import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export default function VisaRegistration() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    fName: "",
    lName: "",
    email: "",
    address: "",
    addressLineTwo: "",
    city: "",
    state: "",
    areaCode: "",
    zipCode: "",
    phone: "",
    dateOne: "",
    dateTwo: "",
  });
  const hendleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const hendleSupmit = (e) => {
    e.preventDefault();
    console.log("Data", userData);
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/SingIn");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center items-center">
        <form className="w-[70%] m-auto" onSubmit={hendleSupmit}>
          <h2 className="py-[20px] text-[27px]">Visa Questionnaire </h2>
          <hr className="py-[20px]" />
          <h4>
            Name <span className="text-red-60 text-red-600 text-[18px]">*</span>
          </h4>
          <div className="flex hover:bg-slate-100  p-4 gap-5 mb-3">
            <label className="w-[100%]">
              <input type="text" name="fName" id="" className="block border-[2px] w-[100%] p-2" onChange={hendleChange} value={userData.fName} required />
              <span className="text-[13px] text-gray-500">first Name</span>
            </label>
            <label className="w-[100%]">
              <input type="text" name="lName" id="" className="block border-[2px] w-[100%] p-2" onChange={hendleChange} value={userData.lName} required />
              <span className="text-[13px] text-gray-500">Last Name</span>
            </label>
          </div>
          <h4>
            Email <span className="text-red-600 text-[18px]">*</span>
          </h4>
          <div className="hover:bg-slate-100  p-4 gap-5 mb-3">
            <label className="w-[100%]">
              <input type="email" name="email" id="" className="block border-[2px] w-[100%] p-2" onChange={hendleChange} value={userData.email} required />
              <span className="text-[13px] text-gray-500">example@example.com</span>
            </label>
          </div>
          <h4>
            Address <span className="text-red-600 text-[18px]">*</span>
          </h4>
          <div className="hover:bg-slate-100  p-4 gap-5">
            <label className="w-[100%]">
              <input type="text" name="address" id="" className="block border-[2px] w-[100%] p-2 " onChange={hendleChange} value={userData.address} required />
              <span className="text-[13px] text-gray-500">Street Address</span>
            </label>
            <label className="w-[100%]">
              <input type="text" name="addressLineTwo" id="" className="block border-[2px] w-[100%] p-2 " onChange={hendleChange} value={userData.addressLineTwo} required />
              <span className="text-[13px] text-gray-500">Street Address Line 2</span>
            </label>
            <div className="flex gap-5">
              <label className="mb-5 w-[100%]">
                <input type="text" name="city" id="" className="block border-[2px] p-2 mr-3 w-[100%]" onChange={hendleChange} value={userData.city} required />
                <span className="text-[13px] text-gray-500">City</span>
              </label>
              <label className="w-[100%]">
                <input type="text" name="state" id="" className="block border-[2px] p-2  w-[100%]" onChange={hendleChange} value={userData.state} required />
                <span className="text-[13px] text-gray-500">State / Province</span>
              </label>
            </div>
            <label className="mb-5">
              <input type="text" name="zipCode" id="" className="block border-[2px] p-2  " onChange={hendleChange} value={userData.zipCode} required />
              <span className="text-[13px] text-gray-500">Postal / Zip Code</span>
            </label>
          </div>
          <h4>
            Phone Number <span className="text-red-600 text-[18px]">*</span>
          </h4>
          <div className="flex hover:bg-slate-100 p-3 gap-5">
            <label className="w-[100%]">
              <input type="tel" name="areaCode" id="" className="block border-[2px] w-[100%] p-2" onChange={hendleChange} value={userData.areaCode} required />
              <span className="text-[13px] text-gray-500">Area Code</span>
            </label>
            <label className="w-[100%]">
              <input type="tel" name="phone" id="" className="block border-[2px] w-[100%] p-2" onChange={hendleChange} value={userData.phone} required />
              <span className="text-[13px] text-gray-500">Phone Number</span>
            </label>
          </div>
          <div className="flex justify-between w-[100%] m-auto">
            <div>
              <h4>
                Date of travel <span className="text-red-600 text-[18px]">*</span>
              </h4>
              <div className="flex hover:bg-slate-100 w-fit p-3 gap-5">
                <label className="">
                  <input type="date" name="dateOne" id="" className="block border-[2px] p-2" onChange={hendleChange} value={userData.dateOne} required />
                  <span className="text-[13px] text-gray-500">Date</span>
                </label>
              </div>
              <h4>
                Date of return <span className="text-red-600 text-[18px]">*</span>
              </h4>
              <div className="flex hover:bg-slate-100 w-fit p-3 gap-5">
                <label className="">
                  <input type="date" name="dataTwo" id="" className="block border-[2px] p-2" onChange={hendleChange} value={userData.dateTwo} required />
                  <span className="text-[13px] text-gray-500">Date</span>
                </label>
              </div>
            </div>
            <div className="w-[100px] flex items-center justify-start">
              <img src="/imges/Mastercard-Logo.wine.png" className="w-[180px] h-[90px]" alt="" />
              <img src="/imges/remove.photos-removed-background (9).png" className="w-[180px] h-[130px]" alt="" />
            </div>
          </div>
          <button type="submit" className="w-[100%] p-2 bg-slate-200 rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
