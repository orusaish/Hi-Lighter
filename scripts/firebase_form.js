function getParameterByName(name) {
  var url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var all_team_data = {};
var team = getParameterByName("team");

$(document).ready(function(event) {
  var config = {
    apiKey: "AIzaSyCQKsx_zjRAIiZ_D6UUyn7JFBYDTWIJDAE",
    authDomain: "soccer-highlights-5fc41.firebaseapp.com",
    databaseURL: "https://soccer-highlights-5fc41.firebaseio.com",
    projectId: "soccer-highlights-5fc41",
    storageBucket: "soccer-highlights-5fc41.appspot.com",
    messagingSenderId: "714158060642"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var ref = firebase.database().ref("/project");

  ref.on(
    "value",
    function(snapshot) {
      console.log(snapshot.val());
      for (var key in snapshot.val()) {
        console.log(key);
        var data = snapshot.val()[key];
        all_team_data[data["TeamName"]] = data;
      }
      console.log(all_team_data);
      document.getElementById("heading").innerHTML = team;
      var data = all_team_data[team];
      document.getElementById("stadium").innerHTML = data["Arene"];
      document.getElementById("location").innerHTML = data["Location"];
      document.getElementById("owner").innerHTML = data["Owner"];
      document.getElementById("manager").innerHTML = data["Manager"];
      document.getElementById("description").innerHTML = data["Discription"];

      document.getElementById("teamLogo").src = data["TeamLogo"];
    },
    function(error) {
      console.log("Error: " + error.code);
    }
  );
});
