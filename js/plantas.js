const menu = [
  {
    id: 1,
    title: "Kalanchoe Tomentosa",
    category: "Kalanchoe",
    price: 12.0,
    img: "../plantas/planta1_1.jpg",
    desc:
      "Popularmente conocida como Oreja de Panda. Es una suculenta bien resistente, fácil de cultivar tanto en interiores como exteriores.",
  },
  {
    id: 2,
    title: "Echeveria Cuspidata",
    category: "Echeveria",
    price: 12.0,
    img: "../plantas/planta2_1.JPG",
    desc: "Este catus pudede ser muy bonita blablabla",
  },
  {
    id: 3,
    title: "Haworthia Cymbiformis",
    category: "Haworthia",
    price: 10.0,
    img: "../plantas/planta3_1.JPG",
    desc:
      'El nombre de cymbiformis significa "con forma de bote", se caracteriza por presentar hojas muy carnosas y jugosas, suaves y que se  hinchan con el agua almacenada.sta planta pudede ser muy bonita blablabla',
  },
  {
    id: 4,
    title: "Crassula Ovata",
    category: "Crassula",
    price: 15.0,
    img: "../plantas/planta4_1.JPG",
    desc:
      'También es conocido como "árbol de jade", característico por sus hojas carnosas y su forma de arbolito, además de su resistencia a la sequía, hacen de ella una especie óptima para principiantes.',
  },
  {
    id: 5,
    title: "Kalanchoe Fedtschenkoi",
    category: "Kalanchoe",
    price: 15.0,
    img: "../plantas/planta5_1.JPG",
    desc:
      "Se caracterizan por abrir sus flores haciendo crecer nuevas células en la superficie interior de los pétalos para forzarlas a salir y en la parte exterior para cerrarlas.",
  },
];

EventListener();
function EventListener() {
  const ui = new UI();
  // window list

  window.addEventListener("load", function () {
    ui.hidePreloader();
  });

  // nav btn

  document.querySelector(".navBtn").addEventListener("click", function () {
    ui.showNav();
  });
}
function UI() {}

// hide preloader
UI.prototype.hidePreloader = function () {
  document.querySelector(".preloader").style.display = "none";
};

// show Nav
UI.prototype.showNav = function () {
  document.querySelector(".nav").classList.toggle("nav-show");
};

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
  // lazy loading

  // const targets = document.querySelectorAll("img");

  // const lazyLoad = (target) => {
  //   const io = new IntersectionObserver((entries, observer) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const img = entry.target;
  //         const src = img.getAttribute("data-lazy");

  //         img.setAttribute("src", src);
  //         observer.disconnect();
  //       }
  //     });
  //   });

  //   io.observe(target);
  // };

  // targets.forEach(lazyLoad);

  // finish lazy loading
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
