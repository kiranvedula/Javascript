descriptionText('Arrow functions demo \(=>\)','blue');
//Here we are defining a function(aka arrow functions) the way similar to anonymous methods in c#
(() => {
var inputArray = ['John','Doe',"Eric","Peppers"];
//map function below returns an array with length of every element of input array
inputArray.map(x => x.length).forEach(x => display(x));

})();