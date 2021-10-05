const code_links = {
  "factorial.pl" : "https://gist.githubusercontent.com/majorendian/c101825ba8ef4eeaf067ce4618a1d5d1/raw/56f1b9fbc50f6505cefc33ab19fcf238b6ccb12e/factorial.pl"
};

function onLoad(){
  languageOff("en");
  languageOn("sk");
  var elem = document.getElementById("emailp");
  if(elem){
    console.log("emailp:",elem.firstChild());
    elem = elem.firstChild;
    var text = elem.innerHTML.replace("[%EMAIL%]", unscramble());
    elem.innerHTML = text;
  }
}

function populate_code(){
  for(const [key, val] of Object.entries(code_links)){
    fetchCode(val, key);
  }
}

function unscramble(){
  var text = "jrugrq1}duCjpdlo1frp";
  var un = "";
  for (let idx = 0; idx < text.length; idx++) {
    un += String.fromCharCode(text.charCodeAt(idx) - 3);
  }
  return un;
}

function fetchCode(link, codename){
  fetch(link)
    .then(function (r){
      return r.text();
    }).then(function (r) {
      const e = document.getElementById(codename);
      if(e){
        e.innerHTML = r;
      }
    });
}

function languageOff(lang){
  var elems = document.getElementsByClassName(lang);
  for(let idx = 0; idx < elems.length; idx++){
    elems.item(idx).style.display="none";
  }
  console.log(elems);
}
function languageOn(lang){
  var elems = document.getElementsByClassName(lang);
  for(let idx = 0; idx < elems.length; idx++){
    elems.item(idx).style.display="block";
  }
  console.log(elems);
}
function language(lang){
  if(lang == "sk"){
    languageOff("en");
    languageOn("sk");
  }else if(lang == "en"){
    languageOff("sk");
    languageOn("en");
  }
}