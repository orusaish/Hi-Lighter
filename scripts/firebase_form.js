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
console.log(team);
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

  // <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase.js" />;

  var database = firebase.database();
  $("#submit").on("click", function(event) {
    event.preventDefault();

    var teamname = $("#TeamName")
      .val()
      .trim();
    var logo = $("#logo")
      .val()
      .trim();
    var manager = $("#manager")
      .val()
      .trim();
    var owner = $("#owner")
      .val()
      .trim();
    var arena = $("#arena")
      .val()
      .trim();
    var location = $("#location")
      .val()
      .trim();
    var players = $("#players")
      .val()
      .trim();
    var discription = $("#discription")
      .val()
      .trim();

    database.ref("/project").push({
      TeamName: teamname,
      TeamLogo: logo,
      Manager: manager,
      Owner: owner,
      Arene: arena,
      Location: location,
      Players: players,
      Discription: discription
    });
    console.log("clicked");
    $("#TeamName").val("");
    $("#logo").val("");
    $("#manager").val("");
    $("#owner").val("");
    $("#arena").val("");
    $("#location").val("");
    $("#players").val("");
    $("#discription").val("");
  });
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
