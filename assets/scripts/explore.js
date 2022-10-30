// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // init vars
  var selectVoice = document.getElementById('voice-select');
  var playSound =  document.getElementsByTagName("Button").item(0);
  var textBox = document.getElementById('text-to-speak');
  var smilingFace = document.querySelector("[alt='Smiling face']")
  var voices = null;

  // wait for voices to load
  speechSynthesis.onvoiceschanged = () => {
    voices = speechSynthesis.getVoices(); 

    // add each voice to the dropdown
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      selectVoice.appendChild(option);
    }
  }

  // open/close mouth
  function changeFace(spokenText) {
    smilingFace.src = "assets/images/smiling-open.png";

    spokenText.addEventListener('end', function () {
      smilingFace.src = "assets/images/smiling.png";
    });
  }

  // speak input
  playSound.onclick = function () {
    const spokenText = new SpeechSynthesisUtterance(textBox.value);
    spokenText.voice = voices[selectVoice.selectedIndex - 1]
    speechSynthesis.speak(spokenText);

    changeFace(spokenText);
  };

}