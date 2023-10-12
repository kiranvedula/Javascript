
function display() {
  
    for (var i = 0; i < arguments.length; i++) {
      if (typeof arguments[i] === 'object') 
        displayObject(arguments[i])
      else
        displayValue(arguments[i])
    }
  }
  
  function displayObject(object) {
    displayValue(getTypeName(object) + ' {')
    for(var propertyName in object) {
      displayValue(propertyName + ': ' + object[propertyName]);
    }
    displayValue('}')
  }
  
  function displayValue(value) {
    var div = document.createElement('div');
    div.style.fontSize='60px';
    div.style.cssText='font-weight: bold;padding-bottom:10px;text-indent: 10px;color:green';
    div.innerText = value;
    document.body.appendChild(div)
  }
  
  function getTypeName(object) {
     var funcNameRegex = /function (.{1,})\(/;
     var results = (funcNameRegex).exec(object.constructor.toString());
     return (results && results.length > 1) ? results[1] : "";
  }
  
  function descriptionText(value,colorOfMessage,displayAdditionlText) {
    var div = document.createElement('div');
    div.style.fontSize='60x';
    div.style.cssText='font-weight: bold;padding-bottom:10px;color:' + colorOfMessage;
    if (displayAdditionlText===true)  {
    value = value + ', see the result below:';
    }
    div.innerText = value;
    document.body.appendChild(div );       
  }