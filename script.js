// Write your code here

const allBulbsArray = document.querySelectorAll(".lightbulb");

// console.log(allBulbsArray);

function onClick(event) {
  //   console.log(event.target);
  let clickedBulb = event.target;
  if (clickedBulb.className.includes("active")) {
    clickedBulb.className = "item lightbulb";
  } else {
    clickedBulb.className = "item lightbulb active";
  }
}

allBulbsArray.forEach((bulb) => {
  bulb.addEventListener("click", onClick);
});
