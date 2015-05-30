
(function (root, factory) {
  if (typeof exports === 'object' && typeof require === 'function') {
    module.exports = factory(require("Backbone"), require('underscore'));
  } else if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define(["Backbone", "underscore"], function(Backbone, _) {
      // Use global variables if the locals are undefined.
      return factory(Backbone || root.Backbone, _ || root._);
    });
  } else {
    factory(Backbone, _);
  }
}(this, function(Backbone, _) {
  Backbone.csvToCollection = function ToCollection (pCsvFile) {  
    if(pCsvFile.target.files === 'undefined')
    {
      throw new Error("There is no file.");
    }
    if(pCsvFile.target.value.split('.').pop().toLowerCase() !== "csv")
    {
      throw new Error("The file must be in csv format");
    }
    var reader = new FileReader();
    reader.onload = (function(_this) {
      return function(e) {    
        var collection, content, header, i, model, y;
        collection = new Backbone.Collection();       
        header = e.target.result.split('\n')[0].split(";");
        content = e.target.result.split('\n');
        content.splice(0, 1);
        content.forEach(function(a){
          var i, model;
          i=0;
          model = new Backbone.Model();
          header.forEach(function(b) {            
            model.set(header[i],a.split(';')[i]);
            return i++;
          });
          collection.add(model);
        });       
        var event = new CustomEvent("Load", { "detail" : collection });
        document.dispatchEvent(event);    
      };
    })(pCsvFile);
    reader.readAsText(pCsvFile.target.files.item(0));
  };
  return Backbone.csvToCollection;
}));
