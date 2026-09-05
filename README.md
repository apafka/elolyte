# Elolyte — elolyte.com

GitHub Pages source for **[https://elolyte.com](https://elolyte.com)** (`CNAME` → `elolyte.com`).  
Public repo: [apafka/elolyte](https://github.com/apafka/elolyte). Pages builds from `main` (`/`).

Two-page static site: a hero landing (with Subscribe / Try once cards) plus a Shop Sachets offer page.

## Pages

| File | URL |
|---|---|
| `index.html` | https://elolyte.com/ |
| `shop.html` | https://elolyte.com/shop.html |

## Product (locked)

| | |
|---|---|
| Brand | Elolyte |
| One-time | **$45 USD** list price for one pack |
| Subscribe | **$39 USD / month** list price for the same pack |
| Pack | **30 sachets / 30 drinks** |
| Value | Subscribe **$1.3 USD per drink** ($39÷30). Try once **$1.5 USD per drink** ($45÷30). |
| Dose | **1,000 mg sodium · 200 mg potassium · 60 mg magnesium** |
| Sugar | No sugar |
| Contact | [hello@elolyte.com](mailto:hello@elolyte.com) |
| Social | Footer icon links: [X](https://x.com/drink_elolyte) · [Instagram](https://www.instagram.com/drink_elolyte/) |

## Stripe Payment Links

Buy buttons on `index.html` and `shop.html` read two constants in `buy.js`:

```js
const STRIPE_PAYMENT_LINK_ONE_TIME = "https://buy.stripe.com/00w5kD0QQ8vf5tu78K6kg01";            // $45 one-time — live
const STRIPE_PAYMENT_LINK_SUBSCRIPTION = "https://buy.stripe.com/00w9ATeHGcLve000Km6kg00";        // $39 / month — live
```

Do **not** put Stripe secret keys on this site. Payment Links are public URLs.

Until a URL is a real `buy.stripe.com` link (not a `placeholder` / `REPLACE` string), that button shows a short message and points people to `hello@elolyte.com`. Paste updated links in `buy.js`. Paste updated links in `buy.js`.

## Honesty rules (keep these)

- No personal names on the public site.
- No first-batch scarcity, numbered-run theater, or promo-code callouts on the page.
- No fake waitlist counts, testimonials, star ratings, or “1M members” social proof.
- No “in stock / ships tomorrow.”
- No disease claims, USDA Organic claims, or “mental clarity” claims in HTML/copy. Sachet art in the hero photo may show label pixels; do not repeat those as marketing claims.
- Food-supplement caution stays in the footer.
- Home is hero + feature/trust row + the same Subscribe / Try once cards as shop. Shop stays a clean pricing page with a contact line.

## Edit & deploy

This is a static site: `index.html` + `shop.html` + `styles.css` + `buy.js` + `CNAME`. Merge to `main` and GitHub Pages updates https://elolyte.com.

```bash
python3 -m http.server 8080
```
