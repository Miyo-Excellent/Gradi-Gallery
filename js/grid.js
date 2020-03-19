function resizeGridItem(item, size = 2) {
  const itemHeight = item.querySelector(".content").getBoundingClientRect()
    .height;

  const grid = document.getElementById("grid");

  const rowHeight = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-auto-rows")
  );
  const rowGap = parseInt(
    window.getComputedStyle(grid).getPropertyValue("grid-row-gap")
  );

  const rowSpan = Math.ceil((itemHeight + rowGap) / (rowHeight + rowGap));

  item.style.gridRowStart = `span ${(rowSpan - 1) / size}`;
}

function resizeAllGridItems() {
  const allItems = document.getElementsByClassName("item");

  for (let x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function hoverItem(item) {
  const itemHeight = 100;

  item.addEventListener("mouseover", event => {
    resizeGridItem(item, 1);
    item.style.height = `${itemHeight * 2}px`;
  });

  item.addEventListener("mouseleave", event => {
    item.style.height = null;
    item.style.gridRowStart = null;
  });
}

function initGrid() {
  window.addEventListener("resize", resizeAllGridItems);

  const allItems = document.getElementsByClassName("item");

  for (let i = 0; i < allItems.length; i++) {
    const item = allItems[i];

    resizeGridItem(item);

    hoverItem(item);
  }
}
