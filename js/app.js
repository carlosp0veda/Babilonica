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

// document.getElementById("imgbanbtn-prev").onclick = function () {
//   if (bannerStatus === 1) {
//     bannerStatus = 2;
//     clearInterval(bannerLoop);
//   } else if (bannerStatus === 2) {
//     bannerStatus = 3;
//     clearInterval(bannerLoop);
//   } else if (bannerStatus === 3) {
//     bannerStatus = 1;
//     clearInterval(bannerLoop);
//   }

//   bannerLoop();
// };

// document.getElementById("imgbanbtn-next").onclick = function () {
//   bannerLoop();
// };

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
  // preloader
  window.addEventListener("load", function () {
    ui.hidePreloader();
  });

  // active menu item
  window.addEventListener("load", function () {
    ui.showActiveLink();
  });

  // nav btn

  document.querySelector(".navBtn").addEventListener("click", function () {
    ui.showNav();
  });
  // pause/play video
  // document
  //   .querySelector(".video_switch_container")
  //   .addEventListener("click", function() {
  //     ui.videoControls();
  //   });

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

// hide preloader
UI.prototype.hidePreloader = function () {
  document.querySelector(".preloader").style.display = "none";
};

// show Nav
UI.prototype.showNav = function () {
  document.querySelector(".nav").classList.toggle("nav-show");
};

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

  const modal = document.querySelector(".product-modal");
  const modalItem = document.querySelector(".product-modal_item");

  modal.classList.add("product-modal-show");
  modalItem.style.backgroundImage = `url(./plantas/img/planta${id}_1.jpg)`;
};

// hide modal
UI.prototype.closeProductModal = function () {
  document
    .querySelector(".product-modal")
    .classList.remove("product-modal-show");
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
