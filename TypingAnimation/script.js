const target = document.getElementById("type-target");
const text = "Ten efekt wygląda jak magia ✨";
const speed = 60;

async function typeText(el, str, ms) {
  el.textContent = "";
  for (let i = 0; i < str.length; i++) {
    el.textContent += str[i];
    await new Promise((r) => setTimeout(r, ms));
  }
}

typeText(target, text, speed);
