//remove autopublish && instead serve entire posts collection/cursor
Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function() {
  return Comments.find();
});
