var React = require('react');

var LoginContainer = React.createClass({
  loginUser: function(user) {
    //localStorage here?
    //pass down to LoginForm in the JSX below
    var router = this.props.router;

    router.username = user.username;

    localStorage.setItem('username', user.username);

    router.navigate('', {trigger: true});
  },
  render: function() {
      return (
      <div>
        <LoginForm loginUser={this.loginUser} />
      </div>
    );
  }

});

var LoginForm = React.createClass({
  getInitialState: function() {
    return {username: ''}
  },
  handleUsernameChange: function(event){
    this.setState({username: event.target.value});
  },
  handleLogin: function(event){
    event.preventDefault();
    var user = this.state;
    this.props.loginUser(user);


    this.setState({username: ''});
  },
  render: function(){
    //console.log(this.state.title);
    return (
      <form onSubmit={this.handleLogin}>
        <div className="form-group">
          <label id="todo-labeller" htmlFor="title">UserName</label>
          <input onChange={this.handleUsernameChange} value={this.state.title} type="text" className="form-control input-bar" id="title" placeholder="Your Username..." />
        </div>
        <input id="sub-button" type="submit" className="btn btn-success" value="Login"/>
      </form>
    )
  }
});

module.exports = {
  LoginForm,
  LoginContainer
}
