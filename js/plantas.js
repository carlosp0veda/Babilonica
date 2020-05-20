const menu = [
  {
    id: 1,
    title: "Kalanchoe Tomentosa",
    category: "suculenta",
    price: 12.0,
    img: "../plantas/img/planta1_1.jpg",
    desc:
      "Popularmente conocida como Oreja de Panda. Es una suculenta bien resistente, fácil de cultivar tanto en interiores como exteriores.",
  },
  {
    id: 2,
    title: "Echeveria Cuspidata",
    category: "suculenta",
    price: 12.0,
    img: "../plantas/img/planta2_1.JPG",
    desc:
      "Nuestra variedad zaragozae es de mis favoritas, especialmente cuando están presentes las flores de color naranja rojizo brillante y los tallos florecientes.",
  },
  {
    id: 3,
    title: "Haworthia Cymbiformis",
    category: "suculenta",
    price: 10.0,
    img: "../plantas/img/planta3_1.JPG",
    desc:
      'El nombre de cymbiformis significa "con forma de bote", se caracteriza por presentar hojas muy carnosas y jugosas, suaves y que se  hinchan con el agua almacenada.',
  },
  {
    id: 4,
    title: "Crassula Ovata Variegata",
    category: "suculenta",
    price: 15.0,
    img: "../plantas/img/planta4_1.JPG",
    desc:
      'Conociada como "árbol de jade", característico por sus hojas carnosas y su forma de arbolito, su resistencia a sequías la hace una buena especie para principiantes.',
  },
  {
    id: 5,
    title: "Kalanchoe Fedtschenkoi",
    category: "suculenta",
    price: 15.0,
    img: "../plantas/img/planta5_1.JPG",
    desc:
      "Se caracterizan por abrir sus flores haciendo crecer nuevas células en la superficie interior de los pétalos para forzarlas a salir y en la parte exterior para cerrarlas.",
  },
  {
    id: 6,
    title: "Aglanomea Prosperity",
    category: "ornamental",
    price: 15.0,
    img: "../plantas/img/planta6_1.JPG",
    desc:
      "Esta es una hermosa planta de interior, tiene un hermoso color verde con hojas rojas con manchas y rayas llamativas. Las aglaonemas son de crecimiento lento, atractivas y son plantas de excelente follaje. Lo mejor de todo es que no le gusta el sol directo, por lo que es perfecta para interiores.",
  },
  {
    id: 7,
    title: "Parodia Ottonis",
    category: "cacti",
    price: 15.0,
    img: "../plantas/img/planta7_1.JPG",
    desc:
      "Caracterizados por tener flores de colores vibrantes, como son el amarillo, el naranja y el rojo. Estamos frente a un género especial para principiantes. Son cactus fáciles de mantener en maceta, pero siempre teniendo en cuenta los consejos básicos.",
  },
  {
    id: 8,
    title: "Graptosedum “Bronze”",
    category: "suculenta",
    price: 15,
    img: "../plantas/img/planta8_1.JPG",
    desc: "",
  },
  {
    id: 9,
    title: "Echeveria Runyonii “Topsy Turvy”",
    category: "suculenta",
    price: 15,
    img: "../plantas/img/planta9_1.JPG",
    desc: "",
  },
  {
    id: 10,
    title: 'Echeveria "White Line"',
    category: "suculenta",
    price: 15,
    img: "../plantas/img/planta10_1.JPG",
    desc: "",
  },
  {
    id: 11,
    title: "Planta 4",
    category: "cacti",
    price: 15,
    img: "../plantas/img/planta11_1.JPG",
    desc: "",
  },
  {
    id: 12,
    title: "Echeveria “Hércules”",
    category: "suculenta",
    price: 15,
    img: "../plantas/img/planta12_1.JPG",
    desc: "",
  },
  {
    id: 13,
    title: "Crassula Ovata Gollum",
    category: "suculenta",
    price: 15,
    img: "../plantas/img/planta13_1.JPG",
    desc: "",
  },
  {
    id: 14,
    title: "Haworthia Spiralis",
    category: "suculenta",
    price: 15,
    img: "../plantas/img/planta14_1.JPG",
    desc: "",
  },
];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
});
// filter btn
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    inactiveFilters = filterBtns.forEach(removeFilter);
    function removeFilter(btn) {
      btn.classList.remove("active-filter");
    }
    const category = e.currentTarget.dataset.id;
    const activeElement = document.getElementById(category);

    if (activeElement.id === category) {
      activeElement.classList.toggle("active-filter");
    }

    const menuCategory = menu.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "todas") {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <div class="photo-wrapper">
          <img src="${item.img}" class="photo" loading="lazy" alt=${item.title} />
        </div>
        <div class="item-info">
          <header class="productItem-header">
            <h4 class="plant-name">${item.title}</h4>
          </header>
          <div class="cta-container-wrapper">
            <div class="cta-container">
              <span class="plant-price">$${item.price}</span>
              <span class="cta-item-btn"><a href="/plantas/plantas.html" <strong>Ver más...</strong></a></span>
            </div
          </div>
      </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  // lazy loading

  // var targets = document.querySelectorAll("img");
  // console.log(targets);

  // var lazyLoad = (target) => {
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
}

EventListener();
function EventListener() {
  const ui = new UI();
  // window list

  // window.addEventListener("load", function () {
  //   ui.hidePreloader();
  // });

  // nav btn

  document.querySelector(".navBtn").addEventListener("click", function () {
    ui.showNav();
  });
}
function UI() {}

// hide preloader
// UI.prototype.hidePreloader = function () {
//   document.querySelector(".preloader").style.display = "none";
// };

// show Nav
UI.prototype.showNav = function () {
  document.querySelector(".nav").classList.toggle("nav-show");
};

// hide preloader
// UI.prototype.hideLoader = function () {
//   document.querySelectorAll(".loader").style.display = "none";
// };
