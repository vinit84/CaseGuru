import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";
import ShopCard from "./ShopCard";
import { Pagination } from "@mui/material";
import BackdropComponent from "../BackDrop/Backdrop";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Shop() {
  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();
  const { product } = useSelector((store) => store);
  const dispatch = useDispatch();
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const price = searchParams.get("price");
  const materialValue = searchParams.get("material");
  const discount = searchParams.get("discount");
  const sortValue = searchParams.get("sort");
  const pageNumber = searchParams.get("page") || 1;
  const stock = searchParams.get("stock");

  // const handleSortChange = (value) => {
  //   const searchParams = new URLSearchParams(location.search);
  //   searchParams.set("sort", value);
  //   const query = searchParams.toString();
  //   navigate({ search: `?${query}` });
  // };

  const handlePaginationChange = (event, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("page", value);
    const query = searchParams.toString();
    navigate({ search: `?${query}` });
  };

  useEffect(() => {
    const [minPrice, maxPrice] =
      price === null ? [0, 0] : price.split("-").map(Number);
    const data = {
      category: param.levelThree,
      materials: materialValue || [],
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 10000,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: pageNumber,
      pageSize: 12,
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [
    param.levelThree,
    materialValue,
    price,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);

  return (
    <div className="bg-white">
      <main className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="border-b border-gray-200 pb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            iPhone 13
          </h1>
          <p className="mt-4 text-base text-gray-500">
            Checkout the latest release of Basic Tees, new and improved with
            four openings!
          </p>
        </div>

        {/* Product grid */}
        <div className="w-full">
          <div className="flex flex-wrap bg-white py-5">
            {product.products &&
              product.products?.content?.map((item) => (
                <ShopCard key={item.id} product={item} />
              ))}
          </div>
        </div>

        <section className="w-full px-[3.6rem]">
          <div className="px-4 py-5 flex justify-center ">
            <Pagination
              count={product.products?.totalPages}
              color="secondary"
              onChange={handlePaginationChange}
            />
          </div>
        </section>
      </main>
      <BackdropComponent open={product.loading}/>
    </div>
  );
}
