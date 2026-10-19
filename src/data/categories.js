// Vithanage Stores - Product Categories
const CATEGORIES = [
  {
    id: "all",
    name: {
      si: "සියලුම භාණ්ඩ",
      en: "All Products"
    },
    icon: "icon-cat-all",
    count: 24,
    featured: true
  },
  {
    id: "rice-grains",
    name: {
      si: "හාල් සහ ධාන්‍ය",
      en: "Rice & Grains"
    },
    icon: "icon-cat-grains",
    count: 6,
    featured: true
  },
  {
    id: "vegetables-fruits",
    name: {
      si: "එළවළු සහ පලතුරු",
      en: "Vegetables & Fruits"
    },
    icon: "icon-cat-vege",
    count: 4,
    featured: true
  },
  {
    id: "spices-oils",
    name: {
      si: "කුළුබඩු සහ තෙල්",
      en: "Spices & Oils"
    },
    icon: "icon-cat-spices",
    count: 5,
    featured: true
  },
  {
    id: "dairy-tea",
    name: {
      si: "තේ, කෝපි සහ කිරිපිටි",
      en: "Tea, Coffee & Dairy"
    },
    icon: "icon-cat-dairy",
    count: 4,
    featured: true
  },
  {
    id: "biscuits-snacks",
    name: {
      si: "බිස්කට් සහ කෙටි ආහාර",
      en: "Biscuits & Snacks"
    },
    icon: "icon-cat-snacks",
    count: 3,
    featured: true
  },
  {
    id: "household",
    name: {
      si: "ගෘහස්ථ සහ සනීපාරක්ෂක",
      en: "Household & Cleaning"
    },
    icon: "icon-cat-household",
    count: 2,
    featured: false
  }
];

if (typeof module !== 'undefined') {
  module.exports = CATEGORIES;
}
