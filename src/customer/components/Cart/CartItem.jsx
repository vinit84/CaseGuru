import React from "react";
import { CheckIcon, ClockIcon, XIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
import { Navigate, useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";

const CartItem = ({ product, showButton }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const handleRemoveItemFromCart = () => {
    const data = { cartItemId: product?._id, jwt };
    dispatch(removeCartItem(data));
    navigate("/cart");
  };

  const handleUpdateCartItem = (num) => {
    const data = {
      data: { quantity: product.quantity + num },
      cartItemId: product?._id,
      jwt,
    };
    console.log("update data ", data);
    dispatch(updateCartItem(data));
    navigate("/cart");
  };
  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        Items in your shopping cart
      </h2>

      <ul
        role="list"
        className="border-t border-b border-gray-200 divide-y divide-gray-200"
      >
        <li key={product.id} className="flex py-6 sm:py-10">
          <div className="flex-shrink-0">
            <img
              src={product.product?.imageUrl}
              // alt={product.imageAlt}
              className="w-24 h-24 rounded-md object-center object-cover sm:w-48 sm:h-48"
            />
          </div>

          <div className="ml-4 flex-1 flex flex-col justify-between sm:ml-6">
            <div className="relative sm:grid sm:grid-cols-1 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex">
                  <h3 className="text-sm">
                    <a
                      href={product.href}
                      className="font-medium text-[20px] text-gray-700 hover:text-gray-800"
                    >
                      {product.product?.title}
                    </a>
                  </h3>
                </div>
                <div className="mt-3 mx-auto flex text-sm">
                  <p className="text-gray-500 text-[20]">{product?.model}</p>
                  {product?.material ? (
                    <p className="ml-4 pl-4 text-[20] border-l border-gray-200 text-gray-500">
                      {product?.material}
                    </p>
                  ) : null}
                </div>
                <p className="mt-3 text-[20px] text-sm font-semibold text-gray-900">
                  ₹ {product.product?.discountedPrice} |{" "}
                  <span className="line-through  text-gray-500 font-semibold ">
                    ₹ {product.product?.price}{" "}
                  </span>
                </p>

                {
                  <div className="lg:flex items-center lg:space-x-10 pt-4">
                    <div className="flex items-center space-x-2 ">
                    <IconButton
                      onClick={() => handleUpdateCartItem(-1)}
                      disabled={product?.quantity <= 1}
                      aria-label="add an alarm"
                    >
                      <RemoveCircleOutlineIcon style={{ color: 'orange' }} />
                    </IconButton>

                      <span className="py-1 px-7 border rounded-xl">
                        {product?.quantity}
                      </span>
                      <IconButton
                        onClick={() => handleUpdateCartItem(1)}
                        color="orange"
                        aria-label="add an alarm"
                      >
                        <AddCircleOutlineIcon style={{ color: 'orange' }} />
                      </IconButton>
                    </div>
                  </div>
                }
              </div>
              <div></div>

              <div className="mt-4 sm:mt-0 sm:pr-9">
                {/* <label
                  htmlFor={`quantity-${product.product.id}`}
                  className="sr-only"
                >
                  Quantity, {product.product.title}
                </label> */}
                {/* <select
                  id={`quantity-${product.product.id}`}
                  name={`quantity-${product.product.id}`}
                  className="max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                > */}
                {/* {Array.from(
                    { length: product.product.quantity },
                    (_, index) => (
                      <option
                        key={index + 1}
                        value={index + 1}
                        onChange={handleUpdateCartItem}
                      >
                        {index + 1}
                      </option>
                    )
                  )} */}
                {/* 
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                  <option value={6}>6</option>
                  <option value={7}>7</option>
                  <option value={8}>8</option> */}
                {/* </select> */}

                <div className="absolute top-0 right-0">
                  <button
                    type="button"
                    className="-m-2 p-2 inline-flex text-gray-400 hover:text-gray-500"
                    onClick={handleRemoveItemFromCart}
                  >
                    <span className="sr-only">Remove</span>
                    <XIcon className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>

            {/* <p className="mt-4 flex text-sm text-gray-700 space-x-2">
              {product.inStock ? (
                <CheckIcon
                  className="flex-shrink-0 h-5 w-5 text-green-500"
                  aria-hidden="true"
                />
              ) : (
                <ClockIcon
                  className="flex-shrink-0 h-5 w-5 text-gray-300"
                  aria-hidden="true"
                />
              )}

              <span>{product.product.stock ? 'In stock' : `Ships in ${product.leadTime}`}</span>
              <span>
                {product.product.stock ? "In stock" : `Ships in 8 Days`}
              </span>
            </p> */}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default CartItem;
