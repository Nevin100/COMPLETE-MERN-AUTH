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
        .json({ message: "User already exists", error: true });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = await User({
      userName,
      email,
      password: hashPassword,
    });

    if (newUser) {
      const token = generateToken(newUser._id, res);
      await newUser.save();
      res.status(200).json({
        message: "User Registeration Successfull",
        error: false,
        data: newUser,
        accessToken: token,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Issue", error: true });
  }
};

//Login :
export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(401)
        .json({ message: "Fields cant be empty!", error: true });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(401)
        .json({ message: "No Such user exists", error: true });
    }

    const isPassword = await bcrypt.compare(password, user.password);
    if (!isPassword) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials", error: true });
    }

    const token = generateToken(user._id, res);
    res.status(200).json({
      message: "Login Successfuly",
      data: user,
      accessToken: token,
      error: false,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Issue ", error: true });
  }
};

//logout
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "");
    res.status(200).json({ error: false, message: "Logout Successfull" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: true, message: "Internal server Issue" });
  }
};
