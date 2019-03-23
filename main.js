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
  $("#Team-submit").on("click", function(event) {
    console.log("clicked");
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
  });
});
