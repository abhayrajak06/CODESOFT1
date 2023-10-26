import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name) return res.send({ message: "Name is required" });
    if (!email) return res.send({ message: "Email is required" });
    if (!password) return res.send({ message: "Password is required" });
    if (!phone) return res.send({ message: "Phone is required" });

    //checking for existing user
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(202).send({
        success: true,
        message: "Useer Already exists",
      });
    }

    //register user
    //hashing the password
    const hashedPassword = await hashPassword(password);

    //saving the record
    const user = new userModel({
      name,
      email,
      password: hashedPassword,
      phone,
    }).save();

    res.status(200).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while register",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    //checking user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email not registerd",
      });
    }

    //match the password
    const match = await comparePassword(password, user?.password);
    if (!match) {
      return res.status(500).send({
        success: false,
        message: "Invalid Password",
      });
    }

    //token
    const token = await JWT.sign({ _id: user?._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        name: user?.name,
        email: user?.email,
        phone: user?.phone,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error while login",
      error,
    });
  }
};
