import * as React from "react";
import {Box,Avatar} from "@mui/material";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { ThemeProvider } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ListItemIcon from "@mui/material/ListItemIcon";
import { customTheme } from "./them/customeThem";
import AdminNavbar from "./Navigation/AdminNavbar";
import Dashboard from "./Views/Admin";
import { Route, Routes, useNavigate } from "react-router-dom";
import DemoAdmin from "./Views/DemoAdmin";
import CreateProductForm from "./componets/createProduct/CreateProductFrom";

import "./AdminPannel.css";
import ProductsTable from "./componets/Products/ProductsTable";
import OrdersTable from "./componets/Orders/OrdersTable";
import Customers from "./componets/customers/customers";
import UpdateProductForm from "./componets/updateProduct/UpdateProduct";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { deepPurple } from "@mui/material/colors";
import { getUser, logout } from "../State/Auth/Action";
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';

const drawerWidth = 240;

// const menu = [
//   {name:"Dashboard",path:"/admin"},
//   {name:"Products",path:"/admin/products" },
//   {name:"Customers",path:"/admin/customers"},
//   {name:"Orders",path:"/admin/orders"},
//   {name:"Total Earnings",path:"/admin"},
//   {name:"Weekly Overview",path:"/admin"},
//   {name:"Monthly Overview",path:"/admin"},
//   {name:"Add Product",path:"/admin/product/create"},
// ];

export default function AdminPannel() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = React.useState(false);
  const navigate=useNavigate();
  const dispatch=useDispatch()
  const {auth}=useSelector(store=>store);

  const handleLogout = () => {
   
    dispatch(logout());
    navigate("/")

  };

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);

  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {isLargeScreen && <Toolbar />}
      <List className="font-['Gilroy'] font-semibold" >
        {/* {menu.map((item, index) => ( */}
          <ListItem className="rounded-lg " >
            <ListItemButton className="hover:rounded-lg rounded-lg  onClick={()=>navigate(`/admin`)}" >
              {/* <ListItemIcon className="align-middle rounded-lg font-semibold"> */}

                <h2  className="flex text-center hover:rounded-lg rounded-lg"> <SpaceDashboardRoundedIcon/> <span className="ml-2"> Dashboard</span></h2>
                
              {/* </ListItemIcon> */}
              {/* <ListItemText /> */}
            </ListItemButton>
          </ListItem>
          <ListItem className="rounded-lg" >
            <ListItemButton className="hover:rounded-lg rounded-lg" onClick={()=>navigate(`/admin/orders`)} >
              {/* <ListItemIcon className="align-middle rounded-lg font-semibold"> */}

                <h2  className="flex text-center hover:rounded-lg rounded-lg"> <LocalMallRoundedIcon /> <span className="ml-2">Orders</span></h2>
                
              {/* </ListItemIcon> */}
              {/* <ListItemText /> */}
            </ListItemButton>
          </ListItem>
          <ListItem className="rounded-lg" >
            <ListItemButton className="hover:rounded-lg rounded-lg" onClick={()=>navigate(`/admin/customers`)} >
              {/* <ListItemIcon className="align-middle rounded-lg font-semibold"> */}

                <h2  className="flex text-center"> <GroupsRoundedIcon/> <span className="ml-2">Customers</span></h2>
                
              {/* </ListItemIcon> */}
              {/* <ListItemText /> */}
            </ListItemButton>
          </ListItem>
          <ListItem className="rounded-lg" >
            <ListItemButton className="hover:rounded-lg rounded-lg" onClick={()=>navigate(`/admin/products`)} >
              {/* <ListItemIcon className="align-middle rounded-lg font-semibold"> */}

                <h2  className="flex text-center"> <ShoppingCartRoundedIcon/> <span className="ml-2">Products</span></h2>
                
              {/* </ListItemIcon> */}
              {/* <ListItemText /> */}
            </ListItemButton>
          </ListItem>

          <ListItem className="rounded-lg" >
            <ListItemButton className="hover:rounded-lg rounded-lg" onClick={()=>navigate(`/admin/product/create`)} >
              {/* <ListItemIcon className="align-middle rounded-lg font-semibold"> */}

                <h2  className="flex text-center"> <AddShoppingCartRoundedIcon/> <span className="ml-2">Add Product</span></h2>
                
              {/* </ListItemIcon> */}
              {/* <ListItemText /> */}
            </ListItemButton>
          </ListItem>
          <ListItem className="rounded-lg" >
            <ListItemButton className="hover:rounded-lg rounded-lg" onClick={()=>navigate(`/admin`)} >
              {/* <ListItemIcon className="align-middle rounded-lg font-semibold"> */}

                <h2  className="flex text-center"> <CurrencyRupeeRoundedIcon/> <span className="ml-2">Earning</span></h2>
                
              {/* </ListItemIcon> */}
              {/* <ListItemText /> */}
            </ListItemButton>
          </ListItem>
          <ListItem className="rounded-lg" >
            <ListItemButton rounded-lg className="hover:rounded-lg rounded-lg" onClick={()=>navigate(`/admin`)} >
              {/* <ListItemIcon className="align-middle rounded-lg font-semibold"> */}

                <h2  className="flex text-center"> <QueryStatsRoundedIcon/> <span className="ml-2">Overview</span></h2>
                
              {/* </ListItemIcon> */}
              {/* <ListItemText /> */}
            </ListItemButton>
          </ListItem>
         
        {/* ))} */}
      </List>

      <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Divider />
       
        <ListItem onClick={handleLogout}  disablePadding >
            <ListItemButton>
            <Avatar
                        className="text-white"
                        onClick={handleLogout}
                       
                        sx={{
                          bgcolor: deepPurple[500],
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.userName[0].toUpperCase()}
                      </Avatar>
              <ListItemText className="ml-5 font-['Gilroy'] font-semibold" primary={"Logout"} />
            </ListItemButton>
          </ListItem>
        
      </List>
    </Box>
  );

  const handleSideBarViewInMobile = () => {
    setSideBarVisible(true);
  };

  const handleCloseSideBar = () => {
    setSideBarVisible(false);
  };

  const drawerVariant = isLargeScreen ? "permanent" : "temporary";

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
        <CssBaseline />
        <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} />

        <Drawer
          variant={drawerVariant}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              ...(drawerVariant === "temporary" && {
                top: 0,
                [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                  {
                    position: "fixed",
                    left: 0,
                    right: 0,
                    height: "100%",
                    zIndex: (theme) => theme.zIndex.drawer + 2,
                  },
              }),
            },
          }}
          open={isLargeScreen || sideBarVisible}
          onClose={handleCloseSideBar}
        >
          {drawer}
        </Drawer>
        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={ <Dashboard />}></Route>
            <Route path="/product/create" element={<CreateProductForm/>}></Route>
            <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route>
            <Route path="/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<Customers/>}></Route>
            <Route path="/demo" element={<DemoAdmin />}></Route>
          </Routes>
         
        </Box>
      </Box>
    </ThemeProvider>
  );
}
