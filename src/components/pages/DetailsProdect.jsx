import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function DetailsProdect() {
  const [prodect, setPrdect] = useState({});
  const { id } = useParams();
  async function getProdect() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (response.status === 200) {
        const prodect = await response.json();
        setPrdect(prodect);
        console.log(prodect);
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
          {prodect.map((Prodects) => {
            return (
              <>
                <div key={Prodects.id} className="p-2 ">
                  <img src={Prodects.image} alt="prodact" className="w-[250px] h-[230px] pb-4" />
                  <h3 className="w-[320px]">{Prodects.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[#867979]">{Prodects.category}</p>
                    <p className="text-[#27c862]">${Prodects.price}</p>
                  </div>
                  <Link to={`/product/${Prodects.id}`} className="block text-center bg-slate-300 w-fit m-auto px-2 py-1 rounded mt-2">
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
