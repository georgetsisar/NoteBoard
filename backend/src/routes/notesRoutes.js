import { createNote, deleteNote, getAllNotes, updateNote, getNoteById } from "../controllers/notesController.js";
import express from "express";

const router = express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;