let quantities = [0, 0, 0, 0];

function increaseQuantity(id) {

  quantities[id - 1]++;

  document.getElementById(`quantity-${id}`).innerText =
    quantities[id - 1];
}


function decreaseQuantity(id) {

  if (quantities[id - 1] > 0) {
    quantities[id - 1]--;
  }

  document.getElementById(`quantity-${id}`).innerText =
    quantities[id - 1];
}