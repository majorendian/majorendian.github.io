function unscramble(){
  var text = "jrugrq1}duCjpdlo1frp";
  var un = "";
  for (let idx = 0; idx < text.length; idx++) {
    un += String.fromCharCode(text.charCodeAt(idx) - 3);
  }
  return un;
}

function onLoad(){
  var elem = document.getElementById("emailp");
  var text = elem.innerHTML.replace("[%EMAIL%]", unscramble());
  elem.innerHTML = text;
}