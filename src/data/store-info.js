// Vithanage Stores - Official Store Information (Placeholder data ready for final updates)
const STORE_INFO = {
  name: {
    en: "Vithanage Stores",
    si: "විතානගේ ස්ටෝර්ස්"
  },
  tagline: {
    en: "Fresh & Quality Grocery Store",
    si: "නැවුම් සහ ගුණාත්මක සිල්ලර බඩු වෙළඳසැල"
  },
  address: {
    en: "Janapadahandiya, Hambegamuwa, Thanamalwila, Sri Lanka",
    si: "ජනපදහන්දිය, හම්බේගමුව, තණමල්විල, ශ්‍රී ලංකාව"
  },
  phone: {
    display: "+94 77 123 4567",
    raw: "+94771234567",
    landline: "+94 47 222 3456"
  },
  whatsapp: {
    number: "94771234567", // WhatsApp country code + number without plus
    display: "+94 77 123 4567",
    defaultMessage: {
      si: "හෙලෝ Vithanage Stores, මට සිල්ලර බඩු ඇණවුම් කිරීමට අවශ්‍යයි.",
      en: "Hello Vithanage Stores, I would like to place an order for groceries."
    }
  },
  email: "info@vithanagestores.com",
  openingHours: {
    si: "සඳුදා - ඉරිදා: පෙ.ව. 7.00 - ප.ව. 9.30",
    en: "Mon - Sun: 7:00 AM - 9:30 PM",
    badge: {
      si: "දැන් විවෘතයි",
      en: "Open Daily"
    }
  },
  googleMapUrl: "https://maps.google.com/?q=Hambegamuwa+Thanamalwila+Sri+Lanka"
};

if (typeof module !== 'undefined') {
  module.exports = STORE_INFO;
}
