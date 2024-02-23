import React from "react";
import Navigation from "../customer/components/navigation/Navigation";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../customer/Pages/HomePage/HomePage";
import Cart from "../customer/components/Cart/Cart";
import ProductDetails from "../customer/components/Products/ProductDetails";
import Footer from "../customer/components/Footer/Footer";
import Checkout from "../customer/components/Checkout/Checkout";
import Order from "../customer/components/Order/Order";
import Shop from "../customer/components/ProductListing/Shop";
import OrderDetails from "../customer/components/Order/OrderDetails";
import { ThemeProvider } from "@emotion/react";
import PaymentSuccess from "../customer/components/paymentSuccess/PaymentSuccess";
import RateProduct from "../customer/components/ReviewProduct/RateProduct";


const CustomerRouters =()=> {

     const location = useLocation();
    
  
    // Only show Navigation component when not on the NotFound page
    const showNavigation = location.pathname !== "*";
    return (
        <div>
           {/* <ThemeProvider theme={customerTheme}> */}
    {showNavigation && <Navigation />}
     <Routes>
     <Route path="/login" element={<HomePage />}></Route>
     <Route path="/register" element={<HomePage />}></Route>

        <Route path="/" element={<HomePage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        {/* <Route path="/about" element={<About />}></Route> */}
        {/* <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route> */}
        {/* <Route path="/terms-condition" element={<TearmsCondition />}></Route> */}
        {/* <Route path="/contact" element={<Contact />}></Route> */}
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Shop />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess/>}></Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    {/* </ThemeProvider> */}
        </div>
    )
};

export default CustomerRouters