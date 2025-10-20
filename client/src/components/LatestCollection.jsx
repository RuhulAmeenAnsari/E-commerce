import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { shopDataContext } from '../context/ShopContext';
import Card from './Card';

const LatestCollection = () => {
  const { products } = useContext(shopDataContext);
  const [latestCollection, setlatestCollection] = useState([]);

  useEffect(() => {
    console.log("Products context value:", products);

    if (Array.isArray(products)) {
      setlatestCollection(products.slice(0, 8));
    } else if (products && Array.isArray(products.products)) {
      setlatestCollection(products.products.slice(0, 8));
    } else {
      setlatestCollection([]);
    }
  }, [products]);

  return (
    <div className="text-white w-full text-center md:mt-[50px]">
      <Title text1={"LATEST"} text2={"COLLECTION"} />
      <p className="w-full mx-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
        Step into style, new collection dropping this season!
      </p>

      <div className="w-full mt-[30px] flex items-center justify-center flex-wrap gap-[40px]">
        {Array.isArray(latestCollection) && latestCollection.map((item, index) => (
          <Card
            key={index}
            name={item.name}
            price={item.price}
            id={item._id}
            image={item.image1}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
