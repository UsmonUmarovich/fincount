import { Router } from "express";
import { createUser } from "../services/user.service.js";

const router = Router();

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  const { name, surname, username, password } = req.body
  createUser(name, surname, username, password)
  if (!name.trim && !surname.trim && !username.trim && !password.trim) {
    res.redirect("/home")
  }
  else {
    return;
  }
})

export default router;
