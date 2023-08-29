const User = require('./user');
const Project = require('./project');
const Song = require('./song');
const Comment = require('./comment');

User.hasMany(Project, {
  foreignKey: 'user_id',
});

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

Project.hasMany(Song,{
  foreignKey: 'project_id',
});

Song.hasMany(Comment,{
  foreignKey: 'song_id',
});

module.exports = { User, Project, Song, Comment };