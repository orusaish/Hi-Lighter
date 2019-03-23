//show this on center of main page
$.getJSON("https://www.scorebat.com/video-api/v1/")
    .then(function (response) {
        console.log(response);

        //change #videoPlayer
        $("#videoPlayer").append(response[Math.floor((Math.random() * 30) + 1)].videos[0].embed);
    });

//video ids for team highlights YOUTUBE
var MU = ["DSSUOcuUego", "Yx6FjkWQBBg", "85ARmG9-Qy8", "bJ9GNgptqiU", "PkifATkmsjE", "DwtWQpnD45s", "Wy6CTxf-fwU", "Z6m56OJ2ur8", "iHtwMf83iJg", "xusN-fRlUVM"];
var MC = ["eBZItu85G80", "YTUE6B-Qnw8", "Ezm_U-qOKvo", "njuZJPwu7n0", "LjNHmhf-eP0"];
var LP = ["FQ6BeNdC_oQ", "6n1Xo2yCxIw", "zu1zOKahojQ", "DgeH3YWC2nA", "OysleprofiI"];
var AR = [""];
var BR = [];
var RM = [];
var JV = ["cLfSpFg6Pxg"];
var BY = ["ug2FZQQXO9M", "qqFxE14rGgM"];

//have to make multiple blocks of this code for each team array
var randomVid = BY[Math.floor((Math.random() * MU.length) + 1)];

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: randomVid,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 12000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
};


