// 这个文件用来定义你的数据结构（Schema）

const { gql } = require("graphql-tag");

// GraphQL 自带的基础数据类型（标量类型 Scalar Types）：
// String -> 字符串
// Int -> 整数
// Float -> 浮点数/小数
// Boolean -> 布尔值 (true/false)
// ID -> 唯一的标识符（本质也是字符串，但 GraphQL 会对它做特殊优化）

// 注意：类型定义后面的感叹号 ! 代表 “必填（Non-Null）”。如果不加 !，说明这个字段可以为 null。

const typeDefs = gql`
  # 1. 定义一个自定义对象类型：Product（商品）
  type Product {
    id: ID!               # 必填的唯一ID
    title: String!        # 必填的商品名称
    category: String!     # 必填的商品分类
    price: Float!         # 必填的商品价格（小数）
    inStock: Boolean!     # 必填的库存状态（true/false）
  }

  # 2. 定义查询（Query）—— 相当于 REST API 中的 GET 请求（只读操作）
  type Query {
    products: [Product!]! # 获取商品列表。外层 ! 代表列表不能为 null，内层 ! 代表列表里的商品对象不能为 null
    product(id: ID!): Product # 根据 ID 获取单个商品。前端必须传 id，如果没有找到则返回 null（所以后面没有 !）
  }

  # 3. 定义变更（Mutation）—— 相当于 REST API 中的 POST, PUT, DELETE 请求（增删改操作）
  type Mutation {
    # 创建商品：前端传入必填字段，后端创建成功后把创建好的 Product 对象返回给前端
    createProduct(
      title: String!
      category: String!
      price: Float!
      inStock: Boolean!
    ): Product

    # 删除商品：前端传入必填的 ID，后端删除成功后返回 true，失败返回 false
    deleteProduct(id: ID!): Boolean

    # 更新商品：前端必须传 ID，其他字段都是可选的（没有加 !），前端传哪个字段，后端就更新哪个字段
    updateProduct(
      id: ID!
      title: String
      category: String
      price: Float
      inStock: Boolean
    ): Product
  }
`;

module.exports = typeDefs;