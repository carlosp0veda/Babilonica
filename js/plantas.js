import { data } from "./data.js";

const catalogo = data;

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(catalogo);
});

window.addEventListener("load", function () {
  lazyLoad();
});

function lazyLoad() {
  var targets = document.querySelectorAll("img");
  var lazyLoad = (target) => {
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute("data-lazy");

          img.setAttribute("src", src);
          observer.disconnect();
        }
      });
    });

    io.observe(target);
  };

  targets.forEach(lazyLoad);
}

// filter btn
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let inactiveFilters = filterBtns.forEach(removeFilter);
    function removeFilter(btn) {
      btn.classList.remove("active-filter");
    }
    const category = e.currentTarget.dataset.id;
    const activeElement = document.getElementById(category);

    if (activeElement.id === category) {
      activeElement.classList.toggle("active-filter");
    }

    const menuCategory = catalogo.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });

    if (category === "todas") {
      displayMenuItems(catalogo.reverse());
      lazyLoad();
    } else {
      displayMenuItems(menuCategory.reverse());
      lazyLoad();
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.reverse().map(function (item) {
    return `<article class="menu-item">
        <div class="photo-wrapper">
          <img data-lazy="${
            item.img
          }" class="photo" loading="lazy" alt=${item.title} />
        </div>
        <div class="item-info">
          <header class="productItem-header">
            <h4 class="plant-name">${item.title}</h4>
          </header>
          <div class="cta-container-wrapper">
            <div class="cta-container">
              <span class="plant-price">${
                item.salePrice ? item.salePrice : item.price
              }</span>
              <span class="cta-item-btn"><a href="/plantas/${
                item.url
              }" <strong>Ver más...</strong></a></span>
            </div
          </div>
        </div>
      </article>`;
  });

  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

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

  // active menu item
  window.addEventListener("load", function () {
    ui.showActiveLink();
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

// show active menu link
UI.prototype.showActiveLink = function () {
  const activePageURL = window.location.href;
  const menuLink = document.querySelectorAll(".top_nav_single_link");

  menuLink.forEach(function (link) {
    let url = link.href;
    if (url === activePageURL) {
      link.classList.add("active-link");
    } else {
      link.classList.remove("active-link");
    }
  });
};
