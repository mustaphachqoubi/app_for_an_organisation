import express from "express";
const router = express.Router()
import {getDepart, createDepart, deleteDepart } from "../controllers/depart.mjs";

router.get("/", getDepart)
router.post("/", createDepart)
router.delete("/:id", deleteDepart)

export default router
