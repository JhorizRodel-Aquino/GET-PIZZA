const menuTabs = document.querySelectorAll(".menuItems__category")
const menuDetails = document.querySelectorAll(".menuItems__details")

menuTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        removeActiveTab();
        tab.classList.add("active");
        const activeDetails = document.querySelector(`#${tab.id}-details`);
        removeActiveContent();
        activeDetails.classList.add("active");
    });
});

function removeActiveTab() {
  menuTabs.forEach((tab) => {
    tab.classList.remove("active");
  });
}
function removeActiveContent() {
  menuDetails.forEach((menuDetail) => {
    menuDetail.classList.remove("active");
  });
}
