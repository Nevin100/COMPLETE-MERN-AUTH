import jwt from "jsonwebtoken";
import User from "../Models/auth.model.js";

const authenticateToken = async (req, res) => {
  const token = req.cookies.jwt;
  if (!token) {
    return res.status(400).json({ message: "No token recieved", error: true });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(400).json({
        message: "Token Unauthorized",
        error: true,
        authenticated: false,
      });
    }
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res
        .status(400)
        .json({ message: "No Such user exists", error: true });
    }

    req.user = user;
    res
      .status(200)
      .json({ message: "Token Authorized", authenticated: true, error: false });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Authentication failed", error: true });
  }
};

export default authenticateToken;
