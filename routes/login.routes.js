import { Router } from "express";
import { findUser } from "../services/user.service.js";

const router = Router();

router.get("/", (req, res) => {
  res.render("login.hbs");
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  findUser(username, (user) => {
    if (!user) {
      res.send("User not found!");
    } else if (user.password != password) {
      res.send("Username or passwod is wrong!");
    } else {
      res.render("home.hbs");
    }
  });

  if (!username.trim && !password.trim) {
    res.redirect("/home")
  }
  else{
    return;
  }
});

export default router;
