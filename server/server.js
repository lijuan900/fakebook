Meteor.publish("posts", function (userid) {
  // body...
  return Posts.find({});
})

Meteor.publish("likes", function (postid) {
  // body...
  return Likes.find({post: postid});
})

Meteor.methods({
  // {text: '', owner: '', date: '', parent: ''}
  'addPost': function  (options) {
    // body...
    var post = {
      text: options.text,
      owner: Meteor.userId(),
      date: new Date(),
      parent: options.parent
    }
    Posts.insert(post);
  },
  'removePost': function  (id) {
    // body...
    Posts.remove({_id: id})
  },
  'removeAllPosts': function  (argument) {
    // body...
    Posts.remove({});
  }
})