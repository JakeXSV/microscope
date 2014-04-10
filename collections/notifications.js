Notifications = new Meteor.Collection('notifications');

//only allow user who owns post to update their notifications
Notifications.allow({
  update: ownsDocument
});

createCommentNotification = function(comment) {
  var post = Posts.findOne(comment.postId); //get postid of comment
  if (comment.userId !== post.userId) {
    Notifications.insert({
      userId: post.userId,
      postId: post._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};
