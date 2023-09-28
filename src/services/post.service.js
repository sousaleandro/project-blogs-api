const Sequelize = require('sequelize');
const config = require('../config/config');
const { BlogPost, PostCategory } = require('../models');

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(config[env]);

const create = async (title, content, userId, categoryIds) => {
  const result = await sequelize.transaction(async (t) => {
    const post = await BlogPost.create({
      title, content, userId,
    }, { transaction: t });

    const postCategories = categoryIds.map(async (categoryId) => {
      await PostCategory.create({
        postId: post.id,
        categoryId,
      }, { transaction: t });
    });

    await Promise.all(postCategories);
    
    return post;
  });
  return result;
};

module.exports = {
  create,
};