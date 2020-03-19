window.onload = function() {
  const gridList = document.querySelector("#grid");

  const itemTemplate = (item = {}) => `
      <li class="item">
        <div class="content">
          <div class="information">
            <div class="tag">
              <span class="text">${item.id}</span>
            </div>
  
            <div class="logo">
              <img
                src="assets/img/logo-white.png"
                alt="logo full"
                class="image"
              />
            </div>
  
            <div class="name">
              <span class="text">${item.author}</span>
            </div>
          </div>
  
          <div class="cover">
            <img
              src="${item.download_url}"
                alt="${item.author}"
              class="image"
            />
          </div>
        </div>
      </li>
    `;

  const renderItems = (items = []) => {
    items.forEach(item => {
      gridList.innerHTML += itemTemplate(item);
    });
  };

  const items = $.getJSON("../api/gradiAuthors.json", (gradiAuthors = []) => {
    window.addEventListener("scroll", scrollEvent => {
      const itemsDom = document.querySelectorAll(".list .item");

      for (const itemDom of itemsDom) {
        const rect = itemDom.getBoundingClientRect();
        const isHidden =
          window.scrollY >= rect.top
            ? rect.top - rect.height * 0.5 >= window.scrollY
            : false;

        itemDom.style.visibility = isHidden ? "hidden" : "visible";
      }
    });

    gridList.innerHTML = "";

    renderItems(gradiAuthors);

    initGrid();
  });
};
