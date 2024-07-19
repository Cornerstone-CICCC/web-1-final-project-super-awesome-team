//new Splide("#image-carousel").mount();

// Open modal
document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("videoModal");
  console.log(modal);
  var span = document.getElementsByClassName("close")[0];
  var videoFrame = document.getElementById("videoFrame");

  document
    .querySelectorAll(".section6_videos_thumbnail")
    .forEach(function (thumbnail) {
      thumbnail.addEventListener("click", function () {
        var videoId = this.getAttribute("data-video-id");
        videoFrame.src =
          "https://www.youtube.com/embed/" + videoId + "?autoplay=1";
        modal.style.display = "block";
      });
    });

  span.onclick = function () {
    modal.style.display = "none";
    videoFrame.src = "";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  };
});

// Mobile Slider
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("section6_mobile_slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
