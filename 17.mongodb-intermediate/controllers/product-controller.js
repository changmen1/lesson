const Product = require("../models/Product");

const getProductStats = async (req, res) => {
  try {
    // 使用 aggregate 方法开启聚合管道
    const result = await Product.aggregate([
      // 阶段 1：$match —— 相当于过滤器 (Filter)
      {
        $match: {
          inStock: true,    // 只保留“有库存”的商品
          price: {
            $gte: 100,      // 只保留价格“大于等于” 100 的商品
          },
        },
      },
      // 阶段 2：$group —— 对文档进行分组统计
      {
        $group: {
          // _id 定义分组依据：这里是按照“category（分类）”字段来分组
          _id: "$category",

          // 计算该分类下所有商品的平均价格
          avgPrice: {
            $avg: "$price",
          },

          // 统计该分类下符合条件的商品总数（每进来一条文档就 +1）
          count: {
            $sum: 1,
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

const getProductAnalysis = async (req, res) => {
  try {
    // 使用聚合管道进行数据分析
    const result = await Product.aggregate([
      // 阶段 1：$match (过滤阶段)
      {
        $match: {
          category: "Electronics", // 只分析“电子产品”分类下的数据
        },
      },
      // 阶段 2：$group (聚合统计阶段)
      {
        $group: {
          // _id 设置为 null 意味着不分小组，而是把所有匹配到的文档当作一个大组来处理
          _id: null,
          // 计算总收入（把所有价格相加）
          totalRevenue: {
            $sum: "$price",
          },
          // 计算平均价格
          averagePrice: {
            $avg: "$price",
          },
          // 找出该分类下的最高价
          maxProductPrice: {
            $max: "$price",
          },
          // 找出该分类下的最低价
          minProductPrice: {
            $min: "$price",
          },
        },
      },
      // 阶段 3：$project (投影/结果重组阶段)
      {
        $project: {
          _id: 0,              // 0 表示不输出 _id 字段，让结果更干净
          totalRevenue: 1,     // 1 表示保留并在结果中显示该字段
          averagePrice: 1,
          maxProductPrice: 1,
          minProductPrice: 1,
          // 新增一个自定义字段：价格区间（最高价 - 最低价）
          priceRange: {
            $subtract: ["$maxProductPrice", "$minProductPrice"], // 使用减法操作符
          },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      message: "发生了一些错误！",
    });
  }
};

const insertSampleProducts = async (req, res) => {
  try {
    const sampleProducts = [
      {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        inStock: true,
        tags: ["computer", "tech"],
      },
      {
        name: "Smartphone",
        category: "Electronics",
        price: 699,
        inStock: true,
        tags: ["mobile", "tech"],
      },
      {
        name: "Headphones",
        category: "Electronics",
        price: 199,
        inStock: false,
        tags: ["audio", "tech"],
      },
      {
        name: "Running Shoes",
        category: "Sports",
        price: 89,
        inStock: true,
        tags: ["footwear", "running"],
      },
      {
        name: "Novel",
        category: "Books",
        price: 15,
        inStock: true,
        tags: ["fiction", "bestseller"],
      },
    ];
    const result = await Product.insertMany(sampleProducts);
    res.status(201).json({
      succes: true,
      data: `Inserted ${result.length} sample products`,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occured!",
    });
  }
};

module.exports = { insertSampleProducts, getProductStats, getProductAnalysis };
