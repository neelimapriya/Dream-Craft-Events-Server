import { Router } from "express";
import authVerify from "../api/v1/auth/authVerify.js";
import allUsers from "../api/v1/users/allUsers.js";
import checkUserRole from "../api/v1/users/checkUserRole.js";
import editUser from "../api/v1/users/editUser.js";
import singleUser from "../api/v1/users/singleUser.js";
import userSignIn from "../api/v1/users/userSignIn.js";
import userSignUp from "../api/v1/users/userSignUp.js";

const router = Router()
router.post('/signup', userSignUp)
router.post('/login', userSignIn)
router.get('/check-user-role/:email', checkUserRole)
router.post('/token-verify', authVerify)
router.post('/users', allUsers)
router.post('/user/:id', singleUser)
router.put('/edit-user/:id', editUser)

export default router