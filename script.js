const icon1 = document.getElementById("icon1");
const icon2 = document.getElementById("icon2");
const icon3 = document.getElementById("icon3");
const icon4 = document.getElementById("icon4");
const icon5 = document.getElementById("icon5");

const ballIcon = document.getElementById("ball-icon");
const ball = document.querySelector(".ball");

icon1.addEventListener("click", () => {
    ball.style.left = "30px";
    ball.style.transition = "0.5s";

    icon1.innerHTML = "HOME";
    icon2.innerHTML = "<span class='icon material-symbols-outlined'>menu</span>";
    icon3.innerHTML = "<span class='icon material-symbols-outlined'>settings</span>";
    icon4.innerHTML = "<span class='icon material-symbols-outlined'>search</span>";
    icon5.innerHTML = "<span class='icon material-symbols-outlined'>apps</span>";

    ballIcon.innerHTML = "<span class='icon material-symbols-outlined'>home</span>";
})

icon2.addEventListener("click", () => {
    ball.style.left = "150px";
    ball.style.transition = "0.5s";
    
    icon1.innerHTML = "<span class='icon material-symbols-outlined'>home</span>";
    icon2.innerHTML = "MENU";
    icon3.innerHTML = "<span class='icon material-symbols-outlined'>settings</span>";
    icon4.innerHTML = "<span class='icon material-symbols-outlined'>search</span>";
    icon5.innerHTML = "<span class='icon material-symbols-outlined'>apps</span>";

    ballIcon.innerHTML = "<span class='icon material-symbols-outlined'>menu</span>";
})

icon3.addEventListener("click", () => {
    ball.style.left = "270px";
    ball.style.transition = "0.5s";
    
    icon1.innerHTML = "<span class='icon material-symbols-outlined'>home</span>";
    icon2.innerHTML = "<span class='icon material-symbols-outlined'>menu</span>";
    icon3.innerHTML = "SETTINGS";
    icon4.innerHTML = "<span class='icon material-symbols-outlined'>search</span>";
    icon5.innerHTML = "<span class='icon material-symbols-outlined'>apps</span>";

    ballIcon.innerHTML = "<span class='icon material-symbols-outlined'>settings</span>";
})

icon4.addEventListener("click", () => {
    ball.style.left = "390px";
    ball.style.transition = "0.5s";
    
    icon1.innerHTML = "<span class='icon material-symbols-outlined'>home</span>";
    icon2.innerHTML = "<span class='icon material-symbols-outlined'>menu</span>";
    icon3.innerHTML = "<span class='icon material-symbols-outlined'>settings</span>";
    icon4.innerHTML = "SEARCH";
    icon5.innerHTML = "<span class='icon material-symbols-outlined'>apps</span>";

    ballIcon.innerHTML = "<span class='icon material-symbols-outlined'>search</span>";
})

icon5.addEventListener("click", () => {
    ball.style.left = "510px";
    ball.style.transition = "0.5s";
    
    icon1.innerHTML = "<span class='icon material-symbols-outlined'>home</span>";
    icon2.innerHTML = "<span class='icon material-symbols-outlined'>menu</span>";
    icon3.innerHTML = "<span class='icon material-symbols-outlined'>settings</span>";
    icon4.innerHTML = "<span class='icon material-symbols-outlined'>search</span>";
    icon5.innerHTML = "APPS";

    ballIcon.innerHTML = "<span class='icon material-symbols-outlined'>apps</span>";
})