const totalPrice = document.getElementById("total-price");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const purchaseBtn = document.getElementById("Purchase-btn");
const coponBtn = document.getElementById("copon-btn");
const promo = document.getElementById("promo");
const myListOl = document.getElementById("my-item");

const myDiscount = 20;
let myDiscountPrice = 0;
function stringtoNumber(num) {
  const elementNumber = parseFloat(num);
  return elementNumber.toFixed(2);
}
let myTotalPrice = 0;

function handleClick(target) {
  const itemName = target.childNodes[3].childNodes[5].innerText;
  // const myListOl = document.getElementById("my-item");

  const newItem = document.createElement("li");
  newItem.textContent = itemName;

  myListOl.appendChild(newItem);
  const itemPriceString =
    target.childNodes[3].childNodes[7].childNodes[0].textContent;
  const itemPriceWithFloat = itemPriceString;
  const itemPriceNumber = parseFloat(itemPriceWithFloat);
  myTotalPrice += itemPriceNumber;
  totalPrice.textContent = myTotalPrice.toFixed(2);
  total.textContent = myTotalPrice.toFixed(2);
  if (myTotalPrice > 0) {
    purchaseBtn.classList.remove("btn-disabled");
  }
  if (myTotalPrice >= 200) {
    coponBtn.classList.remove("btn-disabled");
  }
}

coponBtn.addEventListener("click", function () {
  const totalPriceForCoponString = totalPrice.textContent;
  const totalPriceForCoponNumber = parseFloat(totalPriceForCoponString);
  const promoCode = promo.value;
  const myCopon = "SELL200";
  if (promoCode === myCopon) {
    myDiscountPrice = (myDiscount / 100) * totalPriceForCoponNumber;
    discount.textContent = myDiscountPrice.toFixed(2);
    total.textContent = (totalPriceForCoponString - myDiscountPrice).toFixed(2);
    promo.value = "";
  }
});

const reSetAll = document.getElementById("reset-all");
reSetAll.addEventListener("click", function () {
  myTotalPrice = 0;
  myDiscountPrice = 0;
  totalPrice.textContent = "0.00";
  discount.textContent = "0.00";
  total.textContent = "0.00";
  promo.value = "";
  purchaseBtn.classList.add("btn-disabled");
  coponBtn.classList.add("btn-disabled");
  myListOl.innerHTML = "";
});
