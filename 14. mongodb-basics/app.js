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
        // !创建 数据
        // const newUser = await User.create({
        //     name: "李瑶",
        //     email: "iloveyou@gmail.com",
        //     age: "19",
        //     isActive: true,
        //     tags: ["美女", "香香"],
        // })
        // const newUser = await User({
        //     name: "朱昕龙",
        //     email: "zhangmen099@gmail.com",
        //     age: "18",
        //     isActive: true,
        //     tags: ["帅哥"],
        // });
        // !创建 数据可以在创建之前做很多事情比如修改
        // await newUser.save();
        // console.log("Created new user", newUser);
        // !查询 传递参数查询对应的数据 传递{}查询全部
        // const allUsers = await User.find({ name: '李瑶' });
        // console.log('allUsers', allUsers);
        // !查询 第一个结果
        // const Users = await User.findOne({ name: '李瑶' });
        // console.log('Users', Users);

        // const countDocuments = await User.countDocuments({ isActive: true });
        // console.log(countDocuments);

        // const deletedUser = await User.findByIdAndDelete('69bbe58fc5f0309347c8a96c');
        // console.log("deleted user ->", deletedUser);

        // const updateUser = await User.findByIdAndUpdate(
        //     '69bbe5bf2a7fc3bda4919b42',
        //     {
        //         $set: { age: 100 },
        //         $push: { tags: "updated" },
        //     },
        //     { returnDocument: 'after' }
        // );
        // console.log("updated user", updateUser);
    } catch (e) {
        console.log("Error ->", e)
    } finally {
        await mongoose.connection.close();
    }
}

runQueryExamples();