const express = require('express');
const router = express.Router();
const famousplace = require('../model/famousplaces');

router.route('/')
.get((req,res,next)=>{
    famousplace.find()
        .then((famousplaces)=>{
            res.json(famousplaces);
        }).catch(next);
})

.post((req,res,next)=>{
    famousplace.create(req.body)
    .then((famousplaces)=>{
        res.json(famousplaces);
    }).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    famousplace.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    famousplace.findById(req.params.id)
    .then((famousplaces) =>{
    res.json(famousplaces);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    famousplace.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((famousplaces) =>{
    res.json(famousplaces);
}).catch(next);
})

.delete((req,res,next)=>{
    famousplace.findByIdAndDelete(req.params.id)
    .then((famousplaces) => {
        res.json(famousplaces);
}).catch(next);
});


module.exports = router;