# Elbassiouni.com Website Design Spec
**Date:** 2026-04-20
**Project:** Elbassiouni Automotive Equipment — Corporate Website
**Domain:** www.elbassiouni.com

---

## 1. Project Overview

A bilingual (English + Arabic) corporate website for Elbassiouni Automotive Equipment, Egypt's premier distributor of premium automotive workshop equipment with 45+ years of experience. The site showcases 14 international brands across 6 equipment categories and converts visitors into sales inquiries.

**Primary goal:** Let visitors discover the brand portfolio, then prompt them to get in touch.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Frontend framework | Next.js 14 (React) |
| Content management | Sanity (headless CMS) |
| Hosting | Vercel (free tier) |
| Domain | elbassiouni.com — pointed to Vercel via DNS |
| Sanity studio URL | studio.elbassiouni.com (or similar) |
| Styling | Tailwind CSS |
| Bilingual | next-i18n-router + Sanity localized fields |
| Arabic RTL | Automatic RTL layout switch on AR locale |

---

## 3. Brand Identity

| Element | Value |
|---|---|
| Primary black | `#000000` |
| Accent red | `#B0302D` |
| White | `#FFFFFF` |
| Heading font | ASPIRE Regular (web font file required — must be provided as `.woff2`; if unavailable, Orbitron from Google Fonts is a close geometric alternative) |
| Body font (EN) | Inter (Google Fonts) |
| Body font (AR) | Noto Sans Arabic (Google Fonts) |

**Logo usage rules (per brand guidelines):**
- Dark/black backgrounds → white logo
- White/light backgrounds → black logo
- Red backgrounds → white logo
- Never distort, recolor outside approved palette, or place on busy backgrounds

---

## 4. Site Structure & Navigation

### Top Navigation
```
[Logo]   Home · About · Products ▾ · Services · News · Contact   [EN | AR]
```
Products dropdown expands to show all 6 category links.

### Pages

#### 4.1 Home
Sections (top to bottom):
1. **Full-screen hero** — bold tagline over dark/equipment imagery, two CTAs: "Explore Our Brands" (red button) + "Contact Us" (outlined)
2. **Trust strip** — "45+ Years · 14 International Brands · 6 Equipment Categories · Egypt's Automotive Professionals"
3. **6 Category cards** — icon/image, category name, "View Brands →" link
4. **Brand logos marquee** — all 14 brand logos scrolling horizontally
5. **Why Elbassiouni** — 3–4 value propositions (expertise, genuine parts, after-sales, certified training)
6. **Contact CTA banner** — red background, white text, "Get in Touch" button

#### 4.2 About Us
- Company founding story (~1980, 45+ years)
- Mission and values
- Egypt automotive market expertise
- Why choose Elbassiouni (trust signals)

#### 4.3 Products (Landing Page)
- Intro paragraph about the portfolio
- 6 category cards linking to sub-pages
- Brand logos strip

#### 4.3.1 Vehicle Lifts
Brands: Rotary Lifts, Real (Rotary Engineering Asia Limited), Finkbeiner

#### 4.3.2 Wheel Service
Brands: Hunter Engineering, HPA Faip

#### 4.3.3 Vehicle Inspection & Testing
Brands: Maha Haldenwang

#### 4.3.4 A/C Service
Brands: Ecotechnics Italy, Weaco by Dometic

#### 4.3.5 Body & Paint
Brands: SaicoZero Italy, Deca Welding, Wedgeclamp, Chief USA

#### 4.3.6 Hand Tools & Workshop Equipment
Brands: Polar Hand Tools, Romess Tools

**Each category page layout:**
1. Full-width hero image + category title
2. Brief category intro paragraph
3. Brand cards (one per brand): logo, description, key products list
4. "Request a Quote" CTA → Contact page

#### 4.4 Services
Six services, each with a title, icon, and short description:
1. After-Sales Support & Spare Parts
2. Equipment Installation & Commissioning
3. Maintenance Contracts
4. Training for Technicians
5. Calibration & Inspection Services
6. Inspection Lane Operation

#### 4.5 News
- Blog/news listing page
- Individual article pages
- Content managed entirely in Sanity
- Categories: Company News, Product Launches, Industry Updates

#### 4.6 Contact
- Contact form: Name, Company, Phone, Email, Subject (dropdown: Sales Inquiry / After-Sales Support / General), Message
- Form submissions delivered by email via Resend (free tier) — owner provides the destination email address
- WhatsApp button (prominent) — owner provides WhatsApp number
- Phone number(s) — owner provides
- Physical address — owner provides
- Embedded Google Map — requires a Google Maps embed URL (owner provides address)
- Available in EN and AR

---

## 5. Persistent UI Elements

- **Sticky WhatsApp icon** — bottom-right corner on all pages
- **Footer** — Logo, short tagline, category links, contact info, social media icons
- **Language switcher** — EN | AR toggle in top navbar; switches locale and flips layout to RTL for Arabic

---

## 6. Content Strategy

### Text
- Extracted and adapted from each brand's official supplier website
- Localized into Arabic for the AR version
- All managed in Sanity — owner can update text and images independently

### Images
- Product photos provided by the owner
- Brand imagery sourced from supplier sites where permitted
- Hero images: high-quality automotive workshop photography

### Logo Files
- Exported from the PDF brand guidelines as SVG and PNG
- White version for dark backgrounds, black version for light backgrounds

---

## 7. Bilingual Implementation

- Two locales: `en` (default) and `ar`
- Arabic locale triggers RTL layout automatically
- All Sanity content types have localized fields for EN and AR
- Arabic body text uses Noto Sans Arabic
- Language switcher persists current page context (e.g., switching on a category page stays on that category page)
- `hreflang` tags for SEO

---

## 8. Content Management (Sanity)

The owner can self-service update:
- Brand descriptions and product lists
- Services descriptions
- News articles
- Contact information
- Homepage tagline and trust strip numbers

Structural changes (adding pages, changing layouts, new sections) require developer assistance.

---

## 9. Out of Scope

- E-commerce / online purchasing
- Customer login / portal
- Live chat (WhatsApp button covers this)
- Product catalog with pricing
