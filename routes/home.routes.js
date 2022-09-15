import { Router } from "express";

const router = Router();

router.get("/home", (req, res) => {
  try {
    res.render("home.hbs");
  } catch (err) {
    console.log("Internal Server Error");
    err;
  }
});

export default router;
