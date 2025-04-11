
const sequence = [38,38,40,40,37,39,37,39,66,65]; // ↑ ↑ ↓ ↓ ← → ← → B A
let input = [];

window.addEventListener("keydown", function(e) {
  input.push(e.keyCode);
  if (input.toString().indexOf(sequence.toString()) >= 0) {
    document.querySelector(".container").style.display = "block";
    input = [];
  }
});
window.onload = () => {
  document.querySelector(".container").style.display = "none";
};
