import express from "express";
const router = express.Router()
import {getDepart, createDepart} from "../controllers/depart.mjs";

router.get("/", getDepart)
router.post("/", createDepart)

export default router