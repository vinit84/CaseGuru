import React, { useState , useRef } from "react";
import { Grid } from "@mui/material";
import { AddressCard } from "../AddressCard/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../../State/Order/Action";
import { store } from "../../../State/store";
import BackdropComponent from "../BackDrop/Backdrop";

export default function DeliveryAddress() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");
  const { auth } = useSelector((store) => store);
  const [selectedAddress, setSelectedAdress] = useState(null);

  // console.log("auth", auth);

  // const firstnameRef = useRef(null);
  // const lastnameRef = useRef(null);
  // const emailRef = useRef(null);
  // const mobileRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // eslint-disable-next-line no-console
    if(isValideMail && isValidlastName && isValidfirstName && isValidzipCode && isValidMobileNumber){
      const data = new FormData(event.currentTarget);
    const address = {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      streetAddress: data.get("streetAddress"),
      city: data.get("city"),
      country: data.get("country"),
      state: data.get("state"),
      zipCode: data.get("zipCode"),
      mobile: data.get("phoneNumber"),
    };

    dispatch(createOrder({ address, jwt, navigate }));
    // after perfoming all the opration
  }
  else{
    window.alert("Fill all the details properly")
  }
  };

  

  const handleCreateOrder = (item) => {
    dispatch(createOrder({ address: item, jwt, navigate }));
  };

  const states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  const cities = {
    'Andhra Pradesh': ['Hyderabad', 'Visakhapatnam', 'Vijayawada'],
'Arunachal Pradesh': ['Itanagar', 'Naharlagun', 'Tawang'],
'Assam': ['Guwahati', 'Dibrugarh', 'Silchar'],
'Bihar': ['Patna', 'Gaya', 'Muzaffarpur'],
'Chhattisgarh': ['Raipur', 'Bhilai', 'Bilaspur'],
'Goa': ['Panaji', 'Margao', 'Vasco da Gama'],
'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara'],
'Haryana': ['Faridabad', 'Gurgaon', 'Hisar'],
'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala'],
'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad'],
'Karnataka': ['Bangalore', 'Mysore', 'Hubli'],
'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode'],
'Madhya Pradesh': ['Bhopal', 'Indore', 'Jabalpur'],
'Maharashtra': ['Mumbai', 'Pune', 'Nagpur'],
'Manipur': ['Imphal', 'Thoubal', 'Bishnupur'],
'Meghalaya': ['Shillong', 'Tura', 'Jowai'],
'Mizoram': ['Aizawl', 'Lunglei', 'Saiha'],
'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung'],
'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela'],
'Punjab': ['Amritsar', 'Ludhiana', 'Jalandhar'],
'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur'],
'Sikkim': ['Gangtok', 'Namchi', 'Mangan'],
'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
'Telangana': ['Hyderabad', 'Warangal', 'Nizamabad'],
'Tripura': ['Agartala', 'Udaipur', 'Dharmanagar'],
'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
'Uttarakhand': ['Dehradun', 'Haridwar', 'Rishikesh'],
'West Bengal': ['Kolkata', 'Howrah', 'Asansol'],
  };

  const [selectedState, setSelectedState] = useState("Andhra Pradesh");
  const [selectedCity, setSelectedCity] = useState("");

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  // validation

    const [mobileNumber, setMobileNumber] = useState('');
    const [isValidMobileNumber, setIsValidMobileNumber] = useState(true);
  
    const handleMobileNumberChange = (e) => {
      const inputValue = e.target.value;
      const regex = /^[0-9]{10}$/; // Assuming a 10-digit mobile number
  
      if (regex.test(inputValue)) {
        setIsValidMobileNumber(true);
      } else {
        setIsValidMobileNumber(false);
      }
  
      setMobileNumber(inputValue);
    };
    const [isValidzipCode, setIsValidzipCode] = useState(true);
  
    const [zipCode, setzipCode] = useState('');
    const handlezipCodeChange = (e) => {
      const inputValue = e.target.value;
      const regex = /^[0-9]{6}$/; // Assuming a 10-digit mobile number
  
      if (regex.test(inputValue)) {
        setIsValidzipCode(true);
      } else {
        setIsValidzipCode(false);
      }
  
      setzipCode(inputValue);
    };
    const [isValidfirstName, setIsValidfirstName] = useState(true);
    const [firstName, setfirstName] = useState('');
    const handlefirstNameChange = (e) => {
      const inputValue = e.target.value;
      const regex = /^[A-Za-z\s]+$/; // Assuming a 10-digit mobile number
  
      if (regex.test(inputValue)) {
        setIsValidfirstName(true);
      } else {
        setIsValidfirstName(false);
      }
  
      setfirstName(inputValue);
    };
    const [isValidlastName, setIsValidlastName] = useState(true);
    const [lastName, setlastName] = useState('');
    const handlelastNameChange = (e) => {
      const inputValue = e.target.value;
      const regex = /^[A-Za-z\s]+$/; // Assuming a 10-digit mobile number
  
      if (regex.test(inputValue)) {
        setIsValidlastName(true);
      } else {
        setIsValidlastName(false);
      }
  
      setlastName(inputValue);
    };
    const [isValideMail, setIsValideMail] = useState(true);
    const [eMail, seteMail] = useState('');
    const handleeMailChange = (e) => {
      const inputValue = e.target.value;
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i; // Assuming a 10-digit mobile number
  
      if (regex.test(inputValue)) {
        setIsValideMail(true);
      } else {
        setIsValideMail(false);
      }
  
      seteMail(inputValue);
    };



  return (
    <div className="mt-[5rem] lg:px-20 ">
      <Grid container spacing={4} className="justify-center">
        {/* <Grid
          xs={3.5}
          className="rounded-md  mr-5 shadow h-[35rem] sm:rounded-md overflow-y-scroll "
        >
           {auth.user?.address.map((item) => (
          <div className="p-5 py-8 border-b cursor-pointer" onClick={() => setSelectedAdress(item)}>
            <div>

            <AddressCard address={item}/>
            </div>
            {selectedAddress?.id === item.id && (
            <button
              type="submit"
              onClick={()=>handleCreateOrder(item)}
              className=" border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm text-white  font-semibold hover:bg-orange-600 bg-[#FF5612] font-['Gilroy'] focus:outline-none "
            >
              Deliver Here
            </button>
             )}
          </div>
            ))}
        </Grid> */}

        <Grid ml-4>
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9 font-medium font-['Gilroy']">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="shadow-xl  sm:rounded-md sm:overflow-hidden">
                <div className="bg-white rounded-lg py-6 px-4 space-y-6 sm:p-6">
                  <div>
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      Delivery Address
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Use a permanent address where you can recieve order.
                    </p>
                  </div>

                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        id="firstName"
                        // ref={firstnameRef}
                        value={firstName}
        onChange={handlefirstNameChange}
                        autoComplete="given-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                      {!isValidfirstName && <p style={{ color: 'red' }}>Invalid First Name.</p>}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        id="lastName"
                        // ref={lastnameRef}
                        value={lastName}
        onChange={handlelastNameChange}
                        autoComplete="family-name"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                      {!isValidlastName && <p style={{ color: 'red' }}>Invalid Last Name.</p>}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        required
                        type="text"
                        name="email"
                        id="email"
                        value={eMail}
        onChange={handleeMailChange}
                        autoComplete="email"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                      {!isValideMail && <p style={{ color: 'red' }}>Invalid E-mail address.</p>}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone no.
                      </label>
                      <input
                        required
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                        autoComplete="phoneNumber"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                      {!isValidMobileNumber && <p style={{ color: 'red' }}>Invalid mobile number.</p>}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        required
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option selected>India</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                      required
                       
                        type="text"
                        name="streetAddress"
                        id="streetAddress"
                        autoComplete="street-address"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <select
                      required
                        onChange={handleCityChange}
                        value={selectedCity}
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      >
                        <option value="">Select a city</option>
                        {cities[selectedState].map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                      </select>
                      {/* <input
                        required
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      /> */}
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <select
                        value={selectedState}
                        onChange={handleStateChange}
                        name="state"
                        id="state"
                        autoComplete="address-level1"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                        required
                      >
                        <option value="">Select a state</option>
                        {states.map((state, index) => (
                          <option key={index} value={state}>
                            {state}
                          </option>
                        ))}
                      </select>
                      {/* <input
                        required
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="address-level1"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      /> */}
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        required
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        value={zipCode}
        onChange={handlezipCodeChange}
                        autoComplete="postal-code"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                      />
                      {!isValidzipCode && <p style={{ color: 'red' }}>Invalid Zip Code.</p>}
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    className="font-semibold hover:bg-orange-600 bg-[#FF5612] font-['Gilroy'] border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
          <BackdropComponent open={auth.loading} />
        </Grid>
      </Grid>
    </div>
  );
}

