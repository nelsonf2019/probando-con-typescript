import express from "express"
import { generateCode, login } from "../controllers/auth"

const router = express.Router()
//http://localhost:3000/api/auth/login/nelsonfercher@gmail.com/
router.post("/login/:email", login)
router.post("login/:email/code", generateCode)

export default router;
