const { Router } = require("express");
const fun=require("../controller/functions")
const router=Router()


router.get("/",fun.art)
router.get("/arti",fun.art)

router.get("/add",fun.addart)
router.post("/add",fun.addart)

router.get("/add/:id",fun.artId)
router.post("/add/:id",fun.artIddel)

router.get("/edit",fun.artedit)
router.post("/edit",fun.artedit)

module.exports=router