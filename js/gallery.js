function changePhoto(e, photoURL) {
  const clickedPhoto = photoURL;
  const main_frame = document.getElementsByClassName("photo-m");
  main_frame[0].src = clickedPhoto;
  imageZoom("photo-m");
}

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
  evt.currentTarget.className += " active-tab";
}
