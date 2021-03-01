import UserModel from "../models/User.model.js";

// /**
//  * @param {number | string} request The value of the product.
//  * @param {string} response The value of the product.
//  */
const createUser = async (request, response) => {

  const user = new UserModel({
    username: request.body.username,
    password: request.body.password,
    age: request.body.age
  });


  try {
    const databaseResponse = await user.save();
    response.status(201).send(databaseResponse);
  } catch (e) {
    response.status(500).send({
      message: "Error while trying to create user",
      stack: e
    });
  }
};


const getAllUsers = async (request, response) => {
  try {
    const databaseResponse = await UserModel.find();
    response.status(200).send(databaseResponse);
  } catch (e){
    response.status(500).send({
      message: e.message
    });
  }
};

export default {
  createUser,
  getAllUsers
};