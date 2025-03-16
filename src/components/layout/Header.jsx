import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <div>
        <nav className="grid grid-cols-3 m-auto text-center flex-wrap w-[100%] items-center p-3">
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
              <i className="fa-solid fa-circle-user "></i> <span className="pr-5">Account</span>
            </Link>
            <Link to="/">
              <i className="fa-solid fa-bag-shopping"></i> <span>Shoping</span>
            </Link>
          </div>
        </nav>
        <hr />
        <nav className="flex justify-center ">
          <ul className="flex justify-center gap-6 flex-wrap p-3" >
            <li>
              <Link to="/">Jewelry & Accessories</Link>
            </li>
            <li>
              <Link to="/">Clothing & Shoes</Link>
            </li>
            <li>
              <Link to="/">Home & Living</Link>
            </li>
            <li>
              <Link to="/">Wedding & Party</Link>
            </li>
            <li>
              <Link to="/">Toys & Entertainment</Link>
            </li>
            <li>
              
              <Link to="/SingIn">Sing in</Link>
            </li>
            <li>
              <Link to="/SingUp">Sing Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
