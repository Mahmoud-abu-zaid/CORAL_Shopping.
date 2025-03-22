import { useState } from "react";

export default function ButtonToCart() {
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)} className="bg-[#7fda69] w-[170px] h-[40px] m-3 text-white p-2 rounded-xl">
        Add to Cart ({count})
      </button>
    </>
  );
}
