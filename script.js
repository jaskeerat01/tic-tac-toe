let count = 1;
let btns = document.querySelectorAll(".format");
const winner = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
const checkWinner = () => {
  btns.forEach((i) => {
    for (let pattern of winner) {
      let pst1val = btns[pattern[0] - 1].innerText;
      let pst2val = btns[pattern[1] - 1].innerText;
      let pst3val = btns[pattern[2] - 1].innerText;
      if (
        pst1val == pst2val &&
        pst2val == pst3val &&
        (pst1val == "X" || pst1val == "O")
      ) {
        let player = pst1val == "X" ? 1 : 2;
        alert(`Player ${player} wins`);
        btns.forEach((i) => {
          i.innerText = "";
          i.disabled = false;
        });
        count = 1;
        return;
      }
    }
  });
};
btns.forEach((i) => {
  i.addEventListener("click", () => {
    if (count % 2 === 0 && count <= 9) {
      i.innerText = "O";
    } else if (count % 2 !== 0 && count <= 9) {
      i.innerText = "X";
    }
    count++;
    i.disabled = true;
    if (count >= 5) {
      checkWinner();
    }
    if (count == 10) {
      alert("Tie!");
      btns.forEach((i) => {
        i.innerText = "";
        i.disabled = false;
        count = 1;
      });
    }
  });
});

let reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  btns.forEach((i) => {
    i.innerText = "";
    i.disabled = false;
    count = 1;
  });
});
