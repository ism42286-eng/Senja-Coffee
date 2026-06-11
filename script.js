
function hubungiSaya() {
  const nomorWhatsapp = "6288704387608";
  let pesan = "Halo, Saya ingin bekerja sama dengan anda";
  const url = `https://whatsapp.com/${nomorWhatsapp}&text=${encodeURIComponent(pesan)}`;
  
  window.open(url, "_blank");
};

const btnMenu = document.getElementById("goToMenu");
const menuSection = document.getElementById("menu");
btnMenu.addEventListener ('click', () => {
  menuSection.scrollIntoView ({
    behavior: 'smooth',
    block: 'start'
  });
});

function lihatSemuaMenu() {
  alert("Semua menu sudah terlihat")
}

const nama = document.getElementById("input-nama");
const email = document.getElementById("input-email");
const pesan = document.getElementById("input-pesan");
const sendPesan = document.getElementById("btn-send-pesan");

sendPesan.addEventListener("click",() => {
  const nomor = "6288704387608";
  const massage = `Nama: ${nama.value}, Email: ${email.value}, Pesan: ${pesan.value}`;
  const url = `https://whatsapp.com/${nomor}&text=${encodeURIComponent(massage)}`;
  window.open(url, '_blank');
});