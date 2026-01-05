// import pool from "../config/db.js";

// export const scheduleCall = async (req, res) => {
//   try {
//     console.log("REQ BODY:", req.body); // 👈 DEBUG

//     const { name, email, service, date, time } = req.body;

//     if (!name || !email || !service || !date || !time) {
//       return res.status(400).json({ message: "All fields required" });
//     }

//     await pool.query(
//       `INSERT INTO scheduled_calls 
//        (name, email, service, call_date, call_time)
//        VALUES ($1, $2, $3, $4, $5)`,
//       [name, email, service, date, time]
//     );

//     res.status(201).json({ message: "Call scheduled successfully" });
//   } catch (error) {
//     console.error("SCHEDULE CALL ERROR:", error.message);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };
import pool from "../config/db.js";

export const scheduleCall = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, email, phone, service, date, time } = req.body;

    // ✅ Validation
    if (!name || !email || !phone || !service || !date || !time) {
      return res.status(400).json({ message: "All fields required" });
    }

    // ✅ Phone number sanity check
    if (!/^[0-9]{10,15}$/.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number" });
    }

    await pool.query(
      `INSERT INTO scheduled_calls 
       (name, email, phone, service, call_date, call_time)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, email, phone, service, date, time]
    );

    res.status(201).json({ message: "Call scheduled successfully" });
  } catch (error) {
    console.error("SCHEDULE CALL ERROR:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
