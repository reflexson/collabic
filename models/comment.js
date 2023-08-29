const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    comment_description: {
      type: DataTypes.STRING,
    },
    comment_songTimestamp: {
      type: DataTypes.INTEGER,
    },
    comment_publishedTimestamp: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    comment_owner: {
      type: DataTypes.STRING,
    },
    song_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'song',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);
module.exports = Comment;