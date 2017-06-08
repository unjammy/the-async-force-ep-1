console.log("sanity check");

var oReq = new XMLHttpRequest();

(function(){

  var reqListener = function(){
    var response = JSON.parse(this.responseText);
    var person4Name = document.getElementById('person4Name');
    person4Name.innerHTML = response.name;

  };

  oReq.addEventListener('load', reqListener);
  oReq.open('GET', 'http://www.swapi.co/api/people/4');
  oReq.send();



})();