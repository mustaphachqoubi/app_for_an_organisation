import express from "express";
const router = express.Router()
import {getDepart, createDepart, deleteDepart, updateDepart } from "../controllers/depart.mjs";

router.get("/", getDepart)
router.post("/", updateDepart)
router.delete("/:id", deleteDepart)

export default router
