import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="bg-slate-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8 pt-24">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
