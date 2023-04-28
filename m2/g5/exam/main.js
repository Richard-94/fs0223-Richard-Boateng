let nav = document.querySelector("#navigation");
let task = document.querySelector("#yes");
let start = document.querySelector(".starting");

function behave() {
  const taskBottom = task.getBoundingClientRect().bottom;
  if (taskBottom < 0) {
    nav.style.backgroundColor = "white";
    start.style.backgroundColor = "green"
  } else {
    nav.style.backgroundColor = "#ffc017";
    start.style.backgroundColor = "black"
  }
 
}

document.addEventListener("scroll", behave);
