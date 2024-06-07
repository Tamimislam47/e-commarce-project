const card = document.querySelector(".card");
const cartButtons = document.querySelectorAll(".cart__btn");

/*add to cart js start*/
cartButtons.forEach((button) => {
  console.log(button);
  let btn = button.style;
  let for_switch = true;
  button.addEventListener("click", () => {
    if (for_switch) {
      // alert("Successfully added to cart");
      button.textContent = "Remove from Cart";
      btn.color = "red";
      for_switch = false;
    } else {
      button.textContent = "Add To Cart";
      btn.color = "";
      for_switch = false;
      for_switch = true;
    }
  });
});

/*add to cart js end*/
