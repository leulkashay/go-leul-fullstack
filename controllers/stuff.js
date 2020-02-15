const Thing=require('../model/thing');

exports.createThing=(req,res,next)=>{

    const thing=new Thing({
        title: req.body.title,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
        userId: req.body.userId,
        price: req.body.price
    });
    thing.save()
    .then(()=>{
        res.status(201).json({
            message: "Post saved sucessfully"
        })
    })
    .catch((error)=>{
        res.status(404).json({
            error: error
            
        })
    }); 
    
}

exports.getOneThing=(req,res,next)=>{
    Thing.findOne({_id: req.params.Id})
    .then((things)=>{
        res.status(200).json(things);
    })
    .catch((error)=>{
        res.status(404).json({
            error: error
            
        })
   });
}

exports.updateOneThing=(req,res,next)=>{
    const things=new Thing({
        _id:req.params.id,
        title:req.body.title,
        description:req.body.description,
        userId: req.body.userId,
        imageUrl:req.body.imageUrl,
        price:req.body.price
    });

    Thing.updateOne({_id: req.params.id},things)
    .then(()=>{
        res.status(201).json({
            message: "updated sucessfully"
        });
    })
    .catch((error)=>{
        res.status(404).json({
            error: error
            
        })
   });
}

exports.deleteOneThing=(req,res,next)=>{
    Thing.deleteOne({_id:req.params.id})
    .then(()=>{
        res.status(200).json({
            message: "deleted sucessfully"
        });
    })
    .catch((error)=>{
        res.status(400).json({
            error: error
            
        })
   });
}

exports.getAllThing=(req,res,next)=>{
    Thing.find()
    .then((things)=>{
        res.status(200).json(things);
    })
    .catch((error)=>{
         res.status(404).json({
             error: error
             
         })
    });
 }