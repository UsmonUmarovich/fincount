// imports (start)
import express from "express"
import cors from "cors"
import { engine } from "express-handlebars"
import HomeRouter from "./routes/home.routes.js"
import AboutRouter from "./routes/about.routes.js"
import ServiceRouter from "./routes/services.routes.js"
import PricingRouter from "./routes/pricing.routes.js"
import ContactRouter from "./routes/contact.routes.js"
import CommentRouter from "./routes/comment.routes.js"
// imports (end)

// app (start)
const app = express()
// app (end)

// cors (start)
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// cors (end)

// hbs (start)
app.engine(".hbs", engine({ extname: ".hbs" }))
app.set("view engine", ".hbs")
app.set("views", "./views")
// hbs (end)

// style use (start)
app.use(express.static("public"))
// style use (end)

// use router (start)
app.use(HomeRouter)
app.use(AboutRouter)
app.use(ServiceRouter)
app.use(PricingRouter)
app.use(ContactRouter)
app.use(CommentRouter)
// use router (end)

// listen server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})