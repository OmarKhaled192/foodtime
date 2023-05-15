// show the nav bar from clicked menu 
let btn = document.getElementById("btn-menu");
btn.addEventListener("click", () => {
  let linksMenu = document.querySelector("#sec-1 nav .links");
  if ((linksMenu.style.display != "flex"))
      linksMenu.style.display = "flex";
    else {
      linksMenu.style.display = "none";
    }
});

