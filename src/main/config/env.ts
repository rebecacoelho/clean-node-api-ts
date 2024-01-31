export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://rebecasantoscoelho:Sq7Hbho8B0L43cFv@clean-api-node.fbjogta.mongodb.net/clean-api-node?retryWrites=true&w=majority ',
  port: process.env.PORT || 5050,
  jwtSecret: process.env.JWT_SECRET || 'tj67O==5H'
}
