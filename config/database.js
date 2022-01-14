const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:admin@cluster0-hfnzd.mongodb.net/test?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => {
        console.log('connected to DB');
    });