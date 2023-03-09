var openMenu = document.getElementById('openMenu')
var closeMenu = document.getElementById('closeMenu')
var menu = document.getElementById('menu')
function open_menu() {
    openMenu.style.visibility = "hidden";
    menu.style.transition = "visibility 1s";
    menu.style.marginLeft = "0";
    menu.style.transition = "margin 1s";
}
function close_menu() {
    openMenu.style.visibility = "visible";
    menu.style.transition = "visibility 10s";
    menu.style.marginLeft = "-50vw";
    menu.style.transition = "margin 1s";
}