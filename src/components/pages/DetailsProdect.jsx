import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import ButtonToCart from "../utils/ButtonToCart";
export default function Detailsproduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  async function getProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (response.status === 200) {
        const product = await response.json();
        setProduct(product);
        console.log(product);
      }
    } catch (error) {
      console.error("error from api call ", error);
    } finally {
      console.log("API success");
    }
  }
  useEffect(() => {
    getProduct();
  }, [id]);
  return (
    <>
      <div>
        <div className="">
          <div className="p-2 w-[65%] m-auto">
            <Link to="/Prodect">
              <i className="fa-solid fa-arrow-left text-[25px] px-3 py-1 bg-slate-200 rounded-lg mb-6"></i>
            </Link>
            <img src={product.image} alt="prodact" className="w-[250px] h-[230px] pb-4 m-auto" />
            <h3 className="w-[320px] pb-3 text-center m-auto">{product.title}</h3>
            <p className="text-black text-center">{product.description}</p>
            <div className="flex justify-between items-center py-2">
              <p className="text-[#867979]">{product.category}</p>
              <p className="text-[#27c862]">${product.price}</p>
            </div>
            <div className="flex justify-between items-center py-2">
              <p className="">count: {product?.rating?.count}</p>
              <p className="">Rata: {product?.rating?.rate}</p>
            </div>
            <div className="flex justify-center items-center flex-wrap m-auto ">
              <ButtonToCart />
              <Link to="/SingIn" className="bg-[#cc0c39] w-[170px] h-[40px] text-center m-3 text-white rounded-xl p-2">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
