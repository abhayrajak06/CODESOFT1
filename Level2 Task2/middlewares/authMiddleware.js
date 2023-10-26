import JWT from "jsonwebtoken";

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authorization token is missing",
      });
    }

    const decode = await JWT.verify(token, process.env.JWT_SECRET);

    // Store the decoded user data in req.user
    req.user = decode;

    // Continue processing the request
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user?.role !== 1) {
      return res.status(401).send({
        success: false,
        message: "Unauthorized access",
      });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Error in isAdmin middleware",
    });
  }
};
