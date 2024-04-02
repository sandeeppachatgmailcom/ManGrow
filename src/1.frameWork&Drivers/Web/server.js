const express = require('express');

const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    console.log('hello printing ')
    res.json({min:'data'})
})



const port = process.env.PORT || 7000;

function start() {
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}`);
    });
}
module.exports ={start}