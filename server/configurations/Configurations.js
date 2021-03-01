import dotenv from "dotenv";
import mongoose  from "mongoose";

dotenv.config();
const { DB_CONNECTIONSTRING, HTTP_PORT } = process.env;

const connectToDatabase = async() => {
  try {
    await mongoose.connect(DB_CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
    console.log("Success connect to DB");
  } catch (error){
    console.warn("ERROR OCCURED TRYING TO CONNECTO TO THE DB...");
    process.exit();
  }
};

const connectToPort = (application) => {
  application.listen(HTTP_PORT, () => {
    console.log("Server is running on port: " + HTTP_PORT);
  });
};

export default {
  connectToDatabase,
  connectToPort
};