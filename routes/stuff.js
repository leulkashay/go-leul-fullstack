const express=require('express');
const router=express.Router();

const stuffCtr=require('../controllers/stuff');

const Thing=require('../model/thing')


router.post('/',stuffCtr.createThing);

router.get('/:Id',stuffCtr.getOneThing);

router.put('/:id',stuffCtr.updateOneThing);


router.delete('/:id',stuffCtr.deleteOneThing);

router.get('/',stuffCtr.getAllThing);

module.exports=router;