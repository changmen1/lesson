const mongoose = require("mongoose");

const connectToDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL);
        console.log("Mongodb连接成功 !");
    } catch (error) {
        console.error("Mongodb连接失败", error);
        process.exit(1);
    }
};

module.exports = connectToDB;