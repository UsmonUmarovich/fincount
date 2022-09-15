import Router from "express";

const router = Router();

router.get("/about", (req, res) => {
  try {
    res.render("about");
  } catch (err) {
    console.log("Internal Server Error");
    err;
  }
});

export default router;
