# VITHANAGE STORES (විතානගේ ස්ටෝර්ස්) — UI/UX PROTOTYPE

> ජනපදහන්දිය, හම්බේගමුව, තණමල්විල, ශ්‍රී ලංකාව.  
> **Fresh & Quality Grocery Store Interactive UI/UX Prototype**

---

## 🌟 ප්‍රධාන විශේෂාංග (Key Features)

1. **Brand Identity:**
   - Shopping Basket + Fresh Leaf සංකල්පය පදනම් කරගත් Scalable Vector Logos (Primary, Compact Header, Footer, Favicon).
   - Brand Colors: Dark Green (`#0B4F32`), Gold (`#D4AF37`), Fresh Green (`#4CAF50`), White (`#F7F7F7`).
2. **ද්විභාෂා සහය (Bilingual Support):**
   - ඉහළ Top Bar හි ඇති Language Switcher බොත්තම මඟින් සිංහල සහ ඉංග්‍රීසි භාෂා අතර ක්ෂණිකව මාරු විය හැක.
3. **Responsive UI/UX Layout:**
   - **Desktop:** Left-side Categories Sidebar + Compact Hero Banner + 4-Column Product Grid.
   - **Tablet:** Touch-friendly Navigation + 3-Column Product Grid.
   - **Mobile:** Mobile Drawer Menu, Horizontal Swipeable Category Chips, 2-Column Touch-Friendly Product Cards.
4. **Live Search & Category Filtering:**
   - පිටුව Refresh නොවී ක්ෂණිකව සිල්ලර බඩු සෙවීම සහ පෙරීම.
5. **Direct WhatsApp Ordering:**
   - ඕනෑම භාණ්ඩයක "WhatsApp ඇණවුම" ක්ලික් කළ විට භාණ්ඩයේ නම, මිල සහ ඒකකය ඇතුළත් කර ස්වයංක්‍රීයව WhatsApp පණිවිඩය සකස් වේ.
6. **Store Location & Hours Panel:**
   - ලිපිනය, විවෘත වේලාවන්, දුරකථන සහ Google Maps සබැඳිය.

---

## 🚀 Website Prototype එක Run කරන ආකාරය (How to Run)

### ක්‍රමය 1 — සෘජුවම Browser එකෙන් (Direct Open):
- `index.html` ගොනුව Double Click කර Google Chrome හෝ ඕනෑම Browser එකකින් විවෘත කරන්න.

### ක්‍රමය 2 — Node.js Local Server මඟින්:
පරිගණකයේ Terminal / PowerShell විවෘත කර පහත Command එක Run කරන්න:
```bash
node server.js
```
ඉන්පසු Browser එකේ පහත Link එක විවෘත කරන්න:
👉 **http://127.0.0.1:3000**

---

## 📁 Folder Structure

```text
vithanage-stores/
│
├── index.html                      # ප්‍රධාන Semantic HTML5 වෙබ් පිටුව
├── server.js                       # Lightweight Local Testing Server
│
├── public/
│   └── assets/
│       ├── logos/                  # Brand Vector Logos & Favicon
│       ├── icons/                  # SVG Category Sprite
│       └── images/                 # Hero Artwork & Promo Banners
│
└── src/
    ├── styles/                     # variables.css, base.css, components.css, responsive.css
    ├── data/                       # store-info.js, categories.js, products.js
    └── utils/                      # i18n.js, app.js
```

---

## ✏️ තොරතුරු සංස්කරණය කරන ආකාරය (How to Customize)

1. **දුරකථන අංක, ලිපිනය හෝ වේලාවන් වෙනස් කිරීමට:**
   - `src/data/store-info.js` ගොනුව විවෘත කර එහි ඇති අගයන් වෙනස් කරන්න.
2. **නව බඩු භාණ්ඩ සහ මිල ගණන් වෙනස් කිරීමට:**
   - `src/data/products.js` ගොනුවේ අදාළ භාණ්ඩයේ `price` හෝ `name` සංස්කරණය කරන්න.
3. **භාණ්ඩ කාණ්ඩ වෙනස් කිරීමට:**
   - `src/data/categories.js` ගොනුව භාවිතා කරන්න.

---

© 2026 Vithanage Stores (විතානගේ ස්ටෝර්ස්). සියලුම හිමිකම් ඇවිරිණි.
