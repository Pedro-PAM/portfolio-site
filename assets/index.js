let projectButton = document.querySelector(".my-projects");
let projects = document.querySelector(".projects");
let page = document.querySelector('body');
page.classList.add("noscroll");



projectButton.addEventListener("click",()=>{
    page.classList.remove("noscroll");
    projects.style.display = "flex";
    let projectsHeight = projects.scrollHeight;
    let projectsWidth = projects.scrollWidth;
    window.scroll({
        top:projectsHeight,
        left:projectsWidth,
        behavior:"smooth",
    });
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slidePortfolio");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  

}
