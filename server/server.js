const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.port || 5000;

//Middleware
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/build')));

//MongoDB connection
const uri = 'mongodb://localhost:27017/hungergames';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})