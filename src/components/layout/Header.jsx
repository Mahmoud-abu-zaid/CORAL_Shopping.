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
          <div >
            <Link to="/" >
              <i className="fa-solid fa-circle-user "></i> <span className="pr-5">Account</span>
            </Link>
            <Link to="/" >
              <i className="fa-solid fa-bag-shopping"></i> <span>Shoping</span>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}