import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";
import ShopCard from "./ShopCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PremiumProducts() {
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();
  const { product } = useSelector((store) => store);
  const dispatch = useDispatch();

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const price = searchParams.get("price");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");

  useEffect(() => {
    const [minPrice, maxPrice] =
      price === null ? [0, 0] : price.split("-").map(Number);
    const data = {
      category: param.levelThree,
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 10000,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: pageNumber,
      pageSize: 10,
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [param.levelThree, price, discount, sortValue, pageNumber, stock]);

  
  const supremeProducts =
    product.products?.content?.filter((item) => item.category.name === "starbucks") ||
    [];

  return (
    <div className="bg-white">
      <div className="max-w-2xl lg:mt-20 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="font-sans md-center mb-4 font-semibold tracking-tight text-3xl text-orange-600">
            Premium Products
          </h2>
          <a
            
            className="text-sm viewall-hide font-medium text-orange-600 hover:text-orange-500 cursor-pointer"
            onClick={() => navigate(`/premiumcollection`)}
          >
            View All<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap bg-white py-5">
            {supremeProducts.map((item) => (
              <ShopCard key={item.id} product={item} />
            ))}
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-center mt-8">
          <a
            href="#"
            className="text-sm font-medium text-orange-600 hover:text-orange-500"
          >
            View All<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
