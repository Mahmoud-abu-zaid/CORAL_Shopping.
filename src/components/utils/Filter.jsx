import { useState } from "react";

function App() {
  const [category, setCategory] = useState("all");

  const items = [
    { id: 1, name: "آيفون", category: "موبايلات" },
    { id: 2, name: "لابتوب", category: "إلكترونيات" },
    { id: 3, name: "تيشيرت", category: "ملابس" },
    { id: 4, name: "ساعة ذكية", category: "إلكترونيات" },
    { id: 5, name: "حذاء رياضي", category: "ملابس" },
  ];

  const filteredItems = category === "all" ? items : items.filter((item) => item.category === category);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">فلتر المنتجات</h1>

      <div className="mb-6 flex gap-3">
        <button onClick={() => setCategory("all")} className="px-4 py-2 bg-blue-500 text-white rounded">
          الكل
        </button>
        <button onClick={() => setCategory("موبايلات")} className="px-4 py-2 bg-green-500 text-white rounded">
          موبايلات
        </button>
        <button onClick={() => setCategory("إلكترونيات")} className="px-4 py-2 bg-yellow-500 text-white rounded">
          إلكترونيات
        </button>
        <button onClick={() => setCategory("ملابس")} className="px-4 py-2 bg-pink-500 text-white rounded">
          ملابس
        </button>
      </div>

      <ul className="bg-white p-4 shadow rounded">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item.id} className="p-2 border-b">
              {item.name} - <span className="text-gray-500">{item.category}</span>
            </li>
          ))
        ) : (
          <li className="text-gray-500 p-2">لا توجد نتائج</li>
        )}
      </ul>
    </div>
  );
}

export default App;

