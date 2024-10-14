// server-middleware/global-variables.js
export default (req, res, next) => {
  req.pathBefore = null;
  next();
}