import dotenv from "dotenv";
dotenv.config();

export const generateToken = (user, message, statusCode, res) => {
  const jwtSecret = process.env.JWT_SECRET_KEY; // Use environment variable for JWT secret
  if (!jwtSecret) {
    return res.status(500).json({ success: false, message: "JWT secret key is not defined." });
  }

  const token = user.generateJsonWebToken(jwtSecret);

  // Determine the cookie name based on the user's role
  const cookieName = user.role === 'Admin' ? 'adminToken' : 'patientToken';

  res
    .status(statusCode)
    .cookie(cookieName, token, {
      expires: new Date(
        Date.now() + (parseInt(process.env.COOKIE_EXPIRE, 10) || 7) * 24 * 60 * 60 * 1000 // Default to 7 days if COOKIE_EXPIRE is not set
      ),
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Secure cookies in production
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
