import express from 'express';
import { signup,login,logout,refreshToken } from '../controllers/auth.controller.js';
import { getProfile } from '../controllers/auth.controller.js';
import { protectRoute } from '../middlewares/auth.middleware.js';

const router=express.Router();

router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.post("/refresh-token",refreshToken);
//TODO: implement getprofile later
router.get("/profile",protectRoute,getProfile);

export default router;