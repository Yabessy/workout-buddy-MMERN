export const UserMiddleware = async (req, res, next) => {
  const { user_id } = req.headers
  req.user_id = user_id
  next()
}
