import express from "express";
import Configurations from "./configurations/Configurations.js";
import UserRoutes from "./src/routes/User.route.js";

const application = express();



application.use(express.json());
UserRoutes.routes(application);

Configurations.connectToDatabase();
Configurations.connectToPort(application);

// application.get("/recipe", (req, res) => {
//   // res.json({ "hej": "banan" });
//   res.send("Hej");
// });

// application.get("/throw", (req,res)=>{
//   res.send(Math.random().toString());
// });

// application.listen(3001, () => {
//   console.log("Server är igång");
// });