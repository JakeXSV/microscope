Template.errors.helpers({
  errors: function() {
    return Errors.find();
  }
});
Template.error.rendered = function() {
  var error = this.data;
  Meteor.defer(function() { //in case of rerending of page, only run after that happens
    Errors.update(error._id, {$set: {seen: true}});
  });
};
