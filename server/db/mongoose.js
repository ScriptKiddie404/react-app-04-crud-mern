// ======================================================================= //
// ============================ DB CONNECTION ============================ //
// ======================================================================= //
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.wgodv.mongodb.net/todoapp?retryWrites=true&w=majority`, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).catch(error => console.log(error));