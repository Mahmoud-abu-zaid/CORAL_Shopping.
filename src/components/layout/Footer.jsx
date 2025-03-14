import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <div className="flex justify-center flex-wrap pt-[40px] ">
        <div className="pr-2">
          <h3 className="text-[25px]"> <b>CORAL</b></h3>
          <div>
            <h4 className="text-[20px] py-5">CORAL</h4>
            <p className="text-[#565e65]">
              Lorem ipsum dolor sit amet, consectetur adipiscing <br />
              elit, sed do eiusmod tempor incididunt ut labore et <br />
              dolore magna aliqua
            </p>
            <div className="flex gap-3 py-3">
              <a href="#">
                <img src="/public/imges/v6-icon (free).png" alt="" />
              </a>
              <a href="#">
                <img src="/public/imges/v6-icon (free)-1.png" alt="" />
              </a>
              <a href="#">
                <img src="/public/imges/v6-icon (free)-2.png" alt="" />
              </a>
              <a href="#">
                <img src="/public/imges/v6-icon (free)-3.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 pb-2 ">
          <h3>
            <b> CATALOG</b>
          </h3>
          <div className="py-5 text-[#565e65]">
            <Link to="/" className="block leading-[30px]">Necklaces</Link>
            <Link to="/" className="block leading-[30px]">hoodies</Link>
            <Link to="/" className="block leading-[30px]">Jewelry Box</Link>
            <Link to="/" className="block leading-[30px]">t-shirt</Link>
            <Link to="/" className="block leading-[30px]">jacket</Link>
          </div>
        </div>
        <div className="px-8">
          <h3>
            <b> ABOUT US</b>
          </h3>
          <div className="py-5 pb-2 text-[#565e65]">
            <Link to="/" className="block leading-[30px]">Our Producers</Link>
            <Link to="/" className="block leading-[30px]">Sitemap</Link>
            <Link to="/" className="block leading-[30px]"> FAQ</Link>
            <Link to="/" className="block leading-[30px]">About Us</Link>
            <Link to="/" className="block leading-[30px]">Terms & Conditions</Link>
          </div>
        </div>
        <div className="px-4  pb-2 ">
          <h3>
            <b> CUSTOMER SERVICES</b>
          </h3>
          <div className="py-5 text-[#565e65]">
            <Link to="/" className="block leading-[30px]">Contact Us</Link>
            <Link to="/" className="block leading-[30px]">Track Your Order</Link>
            <Link to="/" className="block leading-[30px]">Product Care & Repair</Link>
            <Link to="/" className="block leading-[30px]">Book an Appointment</Link>
            <Link to="/" className="block leading-[30px]">Shipping & Returns</Link>
          </div>
        </div>
      </div>
    </>
  );
}
