// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // boolean for decide if its party horn
  var partyHorn = false

  // initialize
  var selectHorn = document.getElementById('horn-select');
  var hornImg = document.querySelector("[alt='No image selected']")
  var playSound =  document.getElementsByTagName("Button").item(0);
  var audio = document.getElementsByClassName('hidden');
  var vol = document.getElementsByTagName("input").item(0);
  var volumePic = document.querySelector("[alt='Volume level 2']")
  var h2 = document.getElementsByTagName("h2").item(0)
  
  // confetti
  const jsConfetti = new JSConfetti()

  // helper function replace imgage and audio with given cases
  function repalceAudioImg(option){
    if ( option == "air-horn") {
      audio = new Audio("assets/audio/air-horn.mp3");
      hornImg.src = "assets/images/air-horn.svg";
      h2.textContent = "Expose - Air Horn"
    }
    else if ( option == "car-horn") {
      audio = new Audio("assets/audio/car-horn.mp3");
      hornImg.src = "assets/images/car-horn.svg"
      h2.textContent = "Expose - car Horn"
    }
    else if ( option == "party-horn") {
      audio = new Audio("assets/audio/party-horn.mp3");
      hornImg.src = "assets/images/party-horn.svg"
      h2.textContent = "Expose - Party Horn"
    }
  }

  // set Volume and volumn picture helper
  function setVolume(v){
    audio.volume = v/100
    if (v == 0){
      volumePic.src = "assets/icons/volume-level-0.svg"
    }
    else if (v < 33){
      volumePic.src = "assets/icons/volume-level-1.svg"
    }
    else if (v < 67){
      volumePic.src = "assets/icons/volume-level-2.svg"
    }
    else{
      volumePic.src = "assets/icons/volume-level-3.svg"
    }

  }

  //play sound when click the btn
  playSound.onclick = function(){
    audio.play();
    if (partyHorn == true){
      jsConfetti.addConfetti();
    }
  };

  //display right image with the given option by helper function
  selectHorn.addEventListener('change', (event) => {
    repalceAudioImg(event.target.value)

    // check boolean partyHorn
    if (event.target.value == "party-horn"){
      partyHorn = true;
    }
    else{partyHorn = false}

  });

  // volumn event listener, set valumn 
  vol.addEventListener('change', (event) => {
    setVolume(event.target.value)


  });

}