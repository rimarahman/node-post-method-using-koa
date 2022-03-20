const Router = require("koa-router");
const { createUser } = require("./Controllers/users");
 
const router = new Router();

router.post("/users",createUser);

module.exports = router;



