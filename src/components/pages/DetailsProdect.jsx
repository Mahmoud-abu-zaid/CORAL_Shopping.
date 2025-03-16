import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Detailsproduct() {
  const [product, setProduct] = useState([]);
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
{/*
  import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // إضافة Link

export default function DetailsProduct() {
  const [product, setProduct] = useState(null); // استخدم `null` بدلًا من مصفوفة فارغة
  const { id } = useParams();

  async function getProduct() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } else {
        console.error("Failed to fetch product data");
      }
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]); // إضافة `[id]` لمنع الاستدعاء المتكرر

  // في حالة عدم تحميل البيانات بعد
  if (!product) {
    return <p className="text-center text-lg">جارٍ تحميل المنتج...</p>;
  }

  return (
    <div className="flex justify-center flex-wrap items-center p-4">
      <div className="p-4 border rounded-lg shadow-lg bg-white w-80">
        <img src={product.image} alt={product.title} className="w-full h-48 object-contain pb-4" />
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="text-gray-600">{product.category}</p>
          <p className="text-green-500 font-bold">${product.price}</p>
        </div>
        <Link to={`/product/${product.id}`} className="block text-center bg-blue-500 text-white px-4 py-2 rounded mt-4">
          تفاصيل
        </Link>
      </div>
    </div>
  );
} 
  */}
