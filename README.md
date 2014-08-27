CsvToCollection
===============


This is a simple way to import your csv file into a backbone collection.
If you are just looking for the content of the csv file, it will help.


This is the first version of the plugIn and there a lot f things to improve, Helps are welcome.
##Using with Bower

	bower install backbone-csv-to-collection


## Example of use with UMD.

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


## Example of use with AMD.
    
	html file    
     <input type='file' id='csvFile'/>

	Backbone View		
		define(['Backbone, csvToCollection']),function(Backbone){

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
    }

###Browse support.

IE10+
Chrome 21+
Firefox 21+
Safari 6+ 



