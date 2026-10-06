let HiddenEl = document.getElementById("gift");
let displayMessage = document.getElementById("hidden-card");
HiddenEl.addEventListener("click", function(){
    displayMessage.style.display = "block"
    HiddenEl.style.display = "none"
})

let navigationButton = document.getElementById("cover");
let homeButton = document.getElementById("home");
navigationButton.addEventListener("click", function(){
    homeButton.style.display = "flex";
    homeButton.style.flexDirection = "column";
    navigationButton.style.display ="none";

})


// Hidden images section
let overAll = document.getElementById("image-overall");
let photoButton = document.getElementById("gallery-btn");
let galleryID = document.getElementById("gallary");
photoButton.addEventListener("click", function(){
    galleryID.style.display = "none"
    overAll.style.display = "block"
})


// hidden songs
let songCard = document.getElementById("playlist-overall");
let playlistCard = document.getElementById("playlists");
let playlistButton = document.getElementById("playlist-btn");

playlistButton.addEventListener("click", function(){
    playlistCard.style.display = "none"
    songCard.style.display = "block"
})

// hidden surprise
    
let birthdaySurprise = document.getElementById("birthday-surprise");
let specialEl = document.getElementById("special-vm");
let giftButton = document.getElementById("gift-btn");

giftButton.addEventListener("click", function(){
    specialEl.style.display = "none";
    birthdaySurprise.style.display = "block"
})


let voicePlay = document.getElementById("voice-message");
let voiceNote = document.getElementById("voice-note");


voicePlay.addEventListener("click", function(){
     voiceNote.play();
})