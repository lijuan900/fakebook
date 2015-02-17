

Template.navigation.helpers({
  'email' : function () {
    // body...
    return Meteor.users.findOne().emails[0].address;
  }
});

