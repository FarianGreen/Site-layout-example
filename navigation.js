const anchors = document.querySelectorAll('a[href*="#"]');



anchors.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();

    const hrefID = element.getAttribute("href");

    document.querySelector("" + hrefID).scrollIntoView({ behavior: "smooth", block: "start" });

    if (menu.classList.contains("active")) {
      burger.classList.remove("active");
      menu.classList.remove("active");
      body.classList.remove("lock");
    }
  });
});
