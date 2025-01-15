const toggleBtn = document.getElementById("toggle");
const modeIcon = document.getElementById("modeIcon");
const hambergerMenu = document.querySelector(".hamberger-menu");
document.documentElement.setAttribute("data-theme", "light");
const theme = localStorage.getItem("theme");
if (theme) {
  document.documentElement.setAttribute("data-theme", "dark");
  if (modeIcon) {
    modeIcon.classList.remove("fa-sun");
    modeIcon.classList.add("fa-moon");
  }
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    if (document.documentElement.getAttribute("data-theme") == "dark") {
      localStorage.removeItem("theme");
      if (modeIcon) {
        modeIcon.classList.remove("fa-moon");
        modeIcon.classList.add("fa-sun");
      }
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      if (modeIcon) {
        modeIcon.classList.remove("fa-sun");
        modeIcon.classList.add("fa-moon");
      }
      document.documentElement.setAttribute("data-theme", "dark");
    }
  });
}

if (hambergerMenu) {
  hambergerMenu.addEventListener("click", () => {
    document.querySelector(".nav-links-ul").classList.toggle("display-menu");
  });
}
