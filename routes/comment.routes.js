import { Router } from "express";
import {
  allComments,
  createComment,
  deleteComment,
} from "../services/comment.service.js";

const router = Router();
const comments = [];

router.get("/comment", (req, res) => {
  try {
    allComments((comment) => {
      res.render("comment", { comment });
    });
  } catch (err) {
    console.log("Internal Server Error");
    err;
  }
});

router.post("/comment/add", (req, res) => {
  try {
    const { name, surname, message } = req.body;
    createComment(name, surname, message);
    res.redirect("/comment");
  } catch (err) {
    console.log("Internal Server Error");
    err;
  }
});

router.get("/comment/delete/:id", (req, res) => {
  try {
    deleteComment(req.params.id);
    res.redirect("/comment");
  } catch (err) {
    console.log("Internal Server Error");
    err;
  }
});

export default router;
