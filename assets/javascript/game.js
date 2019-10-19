var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/Crystal1.png", "./assets/images/Crystal2.png", "./assets/images/Crystal3.png", "./assets/images/Crystal4.png"];

function randomTargetNumber () {
    targetNumber = Math.floor(Math.random() * 102) + 19;
}

function resetCrystals () {
    for (var i = 0; i < images.length; i++) {
        var crystal = $("<img>");
        crystal.addClass("crystal");
        crystal.attr("src", images[i]);
        crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
        crystal.attr("height", "100");
        $(".crystal-images").append(crystal);
    }
}