const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false
        },
        post_url: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
            //isURL: true
          }
        },
        user_id: {
          type: DataTypes.INTEGER,
          references: {
            model: 'user',
            key: 'id'
          }
        }
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'post'
      }
);

module.exports = Post;