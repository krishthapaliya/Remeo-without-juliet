// const orgModel = require("../Model/orgModel");

// require("dotenv").config();

// exports.createEvent = async (req, res) => {
//   try {
//     console.log(req.body);
//     const file = req.file;
//     let imageUrl;

//     if (file) {
//       // Cloudinary upload already handled by multer
//       imageUrl = file.path; // This is the Cloudinary URL
//     } else {
//       imageUrl = ""; // No image provided
//     }

//     const {
//       title,
//       description,
//       location,
//       startDate,
//       duration,
//       contact,
//       email,
//       websiteUrl,
//     } = req.body;
//     if (
//       !title ||
//       !description ||
//       !location ||
//       !startDate ||
//       !startDate ||
//       duration ||
//       contact ||
//       email
//     ) {
//       return res.status(400).json({
//         message: "Missing required fields",
//       });
//     }

//     // Create a new todo item with the image URL
//     const eventCreate = await eventSchema.create({
//       eventTitle: title,
//       eventDescription: description,
//       eventImage: imageUrl,
//       eventLocation: location,
//       startDate,
//       deadlineDate,
//       eventStatus,
//     });

//     res.status(200).json({
//       message: "Event created successfully",
//       data: eventCreate,
//     });
//   } catch (error) {
//     console.log(error.message);
//     res.status(500).json({
//       message: "Error creating Event",
//       error: error.message,
//     });
//   }
// };
