
Template.post.helpers({
  'likeCount' : function (argument) {
    // body...
    return Likes.find(this._id).count();
  },

  'postComments' : function () {
    // body...
    return Posts.find({parent: this._id});
  },

  'getNameById' : function () {
    Meteor.call('getUsernameById', this.owner, function (error, result) {
      if (error) {
        // handle error
      } else {
        // examine result
        Session.set('post_username', result); 
      }
    });
    return Session.get('post_username');
  },

  get_avatar_url: function (usr) {
    // http://momentjs.com/
    return Avatar.getUrl(usr);
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

Template.postcomment.helpers({
  'getNameById' : function () {
    Meteor.call('getUsernameById', this.owner, function (error, result) {
      if (error) {
        // handle error
      } else {
        // examine result
        Session.set('comment_username', result); 
      }
    });
    return Session.get('comment_username');
  },

  get_avatar_url: function (usr) {
    // http://momentjs.com/
    return Avatar.getUrl(usr);
  }
});