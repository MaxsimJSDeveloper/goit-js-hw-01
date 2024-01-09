'use strict';
function getShippingMessage(country, price, deliveryFee) {
  const totalPrice = price + deliveryFee;
  const massage = `Shipping to ${country} will cost ${totalPrice} credits!`;
  return massage;
}
