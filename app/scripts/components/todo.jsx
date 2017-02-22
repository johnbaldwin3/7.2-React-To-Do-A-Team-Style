var React = require('react');

var models = require('../models/todo.js');

var TodoContainer = React.createClass({
  componentWillMount: function () {
    // this.state.todoCollection.fetch()
    //this.getChatMessages();
  },
  getInitialState: function() {
      var todoCollection = new models.TodoCollection();
      var self = this;
      //using a closure
      todoCollection.fetch().done(function(){
        self.setState({todoCollection: todoCollection});

        self.forceUpdate();
      });
    //always returns an object that represents state
    //always driven by what you're trying to accomplish
    //dependant upon data used . . .
    //use todoCollection instead of []
    //return { todoList:  [], todoToEdit:null };
    //this.state.todoList  how you would access this collection anywhere else
    return {
      todoList: todoCollection,
      todoToEdit:null,
      username: this.props.router.username
    };
  },
  addTodo: function(todoItem){
    var todoList = this.state.todoList;
    todoItem.username = this.state.username;
    todoList.create(todoItem);
    this.setState({todoList: todoList});
  },
  render: function() {
    //able to log state anywhere within because of setting it with gIS
    //console.log('logrenderintDC',this.state.todoList);
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">

              <h1 className="app-header">A-Team Todo App!</h1>

              <TodoForm todoToEdit={this.state.todoToEdit} addTodo={this.addTodo} />

              <h2 className="list-header">I Pity the Todos</h2>

              <TodoList username={this.props.username} todoItems={this.state.todoList}/>

            </div>
          </div>
        </div>
      </div>

    )
  }
});
//takes an object literal always
var TodoForm = React.createClass({
  getInitialState: function() {
    var todo = this.props.todoToEdit || {title: ''};
    return todo;
  },
  handleTitleChange: function(event){
    //need to update the state
    //this.state.title -->> matches below )input pegged to state
    //grab the value from the event targeted (dom node)
    this.setState({title: event.target.value});
  },
  addTodo: function(event) {
    event.preventDefault();
    //next do something with form data
    //this.state has properties that will be passed to addTodo
    //that is located on the container
    this.props.addTodo(this.state);
    //blank out form to reset inputs (also look at reset state)
    this.setState({title: ''});
  },
  render: function(){
    //console.log(this.state.title);
    return (
      <form onSubmit={this.addTodo}>
        <div className="form-group">
          <label id="todo-labeller" htmlFor="title">Your Todo</label>
          <input onChange={this.handleTitleChange} value={this.state.title} type="text" className="form-control input-bar" id="title" placeholder="Your Todo..." />
        </div>
        <input id="sub-button" type="submit" className="btn btn-success" value="Add"/>
      </form>
    )
  }
});

var EditButton = React.createClass({
  handleEditTodo: function(event){
    event.preventDefault();

  },
  render: function() {
    //console.log(this.props.todo);
    return (
      <a onClick={this.handleEditTodo} href="#" type="button" className="button">Edit</a>
    );
  }
})

var TodoList = React.createClass({

  render: function() { //array todo gets passed to edit button
    var items =  this.props.todoItems.map(function(todo){
      return (
        <li key={todo.cid} className="list-group-item">
          {todo.get('username')} has to {todo.get('title') } | <EditButton todo={todo} />
       </li>
     );
    });
    return (
      <ul className="list-group">
        {items}
      </ul>
    );
  }
});

module.exports = {
  TodoContainer
};
