import Router from "express";

const router = Router();

router.get("/contact", (req, res) => {
    try{
        res.render("contact")
    }
    catch(err){
        console.log("Internal Server Error");
        err
    }
})

export default router;