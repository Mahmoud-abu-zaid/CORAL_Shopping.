import { Link } from "react-router";
import { useEffect, useState } from "react";
import ButtonToCart from "../utils/ButtonToCart";
export default function Prodect() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (response.status === 200) {
        const data = await response.json();
        setData(data);
        console.log(data);
      }
    } catch (error) {
      console.error("error from api call ", error);
    } finally {
      console.log("API success");
    }
  }
  return (
    <>
      <div>
        <h2 className="text-center text-[40px]">Or subscribe to the newsletter</h2>
        <div className="flex justify-between p-4 m-6">
          <div>
            <Link to="/" className="text-[25px]">
              All Product
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-center">
          {data.map((Product) => {
            return (
              <>
                <div key={Product.id} className="p-3 ">
                  <img src={Product.image} alt="" className="w-[250px] h-[230px] pb-4 m-auto" />
                  <h3 className="w-[310px]">{Product.title}</h3>
                  <div className="flex justify-between">
                    <p className="text-[#867979]">{Product.category}</p>
                    <p className="text-[#27c862]">${Product.price}</p>
                  </div>
                  <div className="flex justify-center">
                    <Link to={`/product/${Product.id}`} className=" text-center bg-slate-300 h-[40px] w-[80px] m-3 p-2 rounded-xl">
                      Detils
                    </Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
