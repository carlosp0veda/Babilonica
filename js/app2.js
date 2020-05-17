const menu = [
  {
    id: 1,
    title: "Kalanchoe Tomentosa",
    category: "Suculenta",
    price: 12.0,
    img: "../plantas/planta1_1.jpg",
    desc:
      "Popularmente conocida como Oreja de Panda. Es una suculenta bien resistente, fácil de cultivar tanto en interiores como exteriores.",
  },
  {
    id: 2,
    title: "Echeveria Cuspidata",
    category: "Suculenta",
    price: 12.0,
    img: "../plantas/planta2_1.JPG",
    desc: "Este catus pudede ser muy bonita blablabla",
  },
  {
    id: 3,
    title: "Planta 3",
    category: "Suculenta",
    price: 10.0,
    img: "../plantas/planta3_1.JPG",
    desc: "Esta planta pudede ser muy bonita blablabla",
  },
  {
    id: 4,
    title: "Crassula Ovata",
    category: "Suculenta",
    price: 15.0,
    img: "../plantas/planta4_1.JPG",
    desc:
      'También es conocido como "árbol de jade", característico por sus hojas carnosas y su forma de arbolito, además de su resistencia a la sequía, hacen de ella una especie óptima para principiantes.',
  },
  {
    id: 5,
    title: "Planta 5",
    category: "Cacti",
    price: 15.0,
    img: "../plantas/planta5_1.JPG",
    desc: "Este catus pudede ser muy bonita blablabla",
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <div class="photo-wrapper">
          <img src="${item.img}" class="photo" alt=${item.title} />
        </div>
        <div class="item-info">
          <header class="productItem-header">
            <h4 class="plant-name">${item.title}</h4>
            <h4 class="plant-price"><strong>$${item.price}</strong></h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
