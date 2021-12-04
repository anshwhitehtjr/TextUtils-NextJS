const express = require('express');
const app = express()
const connectToMongo = require('./db');
var cors = require('cors');
const port = 5000;

app.use(cors());
app.use(express.json());

// Available Routes
app.use('/api/contact', require('./routes/contact'));

// listening the app
app.listen(port, () => {
    console.log(`YogLive listening at http://localhost:${ port }`);
});
