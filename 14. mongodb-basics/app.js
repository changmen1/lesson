const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://zxl17339811909_db_user:IoD3vDxHZTk1Zcrg@cluster0.bdtqifp.mongodb.net/"
    )
    .then(() => console.log("database connected successfully"))
    .catch((e) => console.log(e));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    isActive: Boolean,
    tags: [String],
    createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.model("User", userSchema);

async function runQueryExamples() {
    try {
        // create a new document
        // const newUser = await User.create({
        //     name: "李瑶",
        //     email: "iloveyou@gmail.com",
        //     age: "18",
        //     isActive: true,
        //     tags: ["美女"],
        // })
        const newUser = await User({
            name: "朱昕龙",
            email: "zhangmen099@gmail.com",
            age: "18",
            isActive: true,
            tags: ["帅哥"],
        });
        await newUser.save();
        console.log("Created new user", newUser);
        const allUsers = await User.find({});
        console.log('allUsers', allUsers);
    } catch (e) {
        console.log("Error ->", e)
    } finally {
        await mongoose.connection.close();
    }
}

runQueryExamples();