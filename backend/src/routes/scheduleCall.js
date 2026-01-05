import express from "express";
import { scheduleCall } from "../controllers/scheduleCallController.js";

const router = express.Router();

router.post("/schedule-call", scheduleCall);

export default router;
