import express from "express";
import { submitContact, getLeads } from "../controllers/contactController.ts";

const router = express.Router();

router.post("/", submitContact);
router.get("/leads", getLeads); // Admin endpoint to view leads

export default router;
