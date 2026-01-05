import express from "express";
import {
  submitContact,
  fetchContacts,
} from "../controllers/contact.js";

const router = express.Router();

router.post("/", submitContact);
router.get("/", fetchContacts);

export default router;
