// Function to apply glowing effect to the text
          function applyGlowEffect() {
            const h1Element = document.getElementById("anakin");
            let glowStrength = 5;
            let increasing = true;
      
            setInterval(() => {
              if (increasing) {
                glowStrength = glowStrength < 15 ? glowStrength + 1 : 15;
                if (glowStrength >= 15) {
                  increasing = false;
                }
              } else {
                glowStrength = glowStrength > 5 ? glowStrength - 1 : 5;
                if (glowStrength <= 5) {
                  increasing = true;
                }
              }
              h1Element.style.textShadow = `0 0 ${glowStrength}px #990000, 0 0 ${glowStrength + 5}px #990000, 0 0 ${glowStrength + 10}px #990000`;
            }, 100);
          }
      
          // Call the function to apply the glowing effect when the page loads
          window.onload = applyGlowEffect;