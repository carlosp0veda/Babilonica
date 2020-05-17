// lazy loading

const targets = document.querySelectorAll("img");

const lazyLoad = (target) => {
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

// finish lazy loading

EventListener();
function EventListener() {
  const ui = new UI();
  // preloader
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

// top-nav animation

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 500) {
    document.getElementById("nav-top").style.top = "0";
    document.getElementById("nav-top").style.opacity = "1";
  } else {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("nav-top").style.top = "0";
      document.getElementById("nav-top").style.opacity = "0.9";
    } else {
      document.getElementById("nav-top").style.top = "-100px";
      document.getElementById("nav-top").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  }
};

var pageTitle = window.document.title;

if (pageTitle === "Babilonica Nicaragua") {
  // lazy loading

  const targets = document.querySelectorAll("img");

  const lazyLoad = (target) => {
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

  // finish lazy loading

  // scrolling banner

  var bannerStatus = 1;
  var bannerTimer = 5000;

  window.onload = function () {
    bannerLoop();
  };

  var startBannerLoop = setInterval(function () {
    bannerLoop();
  }, bannerTimer);

  document.getElementById("rotating-banner").onmouseenter = function () {
    clearInterval(startBannerLoop);
  };

  document.getElementById("rotating-banner").onmouseleave = function () {
    startBannerLoop = setInterval(function () {
      bannerLoop();
    }, bannerTimer);
  };

  document.getElementById("imgbanbtn-prev").onclick = function () {
    if (bannerStatus === 1) {
      bannerStatus = 2;
      clearInterval(bannerLoop);
    } else if (bannerStatus === 2) {
      bannerStatus = 3;
      clearInterval(bannerLoop);
    } else if (bannerStatus === 3) {
      bannerStatus = 1;
      clearInterval(bannerLoop);
    }

    bannerLoop();
  };

  document.getElementById("imgbanbtn-next").onclick = function () {
    bannerLoop();
  };

  function bannerLoop() {
    if (bannerStatus === 1) {
      document.getElementById("imgban1").style.opacity = "1";
      setTimeout(function () {
        document.getElementById("imgban1").style.right = "0px";
        document.getElementById("imgban1").style.zIndex = 1000;
        document.getElementById("imgban2").style.right = "-1500px";
        document.getElementById("imgban2").style.zIndex = 1500;
        document.getElementById("imgban3").style.right = "1500px";
        document.getElementById("imgban3").style.zIndex = 500;
      }, 1500);

      setTimeout(function () {
        document.getElementById("imgban2").style.opacity = "1";
      }, 3000);
      bannerStatus = 2;
    } else if (bannerStatus === 2) {
      document.getElementById("imgban2").style.opacity = "1";

      setTimeout(function () {
        document.getElementById("imgban2").style.right = "0px";
        document.getElementById("imgban2").style.zIndex = 1000;
        document.getElementById("imgban3").style.right = "-1500px";
        document.getElementById("imgban3").style.zIndex = 1500;
        document.getElementById("imgban1").style.right = "1500px";
        document.getElementById("imgban1").style.zIndex = 500;
      }, 1500);

      setTimeout(function () {
        document.getElementById("imgban3").style.opacity = "1";
      }, 3000);
      bannerStatus = 3;
    } else if (bannerStatus === 3) {
      document.getElementById("imgban3").style.opacity = "1";

      setTimeout(function () {
        document.getElementById("imgban3").style.right = "0px";
        document.getElementById("imgban3").style.zIndex = 1000;
        document.getElementById("imgban1").style.right = "-1500px";
        document.getElementById("imgban1").style.zIndex = 1500;
        document.getElementById("imgban2").style.right = "1500px";
        document.getElementById("imgban2").style.zIndex = 500;
      }, 1500);

      setTimeout(function () {
        document.getElementById("imgban1").style.opacity = "1";
      }, 3000);
      bannerStatus = 1;
    }
  }

  // end scrolling banner

  // all the images scripts links have finished loading

  EventListener();
  function EventListener() {
    const ui = new UI();
    // window list

    // pause/play video
    // document
    //   .querySelector(".video_switch_container")
    //   .addEventListener("click", function() {
    //     ui.videoControls();
    //   });

    // display modal

    const links = document.querySelectorAll(".work-item_icon");
    links.forEach(function (item) {
      item.addEventListener("click", function (event) {
        ui.showModal(event);
      });
    });

    // hide modal
    document
      .querySelector(".work-modal_close")
      .addEventListener("click", function () {
        ui.closeModal();
      });

    // display product modal

    const btn = document.querySelectorAll(".cta-product-btn");
    btn.forEach(function (item) {
      item.addEventListener("click", function (event) {
        ui.showProductModal(event);
      });
    });

    // hide product modal
    document
      .querySelector(".product-modal_close")
      .addEventListener("click", function () {
        ui.closeProductModal();
      });
  }

  function UI() {}

  //play/pause the video
  UI.prototype.videoControls = function () {
    let btn = document.querySelector(".video_switch-btn");
    if (!btn.classList.contains("btnSlide")) {
      btn.classList.add("btnSlide");
      document.querySelector(".video_item").pause();
    } else {
      btn.classList.remove("btnSlide");
      document.querySelector(".video_item").play();
    }
  };

  // show modal

  UI.prototype.showModal = function (event) {
    event.preventDefault();
    if (event.target.parentElement.classList.contains("work-item_icon"));
    let id = event.target.parentElement.dataset.id;

    const modal = document.querySelector(".work-modal");
    const modalItem = document.querySelector(".work-modal_item");

    modal.classList.add("work-modal-show");
    modalItem.style.backgroundImage = `url(/css/img/img${id}.jpg)`;
  };

  // hide modal
  UI.prototype.closeModal = function () {
    document.querySelector(".work-modal").classList.remove("work-modal-show");
  };

  // Show modal product

  UI.prototype.showProductModal = function (event) {
    event.preventDefault();
    if (event.target.parentElement.classList.contains("cta-product-btn"));
    let id = event.target.parentElement.dataset.id;
    console.log(id);

    const modal = document.querySelector(".product-modal");
    const modalItem = document.querySelector(".product-modal_item");

    modal.classList.add("product-modal-show");
    modalItem.style.backgroundImage = `url(/css/img/product${id}.jpg)`;
  };

  // hide modal
  UI.prototype.closeProductModal = function () {
    document
      .querySelector(".product-modal")
      .classList.remove("product-modal-show");
  };
} else if (pageTitle === "Babilonica Catálogo") {
  const menu = [
    {
      id: 1,
      title: "Kalanchoe Tomentosa",
      category: "Crassulaceae",
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
      category: "Crassulaceae",
      price: 15.0,
      img: "../plantas/planta4_1.JPG",
      desc:
        'También es conocido como "árbol de jade", característico por sus hojas carnosas y su forma de arbolito, además de su resistencia a la sequía, hacen de ella una especie óptima para principiantes.',
    },
    {
      id: 5,
      title: "Planta 5",
      category: "Crassulaceae",
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
    // lazy loading

    const targets = document.querySelectorAll("img");

    const lazyLoad = (target) => {
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

    // finish lazy loading
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
  }
}
