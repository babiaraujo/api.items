const mongoose = require ('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connect')
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}

module.exports = connectDB;