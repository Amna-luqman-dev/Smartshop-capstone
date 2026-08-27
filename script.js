// ===============================
// Quantity Functions
// ===============================

let quantities = [0, 0, 0, 0, 0, 0, 0, 0];

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


// ===============================
// Load HTML Sections
// ===============================

function loadHtml(id, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(file + " not found");
            }

            return response.text();
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => {
            console.log("Error:", error);
        });
}


// ===============================
// Load Pages
// ===============================

loadHtml("home", "home.html");
loadHtml("about", "about.html");
loadHtml("aboutMart", "aboutMart.html");
loadHtml("cart", "cart.html");
loadHtml("contact", "contact.html");
loadHtml("footer", "footer.html");