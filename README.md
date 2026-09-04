# Elolyte — elolyte.com

GitHub Pages source for **[https://elolyte.com](https://elolyte.com)** (`CNAME` → `elolyte.com`).  
Public repo: [apafka/elolyte](https://github.com/apafka/elolyte). Pages builds from `main` (`/`).

This is the **founding-batch buy page**: magnesium-first electrolyte powder, packed by Alan Pafka in Tallinn, Estonia.

## Product (locked until Alan changes it)

| | |
|---|---|
| Brand | Elolyte |
| Offer | Founding batch of **50** numbered boxes |
| Price | **€25** for one founding box (**20 servings**) |
| Formula | Magnesium-first electrolytes, zero / near-zero sugar, clean label. One founding formula (lemon/lime or unflavored — do not invent lab claims). |
| Shipping | Ships from Estonia when the first carton is ready (target **4–6 weeks** of order). Not next-day. |
| Refund | **Full refund if we cannot ship.** |
| Contact | [hello@elolyte.com](mailto:hello@elolyte.com) |

## Stripe Payment Link (required before anyone can pay)

The Buy buttons read a single constant at the bottom of `index.html`:

```js
const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/test_placeholder';
```

**Alan, do this once:**

1. In [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links), create a **one-time** Payment Link.
2. Name / product: **Elolyte Founding Batch — €25**
3. Price: **€25.00 EUR**
4. Turn on **collect shipping address**
5. Copy the `https://buy.stripe.com/...` URL
6. Paste it over `https://buy.stripe.com/test_placeholder` in `index.html` and push to `main`

Until that URL is a real Payment Link, checkout shows a short message and points people to `hello@elolyte.com`. Do **not** put Stripe secret keys on this site. A Payment Link is enough.

## Honesty rules (keep these)

- No fake waitlist counts (“47 founders”, “53 spots”).
- No fake testimonials or initials.
- No “in stock / ships tomorrow.”
- No disease claims. Soft copy only (“clean electrolytes for daily work”). EU food-supplement caution stays on the page.
- Do not invent “12 electrolytes” or milligrams until the supplier formula is locked.

## Edit & deploy

This is a static site: `index.html` + `CNAME`. Merge to `main` and GitHub Pages updates https://elolyte.com.
