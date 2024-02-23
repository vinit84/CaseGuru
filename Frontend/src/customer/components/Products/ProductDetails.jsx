import { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  Popover,
  RadioGroup,
  Tab,
  Transition,
} from "@headlessui/react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Rating } from "@mui/material";
import ProductReview from "./ProductReview";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findProducts, findProductsById } from "../../../State/Product/Action";
import { addItemToCart } from "../../../State/Cart/Action";
import BackdropComponent from "../BackDrop/Backdrop";
import ShopCard from "../ProductListing/ShopCard";

const productss = {
  // name: "Stickers Glass Case For All Models",
  // price: "₹349",
  // actualprice: "$240",
  // href: "#",
  breadcrumbs: [
    { id: 1, name: "Soft Case", href: "#" },
    { id: 2, name: "Aesthetic", href: "#" },
  ],
  // images: [
  //   {
  //     src: "https://caseguru.co.in/wp-content/uploads/2023/08/CG0033-1536x1536.webp",
  //     alt: "Two each of gray, white, and black shirts laying flat.",
  //   },
  //   {
  //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
  //     alt: "Model wearing plain black basic tee.",
  //   },
  //   {
  //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
  //     alt: "Model wearing plain gray basic tee.",
  //   },
  //   {
  //     src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
  //     alt: "Model wearing plain white basic tee.",
  //   },
  // ],

  // description:
  //   'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  // details:
  //   'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = {
  href: "#",
  average: 4,
  totalCount: 117,
  featured: [
    {
      id: 1,
      title: "This is the best white t-shirt out there",
      rating: 5,
      content: `
        <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
      `,
      author: "Mark Edwards",
      avatarSrc:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      id: 2,
      title: "Adds the perfect variety to my wardrobe",
      rating: 4,
      content: `
        <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
      `,
      author: "Blake Reid",
      avatarSrc:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
    },
    {
      id: 3,
      title: "All good things come in 6-Packs",
      rating: 5,
      content: `
        <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
      `,
      author: "Ben Russel",
      avatarSrc:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ],
};
const products = [
  {
    id: 1,
    name: 'Stickers Glass Case For All Models',
    href: '#',
    price: '₹  349',
    color: 'Soft Case',
    inStock: true,
    size: 'Galaxy S21',
    imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/08/CG0033-1536x1536.webp',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 1,
    name: 'Stickers Glass Case For All Models',
    href: '#',
    price: '₹  349',
    color: 'Soft Case',
    inStock: true,
    size: 'Galaxy S21',
    imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/08/CG0033-1536x1536.webp',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 1,
    name: 'Stickers Glass Case For All Models',
    href: '#',
    price: '₹  349',
    color: 'Soft Case',
    inStock: true,
    size: 'Galaxy S21',
    imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/08/CG0033-1536x1536.webp',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
  {
    id: 1,
    name: 'Stickers Glass Case For All Models',
    href: '#',
    price: '₹  349',
    color: 'Soft Case',
    inStock: true,
    size: 'Galaxy S21',
    imageSrc: 'https://caseguru.co.in/wp-content/uploads/2023/08/CG0033-1536x1536.webp',
    imageAlt: "Front of men's Basic Tee in sienna.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const jwt = localStorage.getItem("jwt");
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [selectedMaterial, setSelectedMaterial] = useState("Hard");
  const materialOptions = ["Hard", "Soft", "Glass"];
  const [selectedBrand, setSelectedBrand] = useState("");
  const brandOptions = ["Apple", "Samsung", "Xiaomi"];
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const {product} = useSelector(store=>store);

  console.log("product id", params.productId);

  const modelOptions = {
    Apple: ["iPhone 12", "iPhone 11", "iPhone SE"],
    Samsung: ["Galaxy S21", "Galaxy Note 20", "Galaxy A51"],
    Xiaomi: ["Mi 11", "Redmi Note 10", "Poco X3"],
  };
  const [selectedModel, setSelectedModel] = useState(modelOptions["Apple"]);

  const handleAddTocart = () => {
    const data = {productId:params.productId,material:selectedMaterial,brand:selectedBrand,model:selectedModel}
    console.log("data _ ",data)
    dispatch(addItemToCart({ data, jwt }));
    navigate("/cart");
  };
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    const data = { productId: params.productId , jwt };
    dispatch(findProductsById(data));
  }, [params.productId]);

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

  useEffect(() => {
    const [minPrice, maxPrice] =
      price === null ? [0, 0] : price.split("-").map(Number);
    const data = {
      category: params.levelThree,
      materials: materialValue || [],
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
    params.levelThree,
    materialValue,
    price,
    discount,
    sortValue,
    pageNumber,
    stock,
  ]);

  return (
    <div className="bg-white">
      <main className="pt-10 sm:pt-16">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {productss.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    className="w-4 h-5 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href="/"
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.product?.title}
              </a>
            </li>
          </ol>
        </nav>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 pt-18">
          {/* Image gallery */}
          <div className="flex flex-col items-center mt-10">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
              <img
                src={selectedImage || product.product?.imageUrl}
                // alt={selectedImage.alt}
                className="w-full h-full object-center object-cover"
              />
            </div>

            <div className="flex flex-wrap space-x-5 justify-center mt-3">
              {/* {product.product?.map((item, index) => ( */}
                <div
                  // key={index}
                  className="aspect-h-20 aspect-w-20 overflow-hidden rounded-lg max-w-[50rem] max-h-[50rem] hover:opacity-70 cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  onClick={() => setSelectedImage(products.imageSrc)}
                >
                  <img
                    src={products.imageSrc}
                    // alt={item.alt}
                    className="w-full h-full object-center object-cover border"
                  />
                </div>
                <div
                  // key={index}
                  className="aspect-h-20 aspect-w-20 overflow-hidden rounded-lg max-w-[50rem] max-h-[50rem] hover:opacity-70 cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  onClick={() => setSelectedImage(products.imageSrc)}
                >
                  <img
                    src={products.imageSrc}
                    // alt={item.alt}
                    className="w-full h-full object-center object-cover border"
                  />
                </div>
                <div
                  // key={index}
                  className="aspect-h-20 aspect-w-20 overflow-hidden rounded-lg max-w-[50rem] max-h-[50rem] hover:opacity-70 cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  onClick={() => setSelectedImage(products.imageSrc)}
                >
                  <img
                    src={products.imageSrc}
                    // alt={item.alt}
                    className="w-full h-full object-center object-cover border"
                  />
                </div>
                <div
                  // key={index}
                  className="aspect-h-20 aspect-w-20 overflow-hidden rounded-lg max-w-[50rem] max-h-[50rem] hover:opacity-70 cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
                  onClick={() => setSelectedImage(products.imageSrc)}
                >
                  <img
                    src={products.imageSrc}
                    // alt={item.alt}
                    className="w-full h-full object-center object-cover border"
                  />
                </div>
              {/* ))} */}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 max-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 mt-10">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-[25px] font-semibold text-gray-900">
                {product.product?.title}
              </h1>
              <h1 className="text-lg lg:text-[15px] text-gray-900 opacity-60 pt-1">
                {product.product?.description}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:mt-0 lg:row-span-3">
              <div className="flex items-center text-md lg:text-xl text-gray-900 mt-6">
                <h2 className="sr-only">Product information</h2>
                <p className="text-2xl text-gray-900">₹ {product.product?.discountedPrice}</p>
                <p className="text-2xl text-gray-900 ml-4 line-through opacity-50">
                  ₹ {product.product?.price}
                </p>
                <p className="text-green-500 font-semibold text-2xl ml-4">
                  {product.product?.discountPercent} %off
                </p>
              </div>

              {/* Reviews */}
              <div className="flex items-center space-x-3 mt-5">
                <Rating name="read-only" value={4} readOnly />
                <p className="ml-3 text-sm font-medium text-orange-600 hover:text-orange-500">
                  387 Reviews
                </p>
              </div>

              <form className="mt-10">
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
                              "transition duration-100 ease-in-out",
                              active && checked
                                ? "ring ring-offset-2 ring-orange-500"
                                : "ring-orange-400",
                              !active && checked ? "ring-2" : "",
                              "m-0.5 relative p-0.5 rounded-md flex items-center justify-center cursor-pointer focus:outline-none",
                              selectedMaterial === material
                                ? "bg-white"
                                : "bg-white "
                            )
                          }
                        >
                          <RadioGroup.Label as="p" className="sr-only">
                            {material}
                          </RadioGroup.Label>
                          <span
                            className={classNames(
                              "border rounded-full w-4 h-4 flex items-center justify-center",
                              selectedMaterial === material
                                ? "border-orange-500"
                                : "border-gray-300"
                            )}
                            aria-hidden="true"
                          >
                            {selectedMaterial === material && (
                              <span
                                className={classNames(
                                  "rounded-full w-3 h-3",
                                  selectedMaterial === material
                                    ? "bg-orange-500"
                                    : "bg-gray-300"
                                )}
                              />
                            )}
                          </span>
                          <RadioGroup.Description as="span" className="ml-3">
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
                    <h4 className="text-sm font-medium text-gray-900">Brand</h4>
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
                    <h4 className="text-sm font-medium text-gray-900">Model</h4>
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
                  onClick={handleAddTocart}
                  type="submit"
                  className="mt-10 w-full bg-orange-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Add to Cart
                </button>
              </form>
            </div>

            <div className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.product?.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                    {productss.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <section aria-labelledby="shipping-heading" className="mt-10">
                <h2
                  id="shipping-heading"
                  className="text-sm font-medium text-gray-900"
                >
                  Details
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{productss.name}</p>
                </div>
              </section>
            </div>
          </div>
        </section>
        {/* Reviews */}

        <div>
          <ProductReview />
        </div>

        

        <section
          aria-labelledby="related-products-heading"
          className="bg-white items-center justify-between font-family['Gilroy'] ml-10"
        >
          <h2 className="font-sans md-center mb-4 font-semibold tracking-tight text-3xl text-orange-600">Customer also purchased</h2>
          <div className="w-full">
          <div className="flex flex-wrap bg-white py-5">
            {product.products &&
             product.products?.content?.slice(0, 4).map((item) => (
                <ShopCard key={item.id} product={item} />
              ))}
          </div>
        </div>
        </section>
      </main>
      <BackdropComponent open={product.loading}/>
    </div>
  );
}
