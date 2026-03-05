import { Request, Response } from "express";
import db from "../models/db.ts";

export const submitContact = (req: Request, res: Response) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  try {
    const stmt = db.prepare(
      "INSERT INTO contacts (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)"
    );
    const result = stmt.run(name, email, phone, service, message);
    res.status(201).json({ success: true, id: result.lastInsertRowid });
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to save contact submission." });
  }
};

export const getLeads = (req: Request, res: Response) => {
  try {
    const stmt = db.prepare("SELECT * FROM contacts ORDER BY created_at DESC");
    const leads = stmt.all();
    res.json(leads);
  } catch (error) {
    console.error("Database error:", error);
    res.status(500).json({ error: "Failed to fetch leads." });
  }
};
