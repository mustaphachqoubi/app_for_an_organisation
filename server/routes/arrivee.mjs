import express from "express"
const router = express.Router()
import { getArrivee, createArrivee } from "../controllers/arrivee.mjs"

router.get("/", getArrivee)
router.post("/", createArrivee)

export default router