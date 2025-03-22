import { Link } from "react-router";
import Navpar from "./Navpar";
import { Count } from "../Context/count";

export default function Header() {
  return (
    <>
      <div>
        <nav className="grid grid-cols-3 m-auto text-center flex-wrap w-[100%] items-center p-3 fixed right-0 left-0 bg-white">
          <div>
            <Link to="/">
              <i class="fa-solid fa-magnifying-glass"></i>
            </Link>
          </div>
          <div>
            <Link to="/" className="text-[23px]">
              CORAL
            </Link>
          </div>
          <div>
            <Link to="/">
              <i class="fa-duotone fa-solid fa-cart-shopping"></i>
            </Link>
            <Link to="/SingIn" className="pl-5 ">
              <b>Sing in</b>
            </Link>
          </div>
        </nav>
        <hr />
        <div className="pt-9">
          <Navpar />
        </div>
      </div>
    </>
  );
}
{
  /*  <Link to="/">
          <i className="fa-solid fa-bag-shopping"></i> <span>Shoping</span>
      </Link>
      <Link to="/">
         <i className="fa-solid fa-circle-user "></i> <span className="pr-5">Account</span>
      </Link>*/
}
