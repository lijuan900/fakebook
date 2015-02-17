Meteor.publish("posts", function (userid) {
  // body...
  return Posts.find({});
})

Meteor.publish("likes", function (postid) {
  // body...
  return Likes.find({post: postid});
})

/*
Meteor.publish("users", function (userid) {
  // body...
  return Meteor.users.find({});
})
*/

Meteor.publish("users", function (opts) {
   var userFields = { 
    'username':1,
    'emails':1,
    'createdAt':1,
  };  
  // userFields = {}
  // var res = Meteor.users.find( search ,{fields: userFields, sort:{updatedAt:-1} } );
  var res = Meteor.users.find({}, {fields: userFields});

  return res;
});


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
  },
  'getUsernameById' : function (uid) {
    console.log ('uid is ', uid);
    var u = Meteor.users.findOne({_id: uid});

    console.log ('u is ', u);
    /*
    console.log ('u._id is ', u._id); 
    console.log ('u.createdAt is ', u.createdAt); 
    console.log ('u.emails is ', u.emails);
    console.log ('u.services is ', u.services);
    
    var e = u.emails[0];
    console.log ('email is ', e);
    var addr = e.address;
    console.log ('u email is ', addr);
    */
    return u.username;
  }
})