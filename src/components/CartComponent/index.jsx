import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

const index = () => {
  const { cartItems, updateQuantity } = useContext(CartContext);

  const subtotalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const shippingCost = 0;
  const finalTotal = subtotalPrice + shippingCost;

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is currently empty. 🛒</p>
      ) : (
        <>
          <div className="shadow-lg rounded-lg overflow-hidden mb-10">
            <div className="hidden md:grid grid-cols-5 gap-4 p-4 text-sm font-semibold">
              <h2 className="col-span-2">Product</h2>
              <h2 className="text-center">Price</h2>
              <h2 className="text-center">Quantity</h2>
              <h2 className="text-center">Subtotal</h2>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-5 gap-4 items-center p-4 my-4 hover:bg-gray-50 transition-colors"
              >
                <div className="col-span-2 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <h2 className="text-sm font-medium">{item.title}</h2>
                </div>

                <div className="text-center text-sm font-medium">
                  {formatCurrency(item.price)}
                </div>

                <div className="text-center">
                  <select
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                    className="border rounded-lg p-2 text-sm"
                  >
                    {[...Array(10).keys()].map((num) => (
                      <option key={num + 1} value={num + 1}>
                        {num + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="text-center text-sm font-semibold">
                  {formatCurrency(item.price * item.quantity)}
                </div>
              </div>
            ))}
          </div>

          {/* باقي كود الإجمالي */}
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            <div className="lg:w-1/2">
              <h2 className="text-xl font-semibold mb-4">Apply Coupon</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  className="p-3 border rounded-lg flex-grow"
                />
                <button className="bg-red-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors">
                  Apply Coupon
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 border p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Cart Totals</h2>

              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b">
                  <h3 className="font-medium text-gray-600">Subtotal:</h3>
                  <span className="font-semibold">
                    {formatCurrency(subtotalPrice)}
                  </span>
                </div>

                <div className="flex justify-between items-center pb-2 border-b">
                  <h3 className="font-medium text-gray-600">Shipping:</h3>
                  <span className="font-semibold">
                    {shippingCost === 0 ? "Free" : formatCurrency(shippingCost)}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <h3 className="text-lg font-bold">Total:</h3>
                  <span className="text-lg font-bold">
                    {formatCurrency(finalTotal)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-red-500 text-white text-lg font-semibold py-3 mt-6 rounded-lg hover:bg-red-600 transition-colors shadow-md">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default index;
