// Vithanage Stores - Product Catalog
const PRODUCTS = [
  {
    id: "p1",
    name: {
      si: "කීරි සම්බා (Keeri Samba Rice)",
      en: "Keeri Samba Premium Rice"
    },
    category: "rice-grains",
    price: 1450,
    unit: {
      si: "5 kg බෑගය",
      en: "5 kg Bag"
    },
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=400&q=80",
    badge: {
      si: "ජනප්‍රිය",
      en: "Best Seller"
    },
    inStock: true,
    featured: true
  },
  {
    id: "p2",
    name: {
      si: "රතු කැකුළු සහල් (Red Raw Rice)",
      en: "Red Raw Rice"
    },
    category: "rice-grains",
    price: 1100,
    unit: {
      si: "5 kg බෑගය",
      en: "5 kg Bag"
    },
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: "p3",
    name: {
      si: "මයිසූර් පරිප්පු (Red Dhal)",
      en: "Mysore Red Dhal"
    },
    category: "rice-grains",
    price: 380,
    unit: {
      si: "1 kg",
      en: "1 kg"
    },
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80",
    badge: {
      si: "නැවුම් තොග",
      en: "Fresh Stock"
    },
    inStock: true,
    featured: true
  },
  {
    id: "p4",
    name: {
      si: "සුදු සීනි (White Sugar)",
      en: "Refined White Sugar"
    },
    category: "rice-grains",
    price: 275,
    unit: {
      si: "1 kg",
      en: "1 kg"
    },
    image: "https://images.unsplash.com/photo-1581441363689-1f3c3c414635?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: "p5",
    name: {
      si: "සිලෝන් තේ කොළ (Pure Ceylon Tea)",
      en: "Pure Ceylon Black Tea"
    },
    category: "dairy-tea",
    price: 420,
    unit: {
      si: "400 g පැකට්ටුව",
      en: "400 g Pack"
    },
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=400&q=80",
    badge: {
      si: "100% සිලෝන්",
      en: "100% Ceylon"
    },
    inStock: true,
    featured: true
  },
  {
    id: "p6",
    name: {
      si: "ෆුල් ක්‍රීම් කිරිපිටි (Milk Powder)",
      en: "Full Cream Milk Powder"
    },
    category: "dairy-tea",
    price: 1050,
    unit: {
      si: "400 g පැකට්ටුව",
      en: "400 g Pack"
    },
    image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: "p7",
    name: {
      si: "පිරිසිදු සුදු පොල්තෙල් (White Coconut Oil)",
      en: "Pure White Coconut Oil"
    },
    category: "spices-oils",
    price: 680,
    unit: {
      si: "750 ml බෝතලය",
      en: "750 ml Bottle"
    },
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80",
    badge: {
      si: "පිරිසිදු",
      en: "Pure Quality"
    },
    inStock: true,
    featured: true
  },
  {
    id: "p8",
    name: {
      si: "බැදපු තුනපහ කුඩු (Roasted Curry Powder)",
      en: "Roasted Ceylon Curry Powder"
    },
    category: "spices-oils",
    price: 240,
    unit: {
      si: "250 g පැකට්ටුව",
      en: "250 g Pack"
    },
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: "p9",
    name: {
      si: "අමු මිරිස් කුඩු (Raw Chili Powder)",
      en: "Crushed Chili Powder"
    },
    category: "spices-oils",
    price: 390,
    unit: {
      si: "250 g",
      en: "250 g"
    },
    image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: "p10",
    name: {
      si: "පිරිසිදු කහ කුඩු (Pure Turmeric Powder)",
      en: "Pure Turmeric Powder"
    },
    category: "spices-oils",
    price: 260,
    unit: {
      si: "100 g",
      en: "100 g"
    },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: "p11",
    name: {
      si: "ලොකු ළූණු (Big Onions)",
      en: "Fresh Big Onions"
    },
    category: "vegetables-fruits",
    price: 320,
    unit: {
      si: "1 kg",
      en: "1 kg"
    },
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: "p12",
    name: {
      si: "නැවුම් අර්තාපල් (Fresh Potatoes)",
      en: "Fresh Local Potatoes"
    },
    category: "vegetables-fruits",
    price: 240,
    unit: {
      si: "1 kg",
      en: "1 kg"
    },
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: true
  },
  {
    id: "p13",
    name: {
      si: "ගොවිපල කැරට් (Farm Fresh Carrots)",
      en: "Farm Fresh Carrots"
    },
    category: "vegetables-fruits",
    price: 220,
    unit: {
      si: "500 g",
      en: "500 g"
    },
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80",
    badge: {
      si: "නැවුම්",
      en: "Fresh Pick"
    },
    inStock: true,
    featured: false
  },
  {
    id: "p14",
    name: {
      si: "රතු ළූණු (Local Red Shallots)",
      en: "Local Red Onions"
    },
    category: "vegetables-fruits",
    price: 280,
    unit: {
      si: "500 g",
      en: "500 g"
    },
    image: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: "p15",
    name: {
      si: "ක්‍රීම් ක්‍රැකර් බිස්කට් (Cream Cracker)",
      en: "Cream Cracker Biscuits"
    },
    category: "biscuits-snacks",
    price: 340,
    unit: {
      si: "500 g පැකට්ටුව",
      en: "500 g Pack"
    },
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: "p16",
    name: {
      si: "චොකලට් බිස්කට් (Chocolate Cream)",
      en: "Chocolate Cream Biscuits"
    },
    category: "biscuits-snacks",
    price: 320,
    unit: {
      si: "400 g පැකට්ටුව",
      en: "400 g Pack"
    },
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: "p17",
    name: {
      si: "පීරිසි සෝදන දියර (Dishwashing Liquid)",
      en: "Lemon Dishwashing Liquid"
    },
    category: "household",
    price: 290,
    unit: {
      si: "500 ml බෝතලය",
      en: "500 ml Bottle"
    },
    image: "https://images.unsplash.com/photo-1585670270608-b404fb080d01?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: false
  },
  {
    id: "p18",
    name: {
      si: "රෙදි සෝදන සබන් (Laundry Soap)",
      en: "Laundry Soap Bar"
    },
    category: "household",
    price: 360,
    unit: {
      si: "3 කට්ටලය (Pack of 3)",
      en: "Pack of 3"
    },
    image: "https://images.unsplash.com/photo-1607006314605-726487198894?auto=format&fit=crop&w=400&q=80",
    badge: null,
    inStock: true,
    featured: false
  }
];

if (typeof module !== 'undefined') {
  module.exports = PRODUCTS;
}
