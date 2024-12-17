import React from "react";

const ProductCard = ({ product, addToCart}) => {
  return (
    <div className="border flex flex-col gap-2 p-4 shadow-lg bg-white rounded-md">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 w-full object-contain mb-4"
      />

      <h2 className="font-bold text-lg truncate">{product.title}</h2>
      <div className="flex justify-between items-center">
        <p className="text-gray-700">${product.price}</p>
        <div className="flex items-center gap-2">
          <img
            src={"/star.png"}
            className="w-4 h-4"
          />
          <p className="text-base font-medium text-gray-800">{product.rating.rate}</p>
        </div>
      </div>

      <button
        className="bg-green-500 hover:bg-green-700 text-white w-fit sm:w-full px-4 py-2 mt-2 rounded shadow-md"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
