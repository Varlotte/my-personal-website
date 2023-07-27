const obj = {
  "01": "Paulie and Christopher love BoB and Hayley Williams",
  "02": "Christoher explains emotional labor",
  "03": "the fearsome gaba-ghoul, a charcuterie monster",
  "04": "thank you for changing my life, cured meats",
  "05": "Tony carrying a gun, wearing a sick Legalize Mozzarella shirt",
  "06": "Tony defends the honor of the Mario Brothers movie",
  "07": "Tony, Paulie, and Christopher reenact Neon Genesis Evangelion",
  "08": "Zoinks!",
  "09": "Inside you, there are two Carms",
};

function loadImage() {
  let num = Math.floor(Math.random() * 9) + 1;
  const altText = obj[`0${num}`];
  const url = `assets/0${num}.jpeg`;
  console.log(num, altText, url);
  const img = document.querySelector("img");
  const aside = document.querySelector("aside");
  img.setAttribute("src", url);
  img.setAttribute("alt", altText);
  aside.textContent = altText;
}

loadImage();

const button = document.querySelector("button");
button.addEventListener("click", loadImage);
