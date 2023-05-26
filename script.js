function showMessage() {
  var messageElement = document.getElementById("message");
  messageElement.textContent = "Hello, you clicked the button!";
}
// Skills section
document.addEventListener("DOMContentLoaded", function () {
  const logos = [
    { src: "public/tailwind-logo.svg", alt: "tailwind logo" },
    { src: "public/react-logo.svg", alt: "react logo" },
    { src: "public/js-logo.svg", alt: "js logo" },
    { src: "public/html-logo.svg", alt: "html logo" },
    { src: "public/css-logo.svg", alt: "css logo" },
    { src: "public/ts-logo.svg", alt: "typescript logo" },
    { src: "public/nextjs-logo-2.svg", alt: "nextjs logo" },
    { src: "public/git-logo.svg", alt: "git logo" },
    { src: "public/expressjs-logo.svg", alt: "express logo" },
    { src: "public/nodejs-logo.svg", alt: "nodejs logo" },
    { src: "public/mongodb-logo.svg", alt: "mongodb logo" },
  ];

  const container = document.getElementById("frontend");
  const otherContainer = document.getElementById("backend");

  for (let i = 0; i < logos.length; i++) {
    const img = document.createElement("img");

    img.src = logos[i].src;
    img.alt = logos[i].alt;

    img.classList.add("skill-logo");

    if (i < 7) {
      container.appendChild(img);
    } else {
      otherContainer.appendChild(img);
    }
  }
});

