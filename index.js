(function () {
  const container = document.getElementById("cards-container");

  function renderCard(item) {
    const card = document.createElement("a");
    card.href = `movie-detail.html?id=${encodeURIComponent(item.id)}`;
    card.className = "cads__card hero__img";
    card.innerHTML = `
      <img src="${item.primaryImage.url}" alt="${item.primaryTitle}" />
    `;
    return card;
  }

  fetch("https://api.imdbapi.dev/titles")
    .then((res) => res.json())
    .then((data) => {
      const titles = data.titles || [];
      titles.forEach((item) => {
        container.appendChild(renderCard(item));
      });
    });
})();
(function () {
  let burger = document.getElementById("nav-burger");
  let menu = document.getElementById("nav-menu");
  let closeBtn = document.getElementById("nav-menu-close");
  if (burger && menu) {
    burger.addEventListener("click", function () {
      menu.classList.add("is-open");
    });
    if (closeBtn)
      closeBtn.addEventListener("click", function () {
        menu.classList.remove("is-open");
      });
    menu.addEventListener("click", function (e) {
      if (e.target === menu) menu.classList.remove("is-open");
    });
  }
})();
