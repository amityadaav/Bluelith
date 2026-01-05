import pool from "../config/db.js";

export const createProject = async (req, res) => {
  try {
    const { name, phone, type, description, timeline, budget } = req.body;

    if (!name || !phone || !type || !description) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const result = await pool.query(
      `INSERT INTO projects (name, phone, type, description, timeline, budget)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [name, phone, type, description, timeline, budget]
    );

    res.status(201).json({
      success: true,
      message: "Project submitted successfully",
      data: result.rows[0],
    });
  } catch (error) {
    console.error("Create Project Error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
