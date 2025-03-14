import { useState } from "react";

export default function FollowProdcts() {
  const [userEmail, setUserEmail] = useState("");
  function login() {
    console.log(userEmail);
  }
  return (
    <>
      <div className="py-[50px]">
        <h2 className="text-center text-[35px] pb-8">Follow products and discounts on Instagram</h2>
        <div>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <img className="h-[140px] w-[150px]" src="/public/imges/07.png" alt="" />
            <img className="h-[140px] w-[150px]" src="/public/imges/09.png" alt="" />
            <img className="h-[140px] w-[150px]" src="/public/imges/10.png" alt="" />
            <img className="h-[140px] w-[150px]" src="/public/imges/16.png" alt="" />
            <img className="h-[140px] w-[150px]" src="/public/imges/09.png" alt="" />
          </div>
          <div className="py-[40px]">
            <h2 className="text-[30px] text-center">Or subscribe to the newsletter</h2>
          </div>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="userEmail" className="flex justify-center items-center w-[70%] m-auto">
              <input type="email" name="" id="" placeholder="Email Address..." className="border-b-2 border-black w-[80%] outline-none " required onChange={(e) => setUserEmail(e.target.value)} />
              <button onClick={login} type="supmit" className="border-b-2 border-black ml-3 w-[18%}">
                Supmit
              </button>
            </label>
          </form>
        </div>
      </div>
    </>
  );
}
