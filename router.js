const Router = require("koa-router");
const { createUser,processFiles } = require("./Controllers/users");
 
const router = new Router();

router.post("/users",createUser);
router.get("/video",processFiles);


module.exports = router;



