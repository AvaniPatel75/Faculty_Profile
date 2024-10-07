const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const faculty=require('./Faculty');
const connectionString="mongodb+srv://avani_panara768:avani123@cluster0.bvi2i.mongodb.net/Faculty";
const cors=require('cors');
mongoose.connect(connectionString).then(()=>{


    const app=express();
    app.use(cors())
    app.use(express.json());

    app.get('/faculty',async(req,res)=>{

        const ans= await faculty.find();
        res.send(ans);
    });

    app.get("/faculty/:id",async(req,res)=>{
        const ans=await faculty.findOne({id:req.params.id});
        res.send(ans);
    });


    app.post('/faculty/add',async(req,res)=>{

        const foodobj=new faculty({...req.body});

        const ans=await foodobj.save();
        res.send(ans);
    });


    app.put('/faculty/edit/:id',async(req,res)=>{

        const foodobj=await faculty.findOneAndUpdate({id:req.params.id},req.body);
        const ans=await foodobj.save();
        res.send(ans);
    });

    app.delete('/faculty/:id',async(req,res)=>{

        const ans=await faculty.deleteOne({id:req.params.id});
        res.send(ans);
    });


    app.listen(8000,()=>{
        console.log('server started @ 3000.......')
    })
})