// import * as React from "react";
// import { Grid, TextField, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

// import userEvent from "@testing-library/user-event";

// import { useState } from "react";
// import { createOrder } from "../../../State/Order/Action";
// import AddressCard from "../AddressCard/AddressCard";

// export default function DeliveryAddress({ handleNext }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const jwt = localStorage.getItem("jwt");
//   const { auth } = useSelector((store) => store);
//   const [selectedAddress, setSelectedAdress] = useState(null);

//   // console.log("auth", auth);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     // eslint-disable-next-line no-console

//     const address = {
//       firstName: data.get("firstName"),
//       lastName: data.get("lastName"),
//       streetAddress: data.get("address"),
//       city: data.get("city"),
//       state: data.get("state"),
//       zipCode: data.get("zip"),
//       mobile: data.get("phoneNumber"),
//     };

//     dispatch(createOrder({ address, jwt, navigate }));
//     // after perfoming all the opration
//     handleNext();
//   };

//   const handleCreateOrder = (item) => {
//     dispatch(createOrder({ address:item, jwt, navigate }));
//     handleNext();
//   };

//   return (
//     <Grid container spacing={4}>
//       <Grid item xs={12} lg={5}>
//         <Box className="border rounded-md shadow-md h-[30.5rem] overflow-y-scroll ">
//           {auth.user?.addresses.map((item) => (
//             <div
//               onClick={() => setSelectedAdress(item)}
//               className="p-5 py-7 border-b cursor-pointer"
//             >
//               {" "}
//               <AddressCard address={item} />
//               {selectedAddress?.id === item.id && (
//                 <Button
//                   sx={{ mt: 2 }}
//                   size="large"
//                   variant="contained"
//                   color="primary"
//                   onClick={()=>handleCreateOrder(item)}
//                 >
//                   Deliverd Here
//                 </Button>
//               )}
//             </div>
//           ))}
//         </Box>
//       </Grid>
//       <Grid item xs={12} lg={7}>
//         <Box className="border rounded-md shadow-md p-5">
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="firstName"
//                   name="firstName"
//                   label="First Name"
//                   fullWidth
//                   autoComplete="given-name"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="lastName"
//                   name="lastName"
//                   label="Last Name"
//                   fullWidth
//                   autoComplete="given-name"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   id="address"
//                   name="address"
//                   label="Address"
//                   fullWidth
//                   autoComplete="shipping address"
//                   multiline
//                   rows={4}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="city"
//                   name="city"
//                   label="City"
//                   fullWidth
//                   autoComplete="shipping address-level2"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="state"
//                   name="state"
//                   label="State/Province/Region"
//                   fullWidth
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="zip"
//                   name="zip"
//                   label="Zip / Postal code"
//                   fullWidth
//                   autoComplete="shipping postal-code"
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField
//                   required
//                   id="phoneNumber"
//                   name="phoneNumber"
//                   label="Phone Number"
//                   fullWidth
//                   autoComplete="tel"
//                 />
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   sx={{ padding: ".9rem 1.5rem" }}
//                   size="large"
//                   type="submit"
//                   variant="contained"
//                   color="primary"
//                 >
//                   Deliverd Here
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// }