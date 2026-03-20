const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        // 是否必填：
        // true 表示必须有这个字段
        // 后面的字符串是“校验失败时的提示信息”
        required: [true, "Book title is required"],
        // 自动去除字符串前后的空格
        // 例如 "  hello  " → "hello"
        trim: true,
        // 最大长度限制（字符串最多100个字符）
        maxLength: [100, "Book title can not be more than 100 characters"],
    },

    author: {
        type: String,
        // 必填
        required: [true, "Author name is required"],
        // 去掉前后空格
        trim: true,
    },

    year: {
        // 出版年份（数字）
        type: Number,
        // 必填
        required: [true, "Publication year is required"],
        // 最小值限制（不能小于1000）
        min: [1000, "Year must be atleast 1000"],
        // 最大值限制（不能超过当前年份）
        // new Date().getFullYear() = 当前年份（动态）
        max: [new Date().getFullYear(), "Year cannot be in the future"],
    },

    createdAt: {
        // 日期类型
        type: Date,
        // 默认值：当前时间
        // 如果你不传这个字段，会自动帮你填当前时间
        default: Date.now,
    },
});

// 创建模型（Model）
// "Book" → 会映射成 MongoDB 里的 "books" 集合
module.exports = mongoose.model("Book", BookSchema);