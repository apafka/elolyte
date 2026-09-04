# Elolyte

Static GitHub Pages site for [elolyte.com](https://elolyte.com). Custom domain is set via `CNAME`.

This page sells the **founding batch**: 50 boxes of magnesium-first hydration powder, packed in Tallinn. Two offers, LMNT-simple:

| Offer | Price | Stripe kind |
| --- | --- | --- |
| One-time founding box | **€25** | One-time Payment Link |
| Subscribe & save | **€23 / month** | Subscription Payment Link |

First box (either offer) ships when the first carton is ready. Subscription renewals only after stock is flowing.

## Create the two Stripe Payment Links

Buy buttons read two constants at the top of `index.html`:

```js
const STRIPE_PAYMENT_LINK_ONE_TIME = "https://buy.stripe.com/test_REPLACE_ONE_TIME";
const STRIPE_PAYMENT_LINK_SUBSCRIPTION = "https://buy.stripe.com/test_REPLACE_SUBSCRIPTION";
```

Do **not** put secret keys in this repo. Payment Links are public URLs.

### 1. One-time — €25

1. Open [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links).
2. Create a Payment Link.
3. Product name: **Elolyte Founding Batch — €25**
4. Price: **€25.00**, **one-time** (not a subscription).
5. Turn on **collect shipping address**.
6. Copy the `https://buy.stripe.com/...` URL.
7. Paste it over `STRIPE_PAYMENT_LINK_ONE_TIME` in `index.html`.

### 2. Subscription — €23 / month

1. Create a second Payment Link.
2. Product name: **Elolyte Founding Batch — €23 / month**
3. Price: **€23.00**, billing period **monthly** (subscription).
4. Turn on **collect shipping address**.
5. Copy the `https://buy.stripe.com/...` URL.
6. Paste it over `STRIPE_PAYMENT_LINK_SUBSCRIPTION` in `index.html`.

Push both pasted URLs to the default branch. Until then, the buttons go to the placeholder Stripe links.

## Honesty constraints (do not regress)

- No fake waitlist counts, testimonials, initials, or “spots remaining”.
- No in-stock / ships-tomorrow language, and no endless-inventory subscription claim.
- Keep: founding batch · ships from Estonia when the first carton is ready (target 4–6 weeks) · full refund if we cannot ship.
- Subscription: first box uses founding-batch timing; renewals only after stock is flowing.
- No disease or medical claims. Food-supplement copy only.

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 8080
```
