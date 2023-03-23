function showPopupMenu() {
    let PopupMenu = document.getElementById('popupMenu');

    if (PopupMenu.style.display === 'none') {
        PopupMenu.style.display = 'block';
    } else {
        PopupMenu.style.display = 'none';
    }
}

const sidebar = document.querySelector(".sidebar");

const toggleopen = document.querySelector(".toggle-open");
const toggleclose = document.querySelector(".toggle-close");

const logo = document.querySelector(".logo");
const title = document.querySelector(".title");


// ////////////////////

toggleopen.addEventListener("click", () => {
    sidebar.classList.add("open");
    toggleclose.classList.remove("hidden");
    toggleopen.classList.add("hidden");

    logo.classList.remove("hidden");
    title.classList.remove("hidden");
});

toggleclose.addEventListener("click", () => {
    sidebar.classList.remove("open");
    toggleopen.classList.remove("hidden");
    toggleclose.classList.add("hidden");

    logo.classList.add("hidden");
    title.classList.add("hidden");
});