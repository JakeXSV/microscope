//remove autopublish && instead serve entire posts collection/cursor
Meteor.publish('posts', function() {
  return Posts.find();
});
