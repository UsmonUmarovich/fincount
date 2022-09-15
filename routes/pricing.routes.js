import Router from "express";

const router = Router();

router.get("/pricing", (req, res) => {
  try {
    res.render("pricing");
  } catch (err) {
    console.log("Internal Server Error");
    err;
  }
});

export default router;
