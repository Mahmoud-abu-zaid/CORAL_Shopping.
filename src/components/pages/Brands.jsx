import { Link } from "react-router";
export default function Brands() {
  return (
    <>
      <div className="py-[60px]">
        <div className="flex justify-center items-center flex-wrap">
          <Link to="/">
            <img className="p-2" src="/public/imges/brand-1.png" alt="" />
          </Link>
          <Link to="/"></Link>
          <Link to="/">
            <img className="p-2" src="/public/imges/brand-2.png" alt="" />
          </Link>
          <Link to="/">
            <img className="p-2" src="/public/imges/brand-3.png" alt="" />
          </Link>
          <Link to="/">
            <img className="p-2" src="/public/imges/brand-5.png" alt="" />
          </Link>
          <Link to="/">
            <img className="p-2" src="/public/imges/brand-4.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}
