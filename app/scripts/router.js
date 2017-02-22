var Backbone = require('backbone');
var TodoContainer = require('./components/todo.jsx').TodoContainer;
var React = require('react');
var ReactDOM = require('react-dom');

var LoginContainer = require('./components/login.jsx').LoginContainer;


var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'login': 'login'
  },
  initialize: function() {
    // create user property on Router
    //gets the user from local storage
    this.username = localStorage.getItem('username');
  },
  index: function() {
    if(!this.username) {
      this.navigate('login', {trigger: true});
      return;
    }

    ReactDOM.render(
      React.createElement(TodoContainer, {router: this}),
      document.getElementById('app')
    );
  },
  login: function() {
    ReactDOM.render(
      React.createElement(LoginContainer, {router: this}),
      document.getElementById('app')
    );
  }

});


var appRouter = new AppRouter();

module.exports = {
  appRouter
};
