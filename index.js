// dark-bright mode swap
const moonIcon = document.getElementById("icon-moon");
const sunIcon = document.getElementById("icon-sun");
const themeSwap = document.getElementById("theme-swap");
const body = document.body;

function changeTheme(mode) {
  if (mode === "dark") {
    moonIcon.style.display = "none";
    sunIcon.style.display = "block";
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  } else {
    moonIcon.style.display = "block";
    sunIcon.style.display = "none";
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "bright");
  }
}

// check previous theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  changeTheme("dark");
} else {
  changeTheme("bright");
}

themeSwap.addEventListener("click", () => {
  const isDark = body.classList.contains("dark-theme");
  if (isDark) {
    changeTheme("bright");
  } else {
    changeTheme("dark");
  }
});
