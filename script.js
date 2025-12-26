console.log("Movie Snack Bar script running");

let totalInCents = 0;

const popcornBtn = document.querySelector("#popcorn");
const sodaBtn = document.querySelector("#soda");
const candyBtn = document.querySelector("#candy");
const nachosBtn = document.querySelector("#nachos");
const icecreamBtn = document.querySelector("#icecream");

const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");

function updateTotal() {
  totalSpan.textContent = (totalInCents / 100).toFixed(2);
}

function addItem(name, priceInCents) {
  const item = document.createElement("p");
  item.textContent = name;
  shoppingCart.appendChild(item);

  totalInCents += priceInCents;
  updateTotal();
}

popcornBtn.addEventListener("click", function () {
  addItem("🍿 Popcorn ($4.50)", 450);
});

sodaBtn.addEventListener("click", function () {
  addItem("🥤 Soda ($2.50)", 250);
});

candyBtn.addEventListener("click", function () {
  addItem("🍬 Candy ($1.75)", 175);
});

nachosBtn.addEventListener("click", function () {
  addItem("🧀 Nachos ($5.00)", 500);
});

icecreamBtn.addEventListener("click", function () {
  addItem("🍦 Ice Cream ($3.25)", 325);
});
