import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";
import { fetchProducts } from "./utils/fakeStoreAPI";
import Loader from "./components/Bars";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
      setIsLoading(false);
    };
    loadProducts();
  }, []);
  

  const addToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      alert("Item already added to the cart");
    } else {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  return (
    <div>
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setIsModalOpen(true)}
      />
      <div>
        {isLoading ? (
          <div className="h-[90vh] flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <ProductList
            products={products}
            addToCart={addToCart}
          />
        )}
      </div>

      {isModalOpen && (
        <CartModal
          cartItems={cart}
          removeFromCart={removeFromCart}
          onClose={() => {
            setIsModalOpen(false)
          }
          }
        />
      )}
    </div>
  );
};

export default App;
