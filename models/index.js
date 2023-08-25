const User = require('./user');
<<<<<<< HEAD
const Project = require('./project');
const Song = require('./song');
=======
const Blog = require('./song');
>>>>>>> e8688c0c56092ce4345a98d9879ca6a2f9499eec
const Comment = require('./comment');

User.hasMany(Project, {
  foreignKey: 'user_id',
});

Project.belongsTo(User, {
  foreignKey: 'user_id'
});

Project.hasMany(Song,{
  foreignKey: 'project_id',
});

Song.hasMany(Comment,{
  foreignKey: 'song_id',
});

module.exports = { User, Project, Song, Comment };