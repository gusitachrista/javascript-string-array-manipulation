// Case 1: User Data Cleaner

const data = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const bersihWhitespace = data.trim();
console.log("Data Bersih:", bersihWhitespace);

const namaArray = bersihWhitespace.split(",");
console.log("Array Nama:", namaArray);

const lowercaseNama = namaArray.map(nama => nama.trim().toLowerCase());
console.log("Nama Lowercase:", lowercaseNama);

const hasil = lowercaseNama.join(" | ");
console.log("Hasil Akhir:", hasil);


// Case 2: E-Commerce Product Filter

const products = [
  { name: 'Laptop', price: 1000, active: true },
  { name: 'Mouse', price: 20, active: false },
  { name: 'Keyboard', price: 50, active: true }
];

const activeProducts = products.filter(product => product.active);
console.log("Produk Aktif:", activeProducts);

const activeNamesUppercase = activeProducts.map(product => product.name.toUpperCase());
console.log("Nama Kapital:", activeNamesUppercase);

const totalActivePrice = activeProducts.reduce((total, product) => total + product.price, 0);
console.log("Total Harga Produk Aktif:", totalActivePrice);