const express = require('express');
const router = express.Router();
const trekkingplace = require('../model/trekkingplaces');

router.route('/')
.get((req,res,next)=>{
    trekkingplace.find()
        .then((trekkingplacs)=>{
            res.json(trekkingplacs);
        }).catch(next);
})

.post((req,res,next)=>{
    trekkingplace.create(req.body)
    .then((trekkingplaces)=>{
        res.json(trekkingplaces);
    }).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    trekkingplace.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    trekkingplace.findById(req.params.id)
    .then((trekkingplaces) =>{
    res.json(trekkingplaces);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    trekkingplace.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((trekkingplaces) =>{
    res.json(trekkingplaces);
}).catch(next);
})

.delete((req,res,next)=>{
    trekkingplace.findByIdAndDelete(req.params.id)
    .then((trekkingplaces) => {
        res.json(trekkingplaces);
}).catch(next);
});


module.exports = router;