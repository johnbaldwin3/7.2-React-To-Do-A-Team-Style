var $ = require('jquery');

var Backbone = require('backbone');



require('./router.js');
//var TodoCollection = require('./models/todo.js').TodoCollection;
$(function(){
  Backbone.history.start();
  });

//var todocollection = new TodoCollection();


//COOKIES##############################
// console.log('cookie', document.cookie);
//
// document.cookie = 'chocolate-chip=yes'
// console.log('cookie', document.cookie);
// document.cookie = 'oreo=yes'
// console.log('cookie', document.cookie);
//
// var cookies = document.cookie.split(';');
//
// for (var i = 0; i > cookies.length; i++){
//   var cookie = cookies[i];
//   console.log(cookie);
// }


//LOCAL STORAGE##########################
// localStorage.setItem('favorite', 'chocolateChip');
//
// console.log(localStorage.getItem('favorite'));
