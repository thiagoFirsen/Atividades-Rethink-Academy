const product = {
  name: "Ipad",
  price: 5600,
  discount: 0.15,
  priceFinal: function () {
    return this.price * (1 - this.discount);
  },
};

console.log(product.priceFinal());
