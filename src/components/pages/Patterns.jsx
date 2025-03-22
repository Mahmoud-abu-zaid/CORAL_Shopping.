import { Link } from "react-router";
export default function Patterns() {
  return (
    <>
      <div className="py-[60px]">
        <div className="text-center py-5 text-[30px]">
          <h2>Explore new and popular styles</h2>
        </div>
        <div className="flex justify-center items-center flex-wrap ">
          <div className="w-[500px]">
            <Link to="/">
              <img src="/imges/07.png" alt="Discover patterns 1" />
            </Link>
          </div>
          <div className="flex justify-center items-center ">
            <div>
              <Link to="/">
                <img src="/imges/16.png" alt="Discover patterns 2" className="w-[250px] h-[250px]" />
              </Link>
              <Link to="/">
                <img src="/imges/10.png" alt="Discover patterns 5" className="w-[250px] h-[250px]" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <img src="/imges/09.png" alt="Discover patterns 4" className="w-[250px] h-[250px]" />
              </Link>
              <Link to="/">
                <img src="/imges/04.png" alt="Discover patterns 3" className="w-[250px] h-[250px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
