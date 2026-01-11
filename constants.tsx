
import { SiteContent } from './types';

export const DEFAULT_CONTENT: SiteContent = {
  heroTitle: "Raja Mampet Ryan Bali",
  heroSubtitle: "Spesialis Mengatasi WC Mampet & Saluran Tersumbat di Seluruh Bali. Bergaransi, Cepat, dan Harga Terjangkau!",
  aboutText: "Kami hadir di tengah masyarakat Bali sebagai solusi terpercaya untuk masalah sanitasi. Dengan teknisi berpengalaman dan peralatan modern, kami menjamin hasil yang maksimal tanpa bongkar berlebih. Kepuasan Anda adalah prioritas kami.",
  phone: "081234567890",
  whatsapp: "6281234567890",
  address: "Denpasar, Bali - Indonesia",
  services: [
    {
      id: "1",
      title: "WC Mampet",
      description: "Mengatasi masalah kloset tersumbat dengan cepat tanpa merusak pipa.",
      icon: "toilet"
    },
    {
      id: "2",
      title: "Saluran Cuci Piring",
      description: "Lemak membandel di sink dapur? Kami bersihkan sampai tuntas.",
      icon: "utensils"
    },
    {
      id: "3",
      title: "Pipa Kamar Mandi",
      description: "Lantai kamar mandi banjir karena air tidak turun? Kami solusinya.",
      icon: "bath"
    },
    {
      id: "4",
      title: "Sedot WC / Septic Tank",
      description: "Layanan pengurasan septic tank penuh dengan armada bersih.",
      icon: "truck"
    }
  ],
  testimonials: [
    { name: "Bli Wayan", text: "Pelayanan sangat cepat. Hubungi pagi, siang sudah lancar lagi WC-nya. Rekomended di Bali!", rating: 5 },
    { name: "Ibu Kadek", text: "Harga transparan dan teknisinya sopan. Saluran cuci piring yang mampet berbulan-bulan langsung beres.", rating: 5 },
    { name: "Bapak Agus", text: "Terima kasih Raja Mampet Ryan. Akhirnya pipa kamar mandi gak banjir lagi. Sukses terus!", rating: 4 }
  ]
};
