import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detailsproduct() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  async function getProdect() {
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
    getProdect();
  });
  return (
    <>
      <div>
        <div className="flex justify-center flex-wrap items-center">
          {product.map((products) => {
            return (
              <>
                <div key={products.id} className="p-2 ">
                  <img src={products.image} alt="prodact" className="w-[250px] h-[230px] pb-4" />
                  <h3 className="w-[320px]">{products.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[#867979]">{products.category}</p>
                    <p className="text-[#27c862]">${products.price}</p>
                  </div>
                  <Link to={`/product/${products.id}`} className="block text-center bg-slate-300 w-fit m-auto px-2 py-1 rounded mt-2">
                    Detils
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
