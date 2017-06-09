console.log("sanity check");

var oReq = new XMLHttpRequest();
var oReq1 = new XMLHttpRequest();
var oReq2 = new XMLHttpRequest();
var oReq3 = new XMLHttpRequest();
var oReq4 = new XMLHttpRequest();

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
    var response = JSON.parse(this.responseText);
    var person14Species = document.getElementById('person14Species');
    person14Species.innerHTML = response.name;
  };

  var reqListener4 = function(){
    var film = "";
    var id = "";
    var title = "";
    var planetHeader = "";
    var planetList = "";

    var response = JSON.parse(this.responseText);

    console.log(response);

    response.results.forEach(function(movie){

      film = document.createElement('li');
      document.getElementById('filmList').appendChild(film);

      title = document.createElement('h2');
      title.innerHTML = movie.title;
      film.appendChild(title);

      planetHeader = document.createElement('h3');
      planetHeader.innerHTML = "Planets";
      film.appendChild(planetHeader);

      planetList = document.createElement('ul');
      film.appendChild(planetList);

      (function(planetList){
        movie.planets.forEach( function(planet){


          pReq = new XMLHttpRequest();
          pReq.addEventListener('load', function(){
            thisPlanet = document.createElement('li');
            var response = JSON.parse(this.responseText);
            thisPlanet.innerHTML = response.name;
            planetList.appendChild(thisPlanet);
          });

          pReq.open('GET', planet);
          pReq.send();



       });
      })(planetList);

    });

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

  oReq3.addEventListener('load', reqListener3);
  oReq3.open('GET', 'http://swapi.co/api/species/1/');
  oReq3.send();

  oReq4.addEventListener('load', reqListener4);
  oReq4.open('GET', 'http://swapi.co/api/films/');
  oReq4.send();

})();