//remove autopublish && instead serve entire posts collection/cursor
Meteor.publish('posts', function() {
  return Posts.find();
});

Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() { //only sync notifications relevant to user
  return Notifications.find({userId: this.userId});
});
