 require("dotenv").config();
 const express = require('express');
 const cors = require('cors');
const connectDB = require("./config/db");
 const port = process.env.PORT || 5000 ;



//  initialize the express app
const app = express();

// middleware
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true,
}));
app.use(express.json());


// db connection
connectDB();


// routes
app.use('/api/user', require('./routes/contactRoute'));






// testing route
app.get('/', (req, res)=>{
     res.send('Srcl-group server is running...')
})

app.listen(port,()=> console.log(`Server is running on the port ${port}`))