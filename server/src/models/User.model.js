import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = Schema({
  username: { 
    type: String,
    unique: true,
    allowNull: false,
    required: true,
    // lowecase: true
  },
  age: {
    type: Number,
    min: [18, "You need to be above 17"],
    max: [90, "Sorry"],
    required: false
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const UserModel = model("user", userSchema);
export default UserModel;

