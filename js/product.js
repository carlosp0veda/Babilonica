import { data } from "./data.js";

const catalogo = data;
const productBody = document.querySelector(".plant-wrapper");

window.addEventListener("DOMContentLoaded", function () {
  displayProduct(catalogo);
});

function displayProduct(plantas) {
  const currentPlantPage = window.document.title;
  const matchedProduct = plantas.filter((planta) => {
    if (planta.title === currentPlantPage) {
      return planta;
    } else {
      null;
    }
  });

  displayProduct = matchedProduct[0];

  let displayedProductPage = matchedProduct.map(function (displayProduct) {
    return ` <article class="product-wrapper">
          <section class="product-gallery">
            <div class="side-photos">
              <div class="side-photo" onclick="changePhoto(event, '${displayProduct.img}')"><img class="photo-s" src=${displayProduct.img} alt="${displayProduct.title}"></div>
              <div class="side-photo" onclick="changePhoto(event, '${displayProduct.img2}')"><img class="photo-s" src=${displayProduct.img2} alt="${displayProduct.title}"></div>
              <div class="side-photo" onclick="changePhoto(event, '${displayProduct.img3}')"><img class="photo-s" src=${displayProduct.img3} alt="${displayProduct.title}"></div>
            </div>
            <div id="main-photo">
                <img class="photo-m" src=${displayProduct.img} alt="${displayProduct.title}">
            </div>
          </section>
          <section class="product-body">
            <h2>${displayProduct.title}</h2>
            <h3>${displayProduct.price}</h3>
            <p>${displayProduct.desc}</p>
            <button class="product-main-cta"><a class="product-main-cta-link" href="https://www.babilonica.co/contact.html">Reservala YA!</a></button>

          </section>
        </article>
        <article class="guide">
          <!-- Tab links -->
          <div class="tabs">
            <button class="tablinks" id="open" onclick="openTab(event, 'careguide')">
              Guía de Cuidos
            </button>
            <button class="tablinks" onclick="openTab(event, 'entrega')">
              Tiempo de Entrega
            </button>
            <button class="tablinks" onclick="openTab(event, 'aviso')">
              Aviso
            </button>
          </div>

          <!-- Tab content -->
          <div id="careguide" class="tabcontent">
            <p class="tab-text">${displayProduct.care}</p class="tab-text">
          </div>

          <div id="entrega" class="tabcontent">
            <p class="tab-text">De 1 a 3 días en dependencia de la disponibilidad de colores, nivel de personalización
              y magnitud de la orden. Entregas a todo Managua sin costo adicional, hay un costo por envíos a otros departamentos. </p>
          </div>

          <div id="aviso" class="tabcontent">
            <p class="tab-text">Las fotos de ejemplo son usando una paleta de colores recomendada por nosotras para cada
              planta en específico, puedes preguntar por nuestra disponibilidad de colores.
            </p>
          </div>
        </article>
      `;
  });

  productBody.innerHTML = displayedProductPage;

  // Product tabs
  function openTab(evt, tabName) {
    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    const tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += "active-tab";
  }

  document.getElementById("open").click();

  //   Product gallery
}

function openTab(evt, tabName) {
  // Declare all variables

  // Get all elements with class="tabcontent" and hide them
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  const tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active-tab", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active-tab";
}
