import { Router } from "express"
import { getLocation, getWeather, getWeatherFromLocation } from "../controllers/weather.controller.js"

const router = Router()

router.get("/weather", getWeather)
router.get("/location", getLocation)
router.get("/weather/location", getWeatherFromLocation)

export default router