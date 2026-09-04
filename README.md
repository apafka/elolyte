# Elolyte

Static GitHub Pages site for [elolyte.com](https://elolyte.com). Custom domain is set via `CNAME`.

This page sells the **founding batch**: 50 boxes of magnesium-first hydration powder, packed in Tallinn, €25, shipped when the first carton is ready.

## Create the Stripe Payment Link

The Buy buttons read a single constant at the top of `index.html`:

```js
const STRIPE_PAYMENT_LINK = "https://buy.stripe.com/test_REPLACE_WITH_YOUR_PAYMENT_LINK";
```

Do **not** put secret keys in this repo. A Payment Link is a public URL.

1. Open [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links).
2. Create a Payment Link.
3. Product name: **Elolyte Founding Batch — €25**
4. Price: **€25.00**, one-time (not a subscription).
5. Turn on **collect shipping address**.
6. Copy the `https://buy.stripe.com/...` URL.
7. Paste it over the `STRIPE_PAYMENT_LINK` value in `index.html` and push to the default branch.

Until that URL is pasted, Buy goes to the placeholder Stripe link.

## Honesty constraints (do not regress)

- No fake waitlist counts, testimonials, initials, or “spots remaining”.
- No in-stock / ships-tomorrow language.
- Keep: founding batch · ships from Estonia when the first carton is ready (target 4–6 weeks) · full refund if we cannot ship.
- No disease or medical claims. Food-supplement copy only.

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 8080
```
