const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl = process.env.MONGO_URL;

// Check if the environment variable is defined
if (!mongoUrl) {
  console.error("MongoDB connection URL is not defined in the environment variables.");
  process.exit(1); // Exit the process if the connection URL is not defined
}


exports.connectDB = () => {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            console.log('Database connected succcessfully');
        })
        .catch(error => {
            console.log(`Error while connecting server with Database`);
            console.log(error);
            process.exit(1);
        })
};

