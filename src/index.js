const express = require('express');
const app = express();
const db = require('./db/connection');
const MenRanking = require('./models/olympic');
const router = require('./routers/Mens');
const port = process.env.port || 3000;
app.use(express.json());

app.use(router);



app.listen(port, () => {
    console.log('my server is running at port No ', port);
})