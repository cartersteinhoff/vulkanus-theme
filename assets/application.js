//header navigation
const mobile_button = document.querySelector("#mobile-button");
const mobile_menu = document.querySelector("#mobile-menu");
const mobile_cancel = document.querySelector("#mobile-cancel");

mobile_button.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
});

mobile_cancel.addEventListener("click", () => {
  mobile_menu.classList.toggle("hidden");
});

//handle click outside box
document.addEventListener('click', (event) => {
  const details = document.querySelectorAll("#details");

  details.forEach(detail => {
    if (!detail.contains(event.target)) {
    detail.removeAttribute("open");
    }
  })
});

//script for sorting
Shopify.queryParams = {};

// Preserve existing query parameters
if (location.search.length) {
  const params = location.search.substr(1).split('&');

  for (let i = 0; i < params.length; i++) {
    let keyValue = params[i].split('=');

    if (keyValue.length) {
      
      [decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);

      Shopify.queryParams[decodeURIComponent(keyValue[0])] = decodeURIComponent(keyValue[1]);
    }
  }
}

// Update sort_by query parameter on select change
document.querySelector('#sort-by').addEventListener('change', function(e) {
  let value = e.target.value;

  Shopify.queryParams.sort_by = value;
  location.search = new URLSearchParams(Shopify.queryParams).toString();
});

//quantity buttons on product page
const quant = document.getElementById("quant");
const quantVal = quant.getAttribute(value);
document.getElementById("decrease").addEventListener("click", () => quant.setAttribute(value, --quantVal));
document.getElementById("increase").addEventListener("click", () => quant.setAttribute(value, ++quantVal));