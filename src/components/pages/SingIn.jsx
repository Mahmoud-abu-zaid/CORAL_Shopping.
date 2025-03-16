import { useState } from "react";
import { Link } from "react-router";

export default function SingIn() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const hendleSupmit = (e) => {
    e.preventDefault();
    console.log("User Data ", userData);
  };
  return (
    <>
      <div className="flex justify-center items-center py-[70px] flex-wrap">
        <div className="m-auto ">
          <h2 className="text-[30px]">
            Sing in to <br /> <span className="text-[40px]"> CORAL</span>
            <p className="pt-5 text-[15px]">
              if you don't have on account register <br />
              you can
              <Link to="/SingUp" className="pl-2 text-[#4d47c3]">Register here !</Link>
            </p>
          </h2>
        </div>
        <div className="sm:w-[50%] w-[70%] ">
          <form onSubmit={hendleSupmit}>
            <div>
              <input className="p-3 m-3 block sm:w-[75%] w-[100%] bg-[#f0efff] rounded-lg" type="email" required name="email" value={userData.email} onChange={handleChange} placeholder="Email" />
              <input className="p-3 m-3 sm:w-[75%] w-[100%] bg-[#f0efff] rounded-lg" type="password" required name="password" value={userData.password} onChange={handleChange} placeholder="Password" />
            </div>
            <div className="text-end sm:w-[75%] w-[100%] my-5">
              <Link className="text-[#c3c3c3] my-7">Forger Password ?</Link>
            </div>
            <button type="supmit" className="p-3 m-3 sm:w-[75%] w-[100%] bg-[#4d47c3] rounded-lg text-white">
              log in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
