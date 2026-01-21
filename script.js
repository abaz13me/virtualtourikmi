// Inisialisasi Viewer
const viewer = new PhotoSphereViewer.Viewer({
  container: document.querySelector("#viewer"),
  panorama: "assets/img/tour1.jpg",
  defaultZoomLvl: 50,
  navbar: [
    "zoom",
    "fullscreen",
    "caption", // Menambahkan fitur navbar bawaan
  ],
});

// Fungsi Interaktif (Ganti Gambar + Ganti Teks + Ganti Warna Tombol)
function loadScene(imageFile, titleText, descText, btnElement) {
  // 1. Ganti Gambar Panorama
  viewer
    .setPanorama("assets/img/" + imageFile)
    .then(() => {
      console.log("Scene switched to " + imageFile);
    })
    .catch((err) => {
      console.error("Gagal memuat gambar", err);
      alert("Gambar tidak ditemukan! Pastikan nama file benar.");
    });

  // 2. Ganti Teks Judul dan Deskripsi (DOM Manipulation)
  document.getElementById("location-title").innerText = titleText;
  document.getElementById("location-desc").innerText = descText;

  // 3. Update Tombol Aktif (UX Feedback)
  // Hapus kelas 'active' dari semua tombol
  let buttons = document.querySelectorAll(".btn-nav");
  buttons.forEach((btn) => btn.classList.remove("active"));

  // Tambahkan kelas 'active' ke tombol yang diklik
  btnElement.classList.add("active");
}
