const express = require('express');
const connectDB = require('../config/db')
const itemRoutes = require('../src/routes/itemRoutes')

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use((req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
})

app.use(express.json());

app.use('/api', itemRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})