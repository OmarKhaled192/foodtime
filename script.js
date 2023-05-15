// show the nav bar from clicked menu 
let btn = document.getElementById("btn-menu");
btn.addEventListener("click", () => {
  let linksMenu = document.querySelector("#sec-1 nav .links");
  if ((linksMenu.style.display != "block"))
      linksMenu.style.display = "block";
    else {
      linksMenu.style.display = "none";
    }
});

