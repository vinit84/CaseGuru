import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../State/Cart/Action";
// import CartItem from './CartItems';
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import CartItem from "./CartItem";
import BackdropComponent from "../BackDrop/Backdrop";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  const { cart } = useSelector((store) => store);
  console.log("cart ", cart);

  useEffect(() => {
    dispatch(getCart(jwt));
  }, [cart.removeCartItem,cart.updateCartItem,cart.itemadded, jwt]);

  // const calculateTotalPrice = () => {
  //   let totalPrice = 0;
  //   for (let product of cart.cartItems) {
  //     totalPrice += parseFloat(product.price);
  //   }
  //   return totalPrice.toFixed(2);
  // };

  // const calculateTotalDiscountedPrice = () => {
  //   let totalDiscountedPrice = 0;
  //   for (let product of cart.cartItems) {
  //     totalDiscountedPrice += parseFloat(product.discountedPrice);
  //   }
  //   return totalDiscountedPrice.toFixed(2);
  // };

  // const calculateTotalDiscount = () => {
  //   const totalDiscount = parseFloat(calculateTotalPrice()) - parseFloat(calculateTotalDiscountedPrice());
  //   return totalDiscount.toFixed(2);
  // };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-3xl font-extrabold font-['Gilroy'] tracking-tight text-gray-900 sm:text-4xl">
          Shopping Cart
        </h1>
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16 font-['Gilroy']">
         
            {cart.cart?.cartItems.map((product, productIdx) => (
            <CartItem key={product.id} product={product} />
          ))}
            
          
          <section
            aria-labelledby="summary-heading"
            className="mt-16 bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 align-top overflow-y-auto"
          >
            <h2
              id="summary-heading"
              className="text-lg font-medium text-gray-900"
            >
              Order summary
            </h2>
            <dl className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-gray-600">Subtotal</dt>
                <dd className="text-sm font-medium text-gray-900">
                  ₹ {cart.cart?.totalPrice}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex items-center text-sm text-gray-600">
                  <span>Shipping estimate</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how shipping is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium text-[#FF5612]">
                  Free Delivery
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="flex text-sm text-gray-600">
                  <span>Discount</span>
                  <a
                    href="#"
                    className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">
                      Learn more about how tax is calculated
                    </span>
                    <QuestionMarkCircleIcon
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </a>
                </dt>
                <dd className="text-sm font-medium line-through text-[#FF5612]">
                  ₹ {cart.cart?.discounte}{" "}
                </dd>
              </div>
              <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
                <dt className="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd className="text-base font-bold text-[#FF5612]">
                  ₹ {cart.cart?.totalDiscountedPrice}
                </dd>
              </div>
            </dl>
            <div className="mt-6">
              <button
                onClick={() => navigate("/checkout?step=2")}
                type="submit"
                className="w-full bg-orange-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-500"
              >
                Checkout
              </button>
            </div>
          </section>
        </form>
      </div>
      <BackdropComponent open={cart.loading}/>
    </div>
  );
}
