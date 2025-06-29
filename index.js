// Menjalankan tracker jika tersedia
try {
    require('../tracker')(); // Menjalankan pelacakan penggunaan
} catch (e) {
    // Abaikan error jika file tracker.js tidak ada
}

// Mengimpor dan mengekspor semua fitur dari Baileys asli
module.exports = require('@whiskeysockets/baileys');
