import pool from "../config/db.js";

export const createContact = async (name, email, message) => {
  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;
  const values = [name, email, message];
  const { rows } = await pool.query(query, values);
  return rows[0];
};

export const getAllContacts = async () => {
  const { rows } = await pool.query(
    "SELECT * FROM contacts ORDER BY created_at DESC"
  );
  return rows;
};
