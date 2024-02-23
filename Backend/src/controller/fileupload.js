const Product = require("../models/product_Model");

exports.localFileUpload = async (req, res) => {
  try {
    const file = req.files.file;
    console.log("File is here -> ",file);
    
    let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
    console.log("Path ->",path)
    file.mv(path, (err) => {
      console.log(err);
    });

    res.json({
      success: true,
      message: "Local File Uploaded Successfully",
    });
  } catch (error) {
    console.log(error);
  }
};
