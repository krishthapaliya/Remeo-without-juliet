const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../cloudinaryConfig"); // Import your Cloudinary configuration

// Create a new instance of CloudinaryStorage
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    allowedFormats: ["jpg", "jpeg", "png", "gif"], // Optional: specify allowed formats
  },
});

// Create the multer instance with Cloudinary storage
const upload = multer({ storage: storage });

module.exports = upload;
