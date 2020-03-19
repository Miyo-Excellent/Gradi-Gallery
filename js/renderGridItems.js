window.onload = function() {
  const gridList = document.querySelector("#grid");

  const items = $.getJSON("../api/gradiAuthors.json", (gradiAuthors = []) => {
    gridList.innerHTML = "";

    console.log(gradiAuthors);

    gradiAuthors.forEach(gradiAuthor => {
      gridList.innerHTML += `
      <li class="item">
        <div class="content">
          <div class="information">
            <div class="tag">
              <span class="text">${gradiAuthor.id}</span>
            </div>
  
            <div class="logo">
              <img
                src="assets/img/logo-white.png"
                alt="logo full"
                class="image"
              />
            </div>
  
            <div class="name">
              <span class="text">${gradiAuthor.author}</span>
            </div>
          </div>
  
          <div class="cover">
            <img
              src="${gradiAuthor.download_url}"
                alt="${gradiAuthor.author}"
              class="image"
            />
          </div>
        </div>
      </li>
    `;
    });

    initGrid();
  });
};
