import express from "express"
import cors from "cors"
import { engine } from "express-handlebars"
import HomeRouter from "./routes/home.routes.js"
import AboutRouter from "./routes/about.routes.js"
import ServiceRouter from "./routes/services.routes.js"
import PricingRouter from "./routes/pricing.routes.js"
import ContactRouter from "./routes/contact.routes.js"

// app
const app = express()

// cors
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// hbs
app.engine(".hbs", engine({ extname: ".hbs" }))
app.set("view engine", ".hbs")
app.set("views", "./views")

// style use
app.use(express.static("public"))

// use router
app.use(HomeRouter)
app.use(AboutRouter)
app.use(ServiceRouter)
app.use(PricingRouter)
app.use(ContactRouter)

// listen server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
})