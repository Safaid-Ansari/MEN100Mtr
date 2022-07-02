const express = require('express');
const router = express.Router();

const MenRanking = require('../models/olympic');


//we will handle post request

router.post('/Mens', async (req, res) => {

    try {

        const addMensRecord = new MenRanking(req.body);
        console.log(addMensRecord);

        const InsertMens = await addMensRecord.save();
        res.status(201).send(InsertMens);

    } catch (e) {
        res.status(400).send(e);
    }
})

//we will handle get  request
router.get("/Mens", async (req, res) => {
    try {
        // const id = req.params.id
        const studentsData = await MenRanking.find({}).sort({"ranking":1});
        if (!studentsData) {
            return res.status(404).send();
        }
            res.send(studentsData);
       
    } catch (e) {
        res.send(e);
    }
});

// we will handle get request by id
router.get('/Mens/:id',async(req,res)=>{

    try{

        const id = req.params.id;
        const getMen = await MenRanking.findById(id);
        if(!getMen){
            res.status(404).send();
        }
        res.send(getMen);
    }catch(err){
        
        res.status(500).send(err);
    }
})

// we will handle patch request by id 

router.patch('/Mens/:id',async(req,res)=>{

    try{
        const id  = req.params.id;

        const updateMen = await MenRanking.findByIdAndUpdate(id,req.body,
            {new:true});

            if(!updateMen){
    
                res.status(404).send();
            }
             res.send(updateMen);
        
    }catch(err){

          res.status(500).send(err);
    }
  
})

// we will handle delete request by id 

router.delete('/Mens/:id',async(req,res)=>{

    try
    {
        const id  = req.params.id;

        const deleteMen = await MenRanking.findByIdAndDelete(id);
    
        if(!deleteMen){
            res.status(404).send();
        }
        res.send(deleteMen);
    }catch(err){
        res.status(500).send(err)
    }
   
})




module.exports = router;