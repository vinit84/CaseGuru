// app create kiya
const express=require("express");
const app=express();
// // PORT Kiya Yaha
// require("dotenv").config();
// const PORT = process.env.PORT || 3000;
// // middleware add kiya yaha
// app.use(express.json());
// const fileUpload = require("express-fileupload");

// app.use(fileUpload({
//     useTempFiles : true,
//     tempFileDir : '/tmp/'
// }));

// // db se connect kiya
// const db = require("./config/db");
// db.connect();

// // cloud se connect kiya
// const cloudinary = require("./config/cloudinary");
// cloudinary.cloudinaryConnect();

// // api route mount kiya
// const Upload = require("./routes/FileUpload");
// app.use("/api/v1/upload",Upload);

// // activation server
// app.listen(PORT,()=>{
//     console.log(`App is running at ${PORT}`);
// })

// *****************************************************************

const cors=require("cors")

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    return res.status(200).send({ message: "welcome to ecommerce", status: true });
})

const authRouters = require("./routes/authRoute.js")
app.use("/auth",authRouters);

const userRouters=require("./routes/userRoute.js")
app.use("/api/users",userRouters);

const userController = require("./controller/userController.js");
app.delete("/api/users/:userId", userController.deleteUser);

const productRouter = require("./routes/productRoute.js");
app.use("/api/products",productRouter)

const adminproductRouter=require("./routes/adminproductRoute.js");
app.use("/api/admin/products",adminproductRouter)

const cartRouter=require("./routes/cartRoute.js");
app.use("/api/cart",cartRouter)

const cartItemRouter=require("./routes/cartItemRoute.js");
app.use("/api/cart_Items",cartItemRouter)

const orderRouter=require("./routes/orderRoute.js");
app.use("/api/orders",orderRouter);

const paymentRouter=require("./routes/paymentRoute.js");
app.use('/api/payments',paymentRouter)

const adminorderRouter=require("./routes/adminorderRoute.js");
app.use("/api/admin/orders",adminorderRouter);

const reviewRouter=require("./routes/reviewRoute.js");
app.use("/api/reviews",reviewRouter)

const ratingRouter=require("./routes/ratingRoute.js");
app.use("/api/ratings",ratingRouter)

const adminOrderRoutes=require("./routes/adminorderRoute.js");
app.use("/api/admin/orders",adminOrderRoutes);


module.exports=app;



