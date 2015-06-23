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
    reader.onload = function(e) {
      var collection, content, header, model, resultSplit, event;
      collection = new Backbone.Collection();
      resultSplit = e.target.result.replace(/\r/g, "\n").split('\n');
      header = _.head(resultSplit).split(",");
      content = _.tail(resultSplit).map(function(line){
        return line.split(",");
      });
      event = new CustomEvent("Load", { "detail" : _.reduce(content, function(acc, col){
        acc.add(_.chain(header).zip(col).reduce(
          function(acc, val){
            acc.set(_.head(val), _.last(val));
            return acc;
          }, new Backbone.Model({})).value());
        return acc;
      }, collection)});
      document.dispatchEvent(event);
    };
    reader.readAsText(pCsvFile.target.files.item(0));
  };
  return Backbone.csvToCollection;
}));
