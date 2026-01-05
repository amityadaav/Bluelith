import { createContact, getAllContacts } from "../models/contact.js";
import pool from "../config/db.js";
export const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await createContact(name, email, message);

    res.status(201).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    next(error);
  }
};

export const fetchContacts = async (req, res, next) => {
  try {
    const contacts = await getAllContacts();
    res.json({
      success: true,
      data: contacts,
    });
  } catch (error) {
    next(error);
  }
};
