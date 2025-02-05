import User from "../Models/auth.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../Lib/utilis.js";

//Register :
export const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    if (!userName || !email || !password) {
      return res
        .status(201)
        .json({ message: "Input fields cant be empty", error: true });
    }

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(201)
        .json({ message: "Usedr already exists", error: true });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User({
      userName,
      email,
      password: hashPassword,
    });

    if (newUser) {
      generateToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        message: "User Registeration Successfull",
        error: false,
        data: newUser,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Issue", error: true });
  }
};

//Login :
export const login = async (req, res) => {};

//logout
export const logout = (req, res) => {};
