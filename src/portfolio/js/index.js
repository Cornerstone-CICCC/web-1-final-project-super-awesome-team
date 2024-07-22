document.addEventListener("DOMContentLoaded", function () {
  const makeupButton = document.getElementsByClassName("makeup")[0];
  makeupButton.addEventListener("click", function () {
    // change button opacity
    const hairstyleButton = document.getElementsByClassName("hairstyle")[0];
    hairstyleButton.style.opacity = 0.3;
    makeupButton.style.opacity = 1;

    // change images
    const images = document.getElementsByClassName("images")[0];
    images.innerHTML = `
    <img src='/assets/portfolio/makeup/1.png' class="img" />
    <img src='/assets/portfolio/makeup/2.png' class="img" />
    <img src='/assets/portfolio/makeup/3.png' class="img" />
    <img src='/assets/portfolio/makeup/4.png' class="img" />
    <img src='/assets/portfolio/makeup/5.png' class="img" />
    <img src='/assets/portfolio/makeup/6.png' class="img" />
    <img src='/assets/portfolio/makeup/7.png' class="img" />
    <img src='/assets/portfolio/makeup/8.png' class="img" />
    <img src='/assets/portfolio/makeup/9.png' class="img" />
    `;
  });

  const hairstyleButton = document.getElementsByClassName("hairstyle")[0];
  hairstyleButton.addEventListener("click", function () {
    // change button opacity
    const makeupButton = document.getElementsByClassName("makeup")[0];
    makeupButton.style.opacity = 0.3;
    hairstyleButton.style.opacity = 1;

    // change images
    const images = document.getElementsByClassName("images")[0];
    images.innerHTML = `
    <img src='/assets/portfolio/hairstyle/1.png' class="img" />
    <img src='/assets/portfolio/hairstyle/2.png' class="img" />
    <img src='/assets/portfolio/hairstyle/3.png' class="img" />
    <img src='/assets/portfolio/hairstyle/4.png' class="img" />
    <img src='/assets/portfolio/hairstyle/5.png' class="img" />
    <img src='/assets/portfolio/hairstyle/6.png' class="img" />
    <img src='/assets/portfolio/hairstyle/7.png' class="img" />
    <img src='/assets/portfolio/hairstyle/8.png' class="img" />
    <img src='/assets/portfolio/hairstyle/9.png' class="img" />
    `;
  });
});
