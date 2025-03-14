import React, { useEffect, useState } from 'react';

const SimpleFilterButton = () => {




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
      }}
  // البيانات الأولية
  
  const initialData = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Tomato', category: 'Vegetable' },
    { id: 5, name: 'Orange', category: 'Fruit' },
  ];

  // حالة لتخزين البيانات المصفاة
  const [filteredData, setFilteredData] = useState(initialData);

  // دالة للتصفية بناءً على الفئة
  const filterByCategory = (category) => {
    if (category === 'All') {
      // إذا كانت الفئة "All"، نعرض جميع البيانات
      setFilteredData(initialData);
    } else {
      // نقوم بتصفية البيانات بناءً على الفئة المحددة
      const filtered = initialData.filter(item => item.category === category);
      setFilteredData(filtered);
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple Filter with Button</h1>

      {/* أزرار التصفية */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => filterByCategory('All')}
          style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Show All
        </button>
        <button
          onClick={() => filterByCategory('Fruit')}
          style={{ marginRight: '10px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Fruits Only
        </button>
        <button
          onClick={() => filterByCategory('Vegetable')}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          Vegetables Only
        </button>
      </div>

      {/* عرض البيانات المصفاة */}
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {filteredData.map(item => (
          <li
            key={item.id}
            style={{
              padding: '10px',
              border: '1px solid #ddd',
              marginBottom: '10px',
              borderRadius: '5px',
            }}
          >
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SimpleFilterButton;