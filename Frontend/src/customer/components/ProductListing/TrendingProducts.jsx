import React, { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts } from "../../../State/Product/Action";
import ShopCard from "./ShopCard";
import BackdropComponent from "../BackDrop/Backdrop";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}


export default function TrendingProducts() {

  const location = useLocation();
  const navigate = useNavigate();
  const param = useParams();
  const { product } = useSelector((store) => store);
  const dispatch = useDispatch();
  // const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const decodedQueryString = decodeURIComponent(location.search);
  const searchParams = new URLSearchParams(decodedQueryString);
  const price = searchParams.get("price");
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
      minPrice: minPrice || 0,
      maxPrice: maxPrice || 10000,
      minDiscount: discount || 0,
      sort: sortValue || "price_low",
      pageNumber: pageNumber,
      pageSize: 10,
      stock: stock,
    };
    dispatch(findProducts(data));
  }, [
    param.levelThree,
    price,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);

  // Use slice to display only 4 products
  const displayedProducts = product.products?.content?.slice(0, 4);

  return (
    <div className="bg-white">
      <div className="max-w-2xl lg:mt-20 mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <h2 className="font-sans md-center mb-4 font-semibold tracking-tight text-3xl text-orange-600">Trending Products</h2>
          <a className="text-sm viewall-hide font-medium text-orange-600 hover:text-orange-500 cursor-pointer" onClick={() => navigate(`/trendingcollection`)}>
            View All<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <div className="w-full">
          <div className="flex flex-wrap bg-white py-5">
            {displayedProducts &&
              displayedProducts.map((item) => (
                <ShopCard key={item.id} product={item} />
              ))}
          </div>
        </div>

        <div className="flex lg:hidden items-center justify-center mt-8">
          <a className="text-sm font-medium text-orange-600 hover:text-orange-500" onClick={() => navigate(`/trendingcollection`)}>
            View All<span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
        <BackdropComponent open={product.loading}/>
      </div>
    </div>
  );
}

