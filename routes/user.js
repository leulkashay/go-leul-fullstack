const express=require('express');
const router=express.Router();

const uesrCtr=require('../controllers/user');

router.post('/signup',uesrCtr.signup);
router.post('/login',uesrCtr.login);


module.exports=router;