// Function to zoom into images across the page
const zoomImages = document.querySelectorAll('#zoom-image');

zoomImages.forEach(image => {
  image.addEventListener('mousemove', zoomIn);

  function zoomIn(event) {
    const { offsetX, offsetY } = event;
    const { width, height } = image.getBoundingClientRect();
    const x = (offsetX / width) * 100;
    const y = (offsetY / height) * 100;
    image.style.transformOrigin = `${x}% ${y}%`;
    image.classList.add('zoomed-in');
  }

  image.addEventListener('mouseout', zoomOut);

  function zoomOut() {
    image.style.transformOrigin = 'center center';
    image.classList.remove('zoomed-in');
  }
}); 

//Function to calculate and display discount percentage on every product

var salePriceElements = document.querySelectorAll('#sale-price');
var formerPriceElements = document.querySelectorAll('#former-price');
var discountPercentArray = [];

for (var i = 0; i < formerPriceElements.length; i++) {
  var initialPrice = parseFloat(formerPriceElements[i].textContent);
  var newPrice = parseFloat(salePriceElements[i].textContent);
  var discountPercent = ((initialPrice - newPrice) / initialPrice) * 100;
  var discountPercentage = discountPercent.toFixed(0)
  discountPercentArray.push(discountPercentage);
  console.log(discountPercent);
}

var discounts = document.querySelectorAll('[name="discount"]');

discounts.forEach(function(discount, index){
    if (index<discountPercentArray.length) {
        discount.textContent = discountPercentArray[index] + " %";
    }
})








