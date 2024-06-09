const parentElementCards = document.querySelectorAll(".card");
const navLower = document.querySelector(".nav-lower");
const priceUpdate = navLower.querySelector(".price_update");
const cartProduct = document.querySelector(".value");

let count = 0,
  sum = 0;

parentElementCards.forEach((card) => {
  const cartButtons = card.querySelectorAll(".cart__btn");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      let imageSelectedCard = card.querySelector(".image").src;
      let productPrice = parseInt(
        button.previousElementSibling.previousElementSibling.getAttribute(
          "data-value"
        )
      );

      if (button.textContent === "Add To Cart") {
        count++;
        sum += productPrice;
        button.textContent = "Remove from Cart";
        button.style.color = "red";
      } else {
        count--;
        sum -= productPrice;
        button.textContent = "Add To Cart";
        button.style.color = "";
      }

      cartProduct.innerHTML = count;
      priceUpdate.innerHTML = sum;
    });
  });
});
