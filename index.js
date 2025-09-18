import express from "express"
import WeatherRoutes from "./routes/weather.routes.js"
const PORT = 3000
const app = express()

app.use(express.json())

app.use(WeatherRoutes)

app.listen(PORT, () => console.log("Listening on port 3000"))