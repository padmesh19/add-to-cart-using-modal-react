import React from "react";

const CartModal = ({ cartItems, removeFromCart, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 py-4 flex justify-center items-center">
      <div className="bg-white flex flex-col gap-4 p-6 rounded-lg w-4/5 max-w-md h-fit max-h-[85vh]">
        <div className="flex justify-between px-4 items-start">
          <h2 className="text-2xl font-bold ">Cart Items</h2>
          <button className="text-red-500 float-right" onClick={onClose}>
            Close
          </button>
        </div>
        <div className="h-full flex gap-2 flex-col overflow-y-auto px-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-4"
              >
                <div className="flex items-start gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-12 w-12 object-contain"
                  />
                  <div className="flex flex-col flex-1 flex-wraptruncate">
                    <p className="">{item.title}</p>
                    <p className="text-sm text-gray-600">${item.price}</p>
                  </div>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white px-2 py-1 rounded"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>Your cart is empty!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
