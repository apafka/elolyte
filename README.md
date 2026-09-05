# Elolyte — elolyte.com

GitHub Pages source for **[https://elolyte.com](https://elolyte.com)** (`CNAME` → `elolyte.com`).  
Public repo: [apafka/elolyte](https://github.com/apafka/elolyte). Pages builds from `main` (`/`).

Validation landing page: **The Clean Electrolyte** + **Water isn’t enough** + dose clarity. One product, one primary CTA.

## Product (locked)

| | |
|---|---|
| Brand | ELOLYTE |
| One-time | **$45 USD** list price for one pack |
| Subscribe & save | **$39 USD / month** list price for the same pack |
| Pack | **30 sachets / 30 drinks** |
| Dose | **1,000 mg sodium · 200 mg potassium · 60 mg magnesium** |
| Sugar | 0g. No artificial crap. |
| Shipping | First pack ships from Estonia when ready (target **4–6 weeks** of order). Not next-day. |
| Subscription renewals | Only after stock is flowing. Not endless in-stock inventory. |
| Refund | **Full refund if we cannot ship** the first pack. |
| Contact | [hello@elolyte.com](mailto:hello@elolyte.com) |

## Page shape

Single page, ~7 sections. Minimal nav (logo + Buy). Subscribe-first checkout.

1. Hero — *Water isn’t enough.* Dose line. Try Elolyte →
2. Problem — Your body doesn’t just need water. Huge 1,000 / 200 / 60
3. Nothing unnecessary — 0g sugar · no junk · Mix. Drink. Go.
4. How to — Tear · Pour · Shake · Drink
5. Real life — Work / Train / Travel / Everyday
6. Trust — honest terms only (no fake reviews)
7. Buy — Subscribe $39/mo primary · Try once $45

Final band: *Drink more than water. ELOLYTE.*

## Stripe Payment Links (required before anyone can pay)

Buy buttons read two constants at the top of `index.html`:

```js
const STRIPE_PAYMENT_LINK_ONE_TIME = "https://buy.stripe.com/00w5kD0QQ8vf5tu78K6kg01";            // $45 one-time — live
const STRIPE_PAYMENT_LINK_SUBSCRIPTION = "https://buy.stripe.com/00w9ATeHGcLve000Km6kg00";        // $39 / month — live
```

Do **not** put Stripe secret keys on this site. Payment Links are public URLs.

Until a URL is a real `buy.stripe.com` link (not a `placeholder` / `REPLACE` string), that button shows a short message and points people to `hello@elolyte.com`.

### 1. One-time — $45 USD

1. Open [Stripe Dashboard → Payment Links](https://dashboard.stripe.com/payment-links).
2. Create a Payment Link.
3. Product name: **Elolyte — $45**
4. Price: **$45.00 USD**, **one-time**.
5. Turn on **collect shipping address**.
6. Copy the `https://buy.stripe.com/...` URL.
7. Paste it over `STRIPE_PAYMENT_LINK_ONE_TIME` in `index.html`.

### 2. Subscription — $39 USD / month

1. Create a second Payment Link.
2. Product name: **Elolyte — $39 / month**
3. Price: **$39.00 USD**, billing period **monthly** (subscription).
4. Turn on **collect shipping address**.
5. Copy the `https://buy.stripe.com/...` URL.
6. Paste it over `STRIPE_PAYMENT_LINK_SUBSCRIPTION` in `index.html`.

Push both pasted URLs to `main`. GitHub Pages will pick them up.

## Honesty rules (keep these)

- No personal names on the public site.
- No first-batch scarcity, numbered-run theater, or promo-code callouts on the page.
- No fake waitlist counts, testimonials, star ratings, or “1M members” social proof.
- No “in stock / ships tomorrow.”
- Subscription: first pack ships when ready; renewals only after stock is flowing.
- No disease claims. Soft copy only. EU food-supplement caution stays on the page.
- No About, Blog, or extra pages. This is a buy page, not a brand magazine.
- Not a gummy brand. Sachets. Premium cream / forest / citrus.

## Edit & deploy

This is a static site: `index.html` + `CNAME`. Merge to `main` and GitHub Pages updates https://elolyte.com.

```bash
python3 -m http.server 8080
```
