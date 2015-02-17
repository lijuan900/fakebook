
Template.post.helpers({
  'likeCount' : function (argument) {
    // body...
    return Likes.find(this._id).count();
  },

  'postComments' : function () {
    // body...
    return Posts.find({parent: this._id});
  }
});


Template.post.events({
  'keyup .comment': function  (evt, tmpl) {
    // body...
    if (evt.which === 13) {
      var commenttext = tmpl.find('.comment').value;
      var options = {text: commenttext, parent: this._id};
      Meteor.call('addPost', options);
      $('.comment').val('').select().focus();
    }
      
  }
})