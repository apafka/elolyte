/* Stripe Payment Links — public URLs only. No secret keys. */
const STRIPE_PAYMENT_LINK_ONE_TIME = "https://buy.stripe.com/00w5kD0QQ8vf5tu78K6kg01";
const STRIPE_PAYMENT_LINK_SUBSCRIPTION = "https://buy.stripe.com/00w9ATeHGcLve000Km6kg00";

(function () {
  const links = {
    "one-time": STRIPE_PAYMENT_LINK_ONE_TIME,
    subscription: STRIPE_PAYMENT_LINK_SUBSCRIPTION
  };
  function isLive(url) {
    return url && !/placeholder|REPLACE/i.test(url);
  }
  document.querySelectorAll("[data-buy]").forEach(function (el) {
    const url = links[el.getAttribute("data-buy")];
    el.setAttribute("rel", "noopener noreferrer");
    if (isLive(url)) {
      el.setAttribute("href", url);
    } else {
      el.setAttribute("href", "#buy");
      el.addEventListener("click", function (e) {
        e.preventDefault();
        alert("Checkout is not live yet. Paste Stripe Payment Links into STRIPE_PAYMENT_LINK_ONE_TIME and STRIPE_PAYMENT_LINK_SUBSCRIPTION in buy.js. Meanwhile: hello@elolyte.com");
      });
    }
  });
})();
