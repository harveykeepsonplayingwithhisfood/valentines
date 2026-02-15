const TOTAL = 6;

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("main");

const backdrop = document.getElementById("backdrop");
const modalText = document.getElementById("modalText");
const closeBtn = document.getElementById("closeBtn");

const progress = document.getElementById("progress");
const finalCard = document.getElementById("finalCard");

startBtn.onclick = () => {
  intro.style.display = "none";
  main.style.display = "flex";
};

const letters = {
  1: `I love you sososo much baby ive never loved anyway the way i love you everything about my love for you is so different then anything ive felt for someone before its all new for me`,
  2: `I never thought i could love someone as much as love you im a misantropist cynic but i love everything about you, i love your pretty eyes, i love how you get so passionate about stuff it amazes me, i love how you are with cats when you cared for the stray kitten and were gonna cry about having to leave it out, i love your laugh i always wanna make you laugh everytime we call i use my superhuman critical thinking to find any path to make you laugh, i just love you and i love how you make me feel, like life isnt that bad like its beautiful`,
  3: `every moment we share together i cherish so deeply in my heart every moment we have throughout everyday i think back on when im gonna go to sleep and i go to sleep happy knowing im dating the most beautiful girl in the world`,
  4: `i know we fight sometimes but even in those moments, after those moments i feel happy because i know nothings will break us apart no matter what till death do us part`,
  5: `everyday i tell you i love you and it feels weak to me the word love doesnt feel strong enough, if love is a word that other humans use everyday i dont feel like its special enough for you, my baby i want to create a new word that is stronger then love to express how i feel but even that wouldnt work to express how i feel about you.`,
  6: `im a person with baggage, alot of baggage i've hid all of that all my life with everyone also hiding myself from everyone not really letting anyone see me but you see me, and you know my baggage and you dont care that alone makes me wanna cry everyday`
};

const finalMessage = `while(true) i love you
i love you infinitely leigh`;

const clicked = new Set();

function openModal(text){
  modalText.textContent = text;
  backdrop.style.display = "grid";
}

function closeModal(){
  backdrop.style.display = "none";
}

closeBtn.onclick = closeModal;
backdrop.addEventListener("click", (e) => {
  if (e.target === backdrop) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

document.querySelectorAll(".zone").forEach(btn => {
  btn.onclick = () => {
    const id = Number(btn.dataset.id);
    if (clicked.has(id)) return;
    clicked.add(id);

    btn.classList.add("picked");
    const badge = document.createElement("div");
    badge.className = "badge";
    badge.textContent = "🍓";
    btn.appendChild(badge);

    progress.textContent = `${clicked.size}/${TOTAL} petals opened`;
    openModal(letters[id]);

    if (clicked.size === TOTAL) {
      finalCard.style.display = "block";
      finalCard.textContent = finalMessage;
    }
  };
});
