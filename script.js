const container = document.querySelector(".container");

const randomHex = () => {
  function getRandomHexColor() {
    const randomColor = Math.floor(Math.random() * 16777215);
    return "#" + randomColor.toString(16).padStart(6, "0");
  }

  const randomColor1 = getRandomHexColor();
  const randomColor2 = getRandomHexColor();
}

// Call randomGradient every 1.5 seconds
setInterval(randomGradient, 3000);

