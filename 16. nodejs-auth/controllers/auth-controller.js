const User = require("../models/User");

const registerUser = async (req, res) => {
    try {
        //从我们的请求体中提取用户信息
        const { username, email, password, role } = req.body;
        //检查用户是否已存在于我们的数据库中
        const checkExistingUser = await User.findOne({
            $or: [{ username }, { email }],
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        })
    }
}

const loginUser = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        })
    }
}

const changePassword = async (req, res) => {
    try {

    } catch (e) {
        console.log(e);
        res.status(500).json({
            success: false,
            message: "Some error occured! Please try again",
        })
    }
}

module.exports = { registerUser, loginUser, changePassword };