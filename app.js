document.querySelectorAll(".title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling;

    // Toggle
    const isOpen = content.classList.contains("open");
    document.querySelectorAll(".contents").forEach((el) => {
      el.classList.remove("open");
    });

    if (!isOpen) {
      content.classList.add("open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");

  items.forEach((item) => {
    const head = item.querySelector(".item-head");
    const detail = item.querySelector(".item-detail");
    const icon = item.querySelector(".icon");

    head.addEventListener("click", () => {
      const isOpen = detail.style.maxHeight;

      // Collapse all items
      items.forEach((i) => {
        i.querySelector(".item-detail").style.maxHeight = null;
        i.querySelector(".item-detail").style.paddingTop = "0";
        i.querySelector(".item-detail").style.paddingBottom = "0";
        i.querySelector(".icon").textContent = "+";
      });

      // Expand this one if it was closed
      if (!isOpen || isOpen === "0px") {
        detail.style.maxHeight = detail.scrollHeight + "px";
        detail.style.paddingTop = "1rem";
        detail.style.paddingBottom = "1rem";
        icon.textContent = "−";
      }
    });
  });
});

const menuBtn = document.querySelector(".bars");
const navLinks = document.querySelector(".nav-links");
const quote = document.querySelector(".quote");
const openIcon = document.querySelector(".fa-bars-staggered");
const closeIcon = document.querySelector(".fa-xmark");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  quote.classList.toggle("show");

  const menuOpen = navLinks.classList.contains("show");

  // Toggle icons
  openIcon.style.display = menuOpen ? "none" : "inline";
  closeIcon.style.display = menuOpen ? "inline" : "none";

  // Spin animation
  menuBtn.querySelectorAll("i").forEach((icon) => {
    icon.style.transform = "rotate(360deg)";
  });

  setTimeout(() => {
    menuBtn.querySelectorAll("i").forEach((icon) => {
      icon.style.transform = "";
    });
  }, 400);
});
