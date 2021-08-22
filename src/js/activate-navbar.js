export function activateNavbar() {

  const topNav = document.querySelector("div.topnav")
  if (!topNav) {
    return;
  }
  const menus = topNav.querySelectorAll("a")
  const path = document.location.pathname;

  menus.forEach((menu) => {
    if (path.endsWith(`${menu.id}.html`)) {
      menu.classList.add("active")
    } else {
      menu.classList.remove("active")
    }
  });
}
