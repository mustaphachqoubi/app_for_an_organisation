import express from "express"
const router = express.Router()
import { getArrivee, createArrivee, deleteArrivee } from "../controllers/arrivee.mjs"

router.get("/", getArrivee)
router.post("/", createArrivee)
router.delete("/:id", deleteArrivee)

export default router
