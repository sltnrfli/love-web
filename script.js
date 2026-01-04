const noBtn = document.getElementById("noBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const loveText = document.getElementById("loveText");
const music = document.getElementById("bgMusic");

const reasons = [
  "Aku juga kangen kamu 🤍",
  "Peluk virtual dulu sini 🫂",
  "Hari aku lebih enak kalau ada kamu",
  "Aku nyaman sama kamu",
  "Kamu itu rumah buat aku 🏡",
  "Kalau sama kamu, aku tenang",
  "Aku bersyukur punya kamu 💕",
];

// tombol ENGGAK kabur
function moveButton() {
  const x = Math.random() * 160 - 80;
  const y = Math.random() * 160 - 80;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// pindah halaman + play musik
function goToLove() {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  music.play();
}

// alasan random
function nextReason() {
  const random = Math.floor(Math.random() * reasons.length);
  loveText.innerText = reasons[random];
}

// play / pause musik
function toggleMusic() {
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
