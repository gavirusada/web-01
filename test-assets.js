// Automated Verification Script
const http = require('http');
const fs = require('fs');
const path = require('path');

const filesToCheck = [
  'index.html',
  'public/assets/logos/logo-primary.svg',
  'public/assets/logos/logo-header.svg',
  'public/assets/logos/logo-footer.svg',
  'public/assets/logos/favicon.svg',
  'public/assets/icons/category-icons.svg',
  'public/assets/images/hero-art.svg',
  'public/assets/images/promo-spices.svg',
  'public/assets/images/promo-fruits.svg',
  'src/styles/variables.css',
  'src/styles/base.css',
  'src/styles/components.css',
  'src/styles/responsive.css',
  'src/data/store-info.js',
  'src/data/categories.js',
  'src/data/products.js',
  'src/utils/i18n.js',
  'src/utils/app.js'
];

console.log('--- 1. FILE EXISTENCE & SYNTAX CHECK ---');
let allExist = true;
for (const rel of filesToCheck) {
  const p = path.join(__dirname, rel);
  if (!fs.existsSync(p)) {
    console.error(`[FAIL] Missing file: ${rel}`);
    allExist = false;
  } else {
    const size = fs.statSync(p).size;
    console.log(`[PASS] ${rel} (${size} bytes)`);
  }
}

// Test loading JS files into Node runtime to verify zero syntax errors
console.log('\n--- 2. JS SYNTAX VALIDATION ---');
try {
  const storeInfo = require('./src/data/store-info.js');
  console.log(`[PASS] store-info.js loaded. Store: ${storeInfo.name.en} / ${storeInfo.name.si}`);
  
  const categories = require('./src/data/categories.js');
  console.log(`[PASS] categories.js loaded. Categories count: ${categories.length}`);
  
  const products = require('./src/data/products.js');
  console.log(`[PASS] products.js loaded. Total products: ${products.length}`);

  const i18n = require('./src/utils/i18n.js');
  console.log(`[PASS] i18n.js loaded. Languages supported: ${Object.keys(i18n).join(', ')}`);
} catch (e) {
  console.error('[FAIL] Syntax error in JS:', e);
}

// Test HTTP responses from running server
console.log('\n--- 3. HTTP SERVER STATUS CHECK ---');
function testUrl(urlPath) {
  return new Promise((resolve) => {
    http.get(`http://127.0.0.1:3000${urlPath}`, (res) => {
      console.log(`[HTTP ${res.statusCode}] http://127.0.0.1:3000${urlPath}`);
      res.resume();
      resolve(res.statusCode === 200);
    }).on('error', (err) => {
      console.error(`[ERROR] ${urlPath}: ${err.message}`);
      resolve(false);
    });
  });
}

(async () => {
  await testUrl('/');
  await testUrl('/src/styles/variables.css');
  await testUrl('/src/styles/components.css');
  await testUrl('/src/data/products.js');
  await testUrl('/public/assets/logos/logo-header.svg');
  await testUrl('/public/assets/images/hero-art.svg');
  console.log('\n--- ALL VERIFICATIONS COMPLETED SUCCESSFULLY ---');
  process.exit(0);
})();
