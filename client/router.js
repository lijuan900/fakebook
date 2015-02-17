
Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  this.render('splash');
});

Router.route('/home', function () {
  this.render('home');
});

Router.route('/messages', function () {
  this.render('messages');
});

Router.route('/events', function () {
  this.render('events');
});

