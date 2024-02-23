import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";

import {
  CheckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import products from "../Cart/CartItems";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import CartItem from "../Cart/CartItem";
import { createPayment } from "../../../State/Payment/Action";
import { store } from "../../../State/store";
import BackdropComponent from "../BackDrop/Backdrop";

const OrderSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { order } = useSelector((store) => store);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  console.log("orderId ", orderId);

  useEffect(() => {
    dispatch(getOrderById(orderId));
  }, [orderId]);



  const handleCheckout = async (event) => {
    event.preventDefault(); // Prevent form submission
    const paymentData = await dispatch(createPayment({orderId, jwt}));
    if (paymentData && paymentData.payment_link_url) {
      window.location.href = paymentData.payment_link_url;
    }
  };

  return (
    <div>
      <div className="rounded-md shadow mx-auto p-5 sm:rounded-md ">
        <AddressCard address={order.order?.shippingAddress} />
      </div>

      <div className="bg-white rounded-md shadow sm:rounded-md mt-5">
        <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-3xl font-extrabold font-['Gilroy'] tracking-tight text-gray-900 sm:text-4xl">
            Products In Your Cart
          </h1>
          <form className="mt-12 lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16 font-['Gilroy']">
         
         {order.order?.orderItems.map((product) => (
         <CartItem key={product.id} product={product} showButton={false} />
       ))}
         
       
       <section
         aria-labelledby="summary-heading"
         className="mt-16 bg-gray-50 font-['Gilroy'] rounded-lg px-4 py-6 sm:p-6 lg:p-8 lg:mt-0 lg:col-span-5 align-top overflow-y-auto"
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
               ₹ {order.order?.totalPrice}
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
               ₹ {order.order?.discounte}{" "}
             </dd>
           </div>
           <div className="border-t border-gray-200 pt-4 flex items-center justify-between">
             <dt className="text-base font-medium text-gray-900">
               Order total
             </dt>
             <dd className="text-base font-medium text-[#FF5612]">
               ₹ {order.order?.totalDiscountedPrice}
             </dd>
           </div>
         </dl>
         <div className="mt-6">
           <button
           onClick={handleCheckout}
          
             type="submit"
             className="w-full bg-orange-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-orange-500"
           >
             Payment
           </button>
         </div>
       </section>
     </form>
        </div>
      </div>
      <BackdropComponent open={order.loading}/>
    </div>
  );
};

export default OrderSummary;
