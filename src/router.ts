import express from 'express';
const router = express.Router();
import memberController from "./controllers/member.controller";

// Restaurants router endpoints
router.post("/login", memberController.login);
// browser faqat GET methodni qabul qiladi
router.post("/signup", memberController.signup);

export default router;