// METAMASK CONNECTION
window.addEventListener("DOMContentLoaded", async () => {
  const splide = new Splide(".splide", {
    type: "loop",
    arrows: false,
    perMove: 3,
    pagination: false,
    autoplay: true,
    direction: 'ttb',
    height: "calc(100vh - 90px)",
    width: '20vw',
    autoHeight: false,
  });
  splide.mount();
});
