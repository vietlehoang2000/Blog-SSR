const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/blog_DB_Dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex:true,
        });
        console.log("connect success");
    } catch (error) {
        console.log("connect false");
    }
}

module.exports = { connect };
