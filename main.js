Backbone = require('backbone')
SimpleView = require('./SimpleView')
$ = require('jquery')
Backbone.$ = $

module.exports = Backbone.Router.extend({
	

	routes: {
    "":"home"   
  },
  start:function(){
	Backbone.history.start();
  },

  home: function() {  	
  	view = new SimpleView({el:$("#content")});
  }
	
});