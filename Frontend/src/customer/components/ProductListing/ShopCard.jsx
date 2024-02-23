import React, { useState } from "react";
// import products from "./SingleProductDetails";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ShopCard = ({product}) => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(product);
  const [selectedMaterial, setSelectedMaterial] = useState("Hard");
  const materialOptions = ["Hard", "Soft", "Glass"];
  const [selectedBrand, setSelectedBrand] = useState("");
  const brandOptions = ["Apple", "Samsung", "Xiaomi"];

  const modelOptions = {
    Apple: ["iPhone 12", "iPhone 11", "iPhone SE"],
    Samsung: ["Galaxy S21", "Galaxy Note 20", "Galaxy A51"],
    Xiaomi: ["Mi 11", "Redmi Note 10", "Poco X3"],
  };
  const [selectedModel, setSelectedModel] = useState(modelOptions["Apple"]);

  const openQuickView = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleAddTocart = () => {
    navigate("/cart");
  };
  return (
    <div className="bg-white">
      <div className="max-w-2xl sm:px-4 lg:max-w-7xl">
        <div className="gap-3 product-css">
        {/* {products.map((product) => ( */}
            <div
              key={product.id}
              onClick={() => navigate(`/product/${product?._id}`)}
              className="group max-w-[17rem] relative"
            >
              <div className=" h-56 bg-gray-200 rounded-xl border overflow-hidden group-hover:opacity-75 lg:h-72 xl:h-80">
                <img
                  src={product.imageUrl}
                  alt={product.imageAlt}
                  className="w-full h-full object-center object-cover"
                />
              </div>

              <h3 className="mt-4 text-lg text-center text-gray-700">
                <a href={product.href}>
                  <span className="absolute  inset-0" />
                  <h1 className="font-semibold">{product.title}</h1>
                </a>
              </h3>
              <h3 id="information-heading" className="sr-only">
              {product.description}
              </h3>
              <div className="flex flex-row justify-center mt-4">
                <p className="text-center md-font text-gray-500 mb-10 font-bold text-lg line-through mr-3 ">
                  ₹{product.price}
                </p>

                <p className=" text-center md-font text-gray-900 mb-10 font-bold text-lg ">
                  ₹{product.discountedPrice}
                </p>
                <p className=" text-center md-font text-orange-500  mb-10 font-bold text-lg ml-2">
                  {product.discountPercent}%off
                </p>
              </div>

              <div className="">
                <button
                  className="quick-view-button absolute top-[15rem] text-center pt-2 pb-2 pr-10 pl-10 ml-[60px] bg-gray-600 text-white rounded-md opacity-0 group-hover:opacity-75"
                  onClick={(e) => {
                    e.stopPropagation();
                    openQuickView(product);
                  }}
                >
                  Quick View
                </button>
              </div>
            </div>
          {/* ))} */}
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={() => setOpen(false)}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:items-center lg:gap-x-8">
                    <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                      <img
                        src={selectedProduct.imageUrl}
                        alt={selectedProduct.imageAlt}
                        className="object-center object-cover"
                      />
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-xl font-medium text-gray-900 sm:pr-12">
                        {selectedProduct.title}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-1"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product Information
                        </h3>

                        <div className="flex flex-row mt-3">
                          
                          <p className="text-center text-gray-500 font-bold text-lg line-through mr-3">
                            ₹{selectedProduct.price}
                          </p>

                          <p className=" text-center text-gray-900 font-bold text-lg ">
                            ₹{selectedProduct.discountedPrice}
                          </p>
                          <p className=" text-center text-orange-500 font-bold text-lg ml-2">
                            {selectedProduct.discountPercent}%off
                          </p>
                        </div>

                        <div className="mt-4">
                        <h4 className="sr-only">Description</h4>

                        <p className="text-sm text-gray-700">{selectedProduct.description}</p>
                      </div>

                        {/* Reviews */}
                        <div className="mt-4">
                          <h4 className="sr-only">Reviews</h4>
                          <div className="flex items-center">
                            <div className="ml-1 flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    selectedProduct.rating > rating
                                      ? "text-yellow-400"
                                      : "text-gray-200",
                                    "h-5 w-5 flex-shrink-0"
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <div className="hidden ml-4 lg:flex lg:items-center">
                              <span
                                className="text-gray-300"
                                aria-hidden="true"
                              >
                                &middot;
                              </span>
                              <a
                                href="#"
                                className="ml-4 text-sm font-medium text-orange-600 hover:text-orange-500"
                              >
                                See all {selectedProduct.reviewCount} reviews
                              </a>
                            </div>
                          </div>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-8"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          {/* Material picker */}
                          <div>
                            <h4 className="text-sm font-medium text-gray-900">
                              Material
                            </h4>
                            <RadioGroup
                              value={selectedMaterial}
                              onChange={setSelectedMaterial}
                              className="mt-2"
                            >
                              <RadioGroup.Label className="sr-only">
                                Choose a material
                              </RadioGroup.Label>
                              <div className="flex items-center space-x-3">
                                {materialOptions.map((material) => (
                                  <RadioGroup.Option
                                    key={material}
                                    value={material}
                                    className={({ active, checked }) =>
                                      classNames(
                                        active && checked
                                          ? "ring ring-offset-1"
                                          : "",
                                        !active && checked ? "ring-2" : "",
                                        "-m-0.5 relative p-0.5 rounded-md flex items-center justify-center cursor-pointer focus:outline-none"
                                      )
                                    }
                                  >
                                    <RadioGroup.Label
                                      as="p"
                                      className="sr-only"
                                    >
                                      {material}
                                    </RadioGroup.Label>
                                    <span
                                      className={classNames(
                                        selectedMaterial === material
                                          ? "bg-orange-600 border-transparent"
                                          : "bg-white border-gray-300",
                                        "h-4 w-4 rounded-full border flex items-center justify-center"
                                      )}
                                      aria-hidden="true"
                                    >
                                      <span
                                        className={classNames(
                                          selectedMaterial === material
                                            ? "bg-white"
                                            : "bg-gray-300",
                                          "rounded-full w-1.5 h-1.5"
                                        )}
                                      />
                                    </span>
                                    <RadioGroup.Description
                                      as="span"
                                      className="ml-3"
                                    >
                                      {material}
                                    </RadioGroup.Description>
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>

                          {/* Brand dropdown */}
                          <div className="mt-8">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">
                                Brand
                              </h4>
                              <a
                                href="/"
                                className="text-sm font-medium text-orange-600 hover:text-orange-500"
                              >
                                Brand guide
                              </a>
                            </div>

                            <select
                              value={selectedBrand}
                              onChange={(e) => setSelectedBrand(e.target.value)}
                              className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            >
                              <option value="">Select a Brand First</option>
                              {brandOptions.map((brand) => (
                                <option key={brand} value={brand}>
                                  {brand}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Model dropdown */}
                          <div className="mt-8">
                            <div className="flex items-center justify-between">
                              <h4 className="text-sm font-medium text-gray-900">
                                Model
                              </h4>
                              <a
                                href="#"
                                className="text-sm font-medium text-orange-600 hover:text-orange-500"
                              >
                                Model guide
                              </a>
                            </div>

                            <select
                              value={selectedModel}
                              onChange={(e) => setSelectedModel(e.target.value)}
                              className="mt-2 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                            >
                              {selectedBrand && modelOptions[selectedBrand] ? (
                                modelOptions[selectedBrand].map((model) => (
                                  <option key={model} value={model}>
                                    {model}
                                  </option>
                                ))
                              ) : (
                                <option value="">Select Your Model </option>
                              )}
                            </select>
                          </div>

                          <button
                            type="submit"
                            onClick={handleAddTocart}
                            className="mt-8 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                          >
                            Add to Cart
                          </button>

                          <p className="absolute top-4 left-4 text-center sm:static sm:mt-8">
                            <a
                              href={selectedProduct.href}
                              className="font-medium text-orange-600 hover:text-orange-500"
                            >
                              View full details
                            </a>
                          </p>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default ShopCard;
