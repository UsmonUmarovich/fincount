import { application, Router } from "express";

const router = Router()

router.get("/services", (req, res) => {
    res.render("services")
})

export default router