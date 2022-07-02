const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/olympics',{
    useNewUrlParser:true,
 
    useUnifiedTopology:true

}).then(()=>{
    console.log('connection successful');
}).catch(()=>{
    console.log('connection failed');
})