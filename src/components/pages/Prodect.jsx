import { Link } from "react-router";
import { useEffect, useState } from "react";
import Filter from "../utils/Filter"
export default function Prodect() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProdects();
  }, []);
  async function getProdects() {
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
              All Prodect
            </Link>
          </div>
          <div> 
           
          </div>
        </div>
        <div className="flex justify-center flex-wrap items-center">
          {data.map((Prodect) => {
            return (
              <>
                <div key={Prodect.id} className="p-2 ">
                  <img src={Prodect.image} alt="" className="w-[250px] h-[230px] pb-4" />
                  <h3 className="w-[320px]">{Prodect.title}</h3>
                  <div className="flex justify-between items-center">
                    <p className="text-[#867979]">{Prodect.category}</p>
                    <p className="text-[#27c862]">${Prodect.price}</p>
                  </div>
                  <Link to={`/product/${Prodect.id}`} className="block text-center bg-slate-300 w-fit m-auto px-2 py-1 rounded mt-2">
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
