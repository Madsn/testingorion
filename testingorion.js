if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.configure({
  layoutTemplate: 'layout',
});

Router.map(function() {
  this.route('home');
  this.route('root', {
    path: '/',
    action: function() {
      Router.go('/home');
    }
  });
});

Options.set('forbidClientAccountCreation', false);