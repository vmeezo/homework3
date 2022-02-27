//Clock function from VetsInTech week 3

function tiktok() {
  const today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;
  setTimeout(tiktok, 1000);
}
function checkTime(i) {
  if (i < 10) return "0" + i;
  return i;
}

//Initialize the canvas, make it 2D, and take up the whole screen

function matrix() {
  const canvas = document.getElementById("Matrix");
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //Create the Alphabet for the characters used by the Matrix rain effect
  //The Matrix used Katakana symbols, Letters(A-Z) and numbers (0-9)
  // I used Hiragana, from https://memory.loc.gov/diglib/codetables/9.2.html
  const hiragana =
    "ぁあぃいぅうぇえぉおかがきぎくぐけげこごさざしじすずせそたちってとなにぬのはひふへほまみむめもゃゅょらるろわゑん";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";

  //Defines the alphabet for concatenation
  const alphabet = hiragana + letters + numbers;

  //12-16 is the sweet spot, anything lower looks weird/higher looks less impressive.
  const fontSize = 14;
  const columns = canvas.width / fontSize;

  //An Array to store and render the raindrops
  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  //Draw it to screen

  const draw = () => {
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#0F0"; //green
    context.font = fontSize + "px monospace";

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }
  };

  setInterval(draw, 40); //lower numbers = faster, higher numbers = slower
}
