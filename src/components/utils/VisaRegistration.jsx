import React, { useEffect } from "react";
import { useNavigate } from "react-router";
export default function VisaRegistration() {
  const navigate = useNavigate();
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/SingIn");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex justify-center items-center">
        <form className="w-[70%] m-auto">
          <h2 className="py-[20px] text-[27px]">Visa questionnaire </h2>
          <hr className="py-[20px]" />
          <h4>
            Name <span className="text-red-60 text-red-600 text-[18px]">*</span>
          </h4>
          <div className="flex hover:bg-slate-100  p-4 gap-5 mb-3">
            <label className="w-[100%]">
              <input type="text" name="" id="" className="block border-[2px] w-[100%] p-2" />
              <span className="text-[13px] text-gray-500">first Name</span>
            </label>
            <label className="w-[100%]">
              <input type="text" name="" id="" className="block border-[2px] w-[100%] p-2" />
              <span className="text-[13px] text-gray-500">Last Name</span>
            </label>
          </div>
          <h4>
            Email <span className="text-red-600 text-[18px]">*</span>
          </h4>
          <div className="hover:bg-slate-100  p-4 gap-5 mb-3">
            <label className="w-[100%]">
              <input type="email" name="" id="" className="block border-[2px] w-[100%] p-2" />
              <span className="text-[13px] text-gray-500">example@example.com</span>
            </label>
          </div>
          <h4>
            Address <span className="text-red-600 text-[18px]">*</span>
          </h4>
          <div className="hover:bg-slate-100  p-4 gap-5">
            <label className="w-[100%]">
              <input type="text" name="" id="" className="block border-[2px] w-[100%] p-2 " />
              <span className="text-[13px] text-gray-500">Street Address</span>
            </label>
            <label className="w-[100%]">
              <input type="text" name="" id="" className="block border-[2px] w-[100%] p-2 " />
              <span className="text-[13px] text-gray-500">Street Address Line 2</span>
            </label>
            <div className="flex gap-5">
              <label className="mb-5 w-[100%]">
                <input type="text" name="" id="" className="block border-[2px] p-2 mr-3 w-[100%]" />
                <span className="text-[13px] text-gray-500">City</span>
              </label>
              <label className="w-[100%]">
                <input type="text" name="" id="" className="block border-[2px] p-2  w-[100%]" />
                <span className="text-[13px] text-gray-500">State / Province</span>
              </label>
            </div>
            <label className="mb-5">
              <input type="text" name="" id="" className="block border-[2px] p-2  " />
              <span className="text-[13px] text-gray-500">Postal / Zip Code</span>
            </label>
          </div>
          <h4>
            Phone Number <span className="text-red-600 text-[18px]">*</span>
          </h4>
          <div className="flex hover:bg-slate-100 p-3 gap-5">
            <label className="w-[100%]">
              <input type="tel" name="" id="" className="block border-[2px] w-[100%] p-2" />
              <span className="text-[13px] text-gray-500">Area Code</span>
            </label>
            <label className="w-[100%]">
              <input type="tel" name="" id="" className="block border-[2px] w-[100%] p-2" />
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
                  <input type="date" name="" id="" className="block border-[2px] p-2" />
                  <span className="text-[13px] text-gray-500">Date</span>
                </label>
              </div>
              <h4>
                Date of return <span className="text-red-600 text-[18px]">*</span>
              </h4>
              <div className="flex hover:bg-slate-100 w-fit p-3 gap-5">
                <label className="">
                  <input type="date" name="" id="" className="block border-[2px] p-2" />
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
