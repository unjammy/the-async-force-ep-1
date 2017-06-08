console.log("sanity check");

var oReq = new XMLHttpRequest();
var oReq1 = new XMLHttpRequest();

(function(){

  var reqListener = function(){
    var response = JSON.parse(this.responseText);
    var person4Name = document.getElementById('person4Name');
    person4Name.innerHTML = response.name;
  };

  var reqListener1 = function(){
    var response = JSON.parse(this.responseText);
    var person4HomeWorld = document.getElementById('person4HomeWorld');
    person4HomeWorld.innerHTML = response.name;
  };

  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://www.swapi.co/api/people/4');
  oReq.send();

  oReq1.addEventListener('load', reqListener1);
  oReq1.open('GET', 'http://www.swapi.co/api/planets/1/');
  oReq1.send();


})();