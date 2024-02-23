import { useState } from "react";
import { IconButton, Typography } from "@mui/material";
import {
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

import { Fragment } from "react";
import "./CreateProductForm.css";
import { useDispatch } from "react-redux";
import { createProduct } from "../../../State/Product/Action";
import CancelIcon from '@mui/icons-material/Cancel';
const initialSizes = [
  { name: "Hard Case", quantity: 0 },
  { name: "Soft Case", quantity: 0 },
  { name: "Glass Case", quantity: 0 },
];

const CreateProductForm = () => {
  const [productData, setProductData] = useState({
    imageUrl: "",
    // product1Url:"",
    // product2Url:"",
    // product3Url:"",
    // product4Url:"",
    brand: "",
    title: "",
    discountedPrice: "",
    price: "",
    discountPercent: "",
    material: initialSizes,
    quantity: "",
    topLevelCategory: "",
    secondLevelCategory: "",
    thirdLevelCategory: "",
    description: "",
  });
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlematerialChange = (e, index) => {
    let { name, value } = e.target;
    name === "material_quantity" ? (name = "quantity") : (name = e.target.name);

    const materials = [...productData.material];
    materials[index][name] = value;
    setProductData((prevState) => ({
      ...prevState,
      material: materials,
    }));
  };

  const handleAddmaterial = () => {
    const materials = [...productData.material];
    materials.push({ name: "", quantity: "" });
    setProductData((prevState) => ({
      ...prevState,
      material: materials,
    }));
  };

  // const handleRemovematerial = (index) => {
  //   const materials = [...productData.material];
  //   materials.splice(index, 1);
  //   setProductData((prevState) => ({
  //     ...prevState,
  //     material: materials,
  //   }));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct({ data: productData, jwt }));
    console.log(productData);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProductData((prevState) => ({
        ...prevState,
        imageUrl: reader.result,
      }));
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setProductData((prevState) => ({
        ...prevState,
        imageUrl: "",
      }));
    }
  };

  const handleImageRemove = () => {
    setProductData((prevState) => ({
      ...prevState,
      imageUrl: "",
    }));
  };

  // const handleAddProducts=(data)=>{
  //   for(let item of data){
  //     const productsData={
  //       data:item,
  //       jwt,
  //     }
  //     dispatch(createProduct(productsData))
  //   }
  // }

  return (
    <Fragment className="createProductContainer ">
      <Typography
        variant="h3"
        sx={{ textAlign: "center" }}
        className="py-10 text-center font-family['Gilroy']"
      >
        Add New Product
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="createProductContainer min-h-screen "
      >
       <div className="col-span-3 mb-5">
  <label className="block text-sm font-medium text-gray-500">
    Product Image
  </label>
  {productData.imageUrl ? (
    <div className="mt-1 flex justify-center position-relative">
      <img
        src={productData.imageUrl}
        width="200px"
        height="200px"
        alt="Product preview"
        style={{ borderRadius: '10px' }}
      />
      <IconButton
  style={{
    position: 'relative', 
    right: '42px',
    height:'15px',
  }} 
  className="top-2 cursor-pointer "
  onClick={handleImageRemove}
>
  <CancelIcon className="text-orange-500" />
</IconButton>
    </div>
  ) : (
    <div className="mt-1 border-2 border-gray-300 border-dashed rounded-md px-6 pt-5 pb-6 flex justify-center">
      <div className="space-y-1 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          stroke="currentColor"
          fill="none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          <path
            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer rounded-md font-medium p-1 text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-1 focus-within:ring-offset-1 focus-within:ring-orange-500"
          >
            <span className="font-bold">Upload Image</span>
            <input
              onChange={handleImageUpload}
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
            />
          </label>
          <p className="pl-1">or drag and drop</p>
        </div>
        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
      </div>
    </div>
  )}
</div>



        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Title"
              name="title"
              value={productData.title}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Quantity"
              name="quantity"
              value={productData.quantity}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={14} sm={4}>
            <TextField
              fullWidth
              label="Price"
              name="price"
              value={productData.price}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discounted Price"
              name="discountedPrice"
              value={productData.discountedPrice}
              onChange={handleChange}
              type="number"
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Discount Percentage"
              name="discountPercent"
              value={productData.discountPercent}
              onChange={handleChange}
              type="number"
            />
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Top Level Category</InputLabel>
              <Select
                name="topLevelCategory"
                value={productData.topLevelCategory}
                onChange={handleChange}
                label="Material"
              >
                <MenuItem value="hardcase">Hard Case</MenuItem>
                <MenuItem value="softcase">Soft Case</MenuItem>
                <MenuItem value="glasscase">Glass Case</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Collection</InputLabel>
              <Select
                name="secondLevelCategory"
                value={productData.secondLevelCategory}
                onChange={handleChange}
                label="Collections"
              >
                <MenuItem value="elitebrand">EliteBrand Collection</MenuItem>
                <MenuItem value="anime">Anime Collection</MenuItem>
                <MenuItem value="marvel">Marvel Collection</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                name="thirdLevelCategory"
                value={productData.thirdLevelCategory}
                onChange={handleChange}
                label="Category"
              >
                <MenuItem value="nike">Nike</MenuItem>
                <MenuItem value="starbucks">Starbucks</MenuItem>
                <MenuItem value="supreme">Supreme</MenuItem>
                <MenuItem value="lewis">Lewis</MenuItem>
                <MenuItem value="adidas">adidas</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="Description"
              multiline
              name="description"
              rows={3}
              onChange={handleChange}
              value={productData.description}
            />
          </Grid>
          {productData.material.map((material, index) => (
            <Grid container item spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="material Name"
                  name="name"
                  value={material.name}
                  onChange={(event) => handlematerialChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Quantity"
                  name="material_quantity"
                  type="number"
                  onChange={(event) => handlematerialChange(event, index)}
                  required
                  fullWidth
                />
              </Grid>{" "}
            </Grid>
          ))}
          <Grid item xs={12}>
            <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20"
              material="large"
              type="submit"
            >
              Add New Product
            </Button>
            {/* <Button
              variant="contained"
              sx={{ p: 1.8 }}
              className="py-20 ml-10"
              material="large"
              onClick={()=>handleAddProducts(dressPage1)}
            >
              Add Products By Loop
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
};

export default CreateProductForm;
