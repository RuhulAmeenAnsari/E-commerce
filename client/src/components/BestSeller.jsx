import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { shopDataContext } from '../context/ShopContext';
import Card from './Card';

const BestSeller = () => {
  const { products } = useContext(shopDataContext);
  const [bestseller, setBestSeller] = useState([]);

  useEffect(() => {
    if (Array.isArray(products)) {
      const filterProducts = products.filter((item) => item.bestSeller);
      setBestSeller(filterProducts.slice(0, 4));
    } else {
      console.warn('⚠️ products is not an array:', products);
      setBestSeller([]);
    }
  }, [products]);

  return (
    <div className="text-white w-full text-center md:mt-[50px]">
      <Title text1="BEST" text2="SELLER" />
      <p className="w-full mx-auto text-[13px] md:text-[20px] px-[10px] text-blue-100">
        Tried, Tested, Loved! Try our BestSeller
      </p>

      <div className="w-full mt-[30px] flex items-center justify-center flex-wrap gap-[40px]">
        {bestseller.length > 0 ? (
          bestseller.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              price={item.price}
              id={item._id}
              image={item.image1}
            />
          ))
        ) : (
          <p className="text-blue-300">No bestseller products found.</p>
        )}
      </div>
    </div>
  );
};

export default BestSeller;
