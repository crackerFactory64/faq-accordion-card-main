const qs = ["1", "2", "3", "4", "5"];

const selector = (q) => {
  let current = q;
  for (let i = 0; i < qs.length; i++) {
    if (i + 1 != current) {
      document.getElementById("q" + qs[i]).classList.remove("q--selected");
      document
        .getElementById("arrow" + qs[i])
        .classList.remove("arrow--selected");
      document.getElementById("a" + qs[i]).classList.remove("a--selected");
    }
  }
  document.getElementById("a" + current).classList.toggle("a--selected");
  document.getElementById("q" + current).classList.toggle("q--selected");
  document
    .getElementById("arrow" + current)
    .classList.toggle("arrow--selected");
};

document.getElementById("q1").onclick = () => selector("1");
document.getElementById("q2").onclick = () => selector("2");
document.getElementById("q3").onclick = () => selector("3");
document.getElementById("q4").onclick = () => selector("4");
document.getElementById("q5").onclick = () => selector("5");
