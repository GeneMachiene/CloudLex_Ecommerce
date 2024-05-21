const jwt = require('jsonwebtoken');

exports.verifyToken = (req, res, next) => {
  let accesstoken = req.cookies.jwt;

  // if ther is no token in the cookies, request is unauthorized
  if (!accesstoken){
    return res.status(403).json({
      error: "Unauthorized",
    });
  }

  let payload;
  try {
    // verify the token jwt.verify
    // throws an error if token has expired or has invalid sign
    payload = jwt.verify(accesstoken, process.env.JWT_SECRET);
    req._id = payload._id;

    next();
  } catch (e){
    return res.status(403).json({
      error: "Unauthorized",
    });
  }

};