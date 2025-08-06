const surpriseText = `Dear Gudi ❤️,

Hey Gudi... 😚Hehe tate ye website kemitiya lagila kahibu... Bhout dino hela ye banauchi... Hehe aau gote new try bhi karichi sie hauchi gote game just like piano tiles.. try karibu extremly easy aachi.... Hehe aau bhout jinisha aachi.... Ye chad na tu sun.. Tu dekh ye rakhi re muh pakhere naii baliki sad habuni... It doesn't matter tu rakhi bandh ya na bandh i will always protect you and love you forever ❤️❤️aau haaan ye time tk katha thik bhi naii... Like my personnel life dekhuchu... And same goes to you tooo tu new new experience karilu and i am guilty kii toro ye situation re muh toh pakhere naii aau tate help kari paruni bhal se but trust me anything serious i am always there for you... So stay strong and grow well.. Muh sabu bele toh support re aachi aau kie thau na thau you know how much your brother loves you ❤️ hehe.. Happy rakhshya bandan gudi 😍😍❤️ ye moh tarraf ru tk choto effort hehe 😚😚tate kemitiya lagila kahibu`;

let index = 0;
let typingInterval;

function showSurprise() {
  const box = document.getElementById("messageBox");
  const text = document.getElementById("typingText");

  if (box.style.display !== "block") {
    box.style.display = "block";

    // ✅ Scroll to top of box with gap — only once
    box.scrollIntoView({ behavior: "smooth", block: "start" });

    text.textContent = "";
    index = 0;
    clearInterval(typingInterval);
    typingInterval = setInterval(() => {
      if (index < surpriseText.length) {
        text.textContent += surpriseText.charAt(index);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 40);
  }
}

// 🎮 Show Game
function showGame() {
  const gameContainer = document.getElementById("gameContainer");
  gameContainer.style.display = "block";
  gameContainer.scrollIntoView({ behavior: "smooth" });
}

// 🌸 Petal Animation
const petalContainer = document.querySelector('.petal-container');

function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = 3 + Math.random() * 4 + 's';
  petal.style.width = petal.style.height = 10 + Math.random() * 10 + 'px';
  petalContainer.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 7000);
}

setInterval(createPetal, 300);
