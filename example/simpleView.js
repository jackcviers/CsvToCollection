var Backbone = require('backbone');
var CsvToCollection = require('../CsvToCollection/csvToCollection.js');
var renan = require('./test');

module.exports = Backbone.View.extend({	

	initialize:function(options) {
		el = options.el;
		this.render();
	},

	events:
	{
		"change #file":"importToCollection"
	},

	importToCollection: function(e){
		document.addEventListener("Load", function(collection) {			
			console.log(collection.detail);
		});
		new CsvToCollection(e);
	},

	render: function() {
		debugger;
		return $(this.el).append("<input type='file' id='file'>");	
		debugger;	
	}

});