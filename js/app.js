console.log("sanity check");

var oReq = new XMLHttpRequest();
var oReq1 = new XMLHttpRequest();
var oReq2 = new XMLHttpRequest();
var oReq3 = new XMLHttpRequest();

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

  var reqListener2 = function(){
    var response = JSON.parse(this.responseText);
    var person14Name = document.getElementById('person14Name');
    person14Name.innerHTML = response.name;
  };

  var reqListener3 = function(){
    var respone = JSON.parse(this.responseText);
    var person14Species = document.getElementById(person14Species);
  };

  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://www.swapi.co/api/people/4');
  oReq.send();

  oReq1.addEventListener('load', reqListener1);
  oReq1.open('GET', 'http://www.swapi.co/api/planets/1/');
  oReq1.send();

  oReq2.addEventListener('load', reqListener2);
  oReq2.open('GET', 'http://swapi.co/api/people/14/');
  oReq2.send();


})();