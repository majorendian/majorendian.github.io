const code_links = {
  "factorial.pl" : "https://gist.githubusercontent.com/majorendian/c101825ba8ef4eeaf067ce4618a1d5d1/raw/56f1b9fbc50f6505cefc33ab19fcf238b6ccb12e/factorial.pl"
};

function onLoad(){
  var elem = document.getElementById("emailp");
  if(elem){
    var text = elem.innerHTML.replace("[%EMAIL%]", unscramble());
    elem.innerHTML = text;
  }
}

function populate_code(){
  for(const [key, val] of Object.entries(code_links)){
    fetchCode(val, key);
  }
}

function populate_pages(){
  const v =["./pages.html", "../pages.html"];
  v.map(function (page) {
    console.log(page);
    fetch(page).then(function (r){return r.text()})
      .then(function (d){
        const e = document.getElementById("pages");
        if(e){
          e.innerHTML = d;
        }
      }).catch(function (e){})
  })
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