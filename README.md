CsvToCollection
===============

This is a simple way to import your csv file into a backbone collection.
If you are just looking for the content of the csv file, it will help.


This is the first version of the plugIn and there a lot f things to improve, Helps are welcome.


## Example of use.

     html file    
     <input type='file' id='csvFile'/>


     Backbone View
		
		CsvToCollection = require('pathToPlugIn');

	     events:
			{
				"change #file":"anyEvent"
			},
     
       	anyEvent: function(csvFile){

		document.addEventListener("Load", function(collection) {			
			console.log(collection.detail);
		});
		new CsvToCollection(e);
	},


At this moment it plays with browserify(CommonJs).


###Browse support.

IE10+
Chrome 21+
Firefox 21+
Safari 6+ 


