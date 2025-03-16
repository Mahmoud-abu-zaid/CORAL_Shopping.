import { useState } from "react";
import { Link } from "react-router";

export default function SingUp() {
  const [userData, setUserData] = useState({
    email: "",
    userName: "",
    number: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSupmit = (e) => e.preventDefault();
  console.log("User Data", userData);
  return (
    <>
      <div className="flex justify-center items-center py-[70px] ">
        <div className="m-auto ">
          <h2 className="text-[30px]">
            Sing Up to <br /> <span className="text-[40px]"> CORAL</span>
            <p className="pt-5 text-[15px]">
              if you alread have on account <br />
              you can
              <Link to="/SingIn" className="pl-2 text-[#4d47c3]">
                Login here !
              </Link>
            </p>
          </h2>
        </div>
        <div className="w-[50%] ">
          <form onSubmit={handleSupmit}>
            <div>
              <input className="p-3 px-5 m-3 block w-[75%] bg-[#f0efff] rounded-lg "
               type="email" name="email" value={userData.email}
                onChange={handleChange} placeholder="Email" required />
              <input
                type="text"
                name="userName"
                id=""
                className="p-3 px-5  m-3 w-[75%] bg-[#f0efff] rounded-lg "
                value={userData.userName}
                onChange={handleChange}
                placeholder="Create User name"
                required
              />
              <input type="tel" name="number" id="" className="p-3 px-5 m-3 w-[75%] bg-[#f0efff] rounded-lg " value={userData.number} onChange={handleChange} placeholder="Contact Number" required />
              <input className="p-3 px-5 m-3 w-[75%] bg-[#f0efff] rounded-lg " type="password" name="password" value={userData.password} onChange={handleChange} placeholder="Password" required />
              <input
                className="p-3 px-5 m-3 w-[75%] bg-[#f0efff] rounded-lg "
                type="password"
                name="confirmPassword"
                value={userData.confirmPassword}
                onChange={handleChange}
                placeholder="Confrim Password"
                required
              />
            </div>
            <button type="supmit" className="p-3 m-3 w-[75%] bg-[#4d47c3] rounded-lg text-white">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
