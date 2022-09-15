import {  Router } from "express";

const router = Router();

router.get("/services", (req, res) => {
  try {
    res.render("services");
  } catch (err) {
    console.log("Internal Server Error");
    err;
  }
});

export default router;
