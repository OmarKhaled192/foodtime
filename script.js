// show the nav bar from clicked menu
let btn = document.getElementById("btn-menu");
btn.addEventListener("click", () => {
  let linksMenu = document.querySelector("#sec-1 nav .links");
  if (linksMenu.style.display != "flex") linksMenu.style.display = "flex";
  else {
    linksMenu.style.display = "none";
  }
});

// get location value
let locBox = document.getElementById("loc");
let searchBtn = document.getElementById("searchBtn");
searchBtn.addEventListener("click", () => {
  console.log(locBox.value);
});

// toggle paragraph describtion
let showBtn = document.getElementById("showBtn");
let describeParag = document.getElementById("describeParag");
let iconDown = document.querySelector("#sec-4 .container .btn i:first-child");
let iconUp = document.querySelector("#sec-4 .container .btn i:last-child");

let countClicks = 0;
showBtn.addEventListener("click", () => {
  if (describeParag.style.display != "block") {
    describeParag.style.display = "block";
  } else {
    describeParag.style.display = "none";
  }
  if(countClicks % 2 == 0) {
    iconDown.style.display = "none";
    iconUp.style.display = "inline"
  } else {
    iconDown.style.display = "inline";
    iconUp.style.display = "none";
  }
  countClicks++;
});
