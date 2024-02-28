import express from "express"
import { getAll, getByName } from "../controllers/user"
const router = express.Router()

router.get("/", getAll)
router.get("/users", getByName)


export default router;