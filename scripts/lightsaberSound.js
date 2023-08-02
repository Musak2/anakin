// JavaScript
const lightsaberSound = document.getElementById("lightsaberSound");
const links = document.querySelectorAll(".link");

links.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    // Play the lightsaber sound
    lightsaberSound.currentTime = 0; // Start from the beginning of the audio
    lightsaberSound.play();
  });

  // link.addEventListener("mouseleave", () => {
  //   // Stop the lightsaber sound
  //   lightsaberSound.pause();
  // });
});
