const express=require('express');
const router=express.Router();
const {generateShortUrl}=require('../controllers/controller_url');
router.post('/generate',generateShortUrl);
module.exports=router;

