const mongoose = require('mongoose');

module.exports = () => {
    const connectionParams = {
        // useNewUrlParse: true,
        // useUnifiedTopology: true,
        // useCreateIndex: true,
    };

    try {
        mongoose.connect(process.env.MONGO_URL, connectionParams);
        console.log("Connected to databese successfully...");
    } catch (error) {
        console.log((error) => console.log("Could not connect to Database!...", error));
    }
}
