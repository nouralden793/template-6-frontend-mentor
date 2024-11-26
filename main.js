let threeImgDivsNormal = Array.from(
  document.querySelectorAll(".normal .game > div")
);
let threeImgDivsNormalImg = Array.from(
  document.querySelectorAll(".normal .game > div img")
);
let randomImg =
  threeImgDivsNormalImg[
    Math.floor(Math.random() * threeImgDivsNormalImg.length)
  ];
let srcArr = [
  "./images/icon-paper.svg",
  "./images/icon-scissors.svg",
  "./images/icon-rock.svg",
];
let playAgain = document.querySelector(".normal .playAgain");
let playAgainBtn = document.querySelector(".normal .playAgain button");
let playAgainP = document.querySelector(".normal .playAgain p");

// =================

let threeImgDivsBonus = Array.from(
  document.querySelectorAll(".bonus .game > div")
);
let threeImgDivsBonusImg = Array.from(
  document.querySelectorAll(".bonus .game > div img")
);
let randomImgBonus =
  threeImgDivsNormalImg[
    Math.floor(Math.random() * threeImgDivsNormalImg.length)
  ];
let srcArrBonus = [
  "./images/icon-paper.svg",
  "./images/icon-scissors.svg",
  "./images/icon-rock.svg",
  "./images/icon-lizard.svg",
  "./images/icon-spock.svg",
];
let playAgainBonus = document.querySelector(".bonus .playAgainNormal");
let playAgainBtnBonus = document.querySelector(
  ".bonus .playAgainNormal button"
);
let playAgainPBonus = document.querySelector(".bonus .playAgainNormal p");

document.querySelector(".rules").onclick = function () {
  document.querySelector(".rules-nomal").classList.add("appear-scale");
  document.querySelector(".layout").classList.add("appear");
  document.querySelector(".normal").classList.add("pointer-disenable");
};

document.querySelector(".rules-nomal .close").onclick = function () {
  document.querySelector(".rules-nomal").classList.remove("appear-scale");
  document.querySelector(".layout").classList.remove("appear");
  document.querySelector(".normal").classList.remove("pointer-disenable");
};

document.querySelector(".bonus-rules").onclick = function () {
  document.querySelector(".rules-bonus").classList.add("appear-scale");
  document.querySelector(".layout").classList.add("appear");
  document.querySelector(".bonus").classList.add("pointer-disenable");
};

document.querySelector(".rules-bonus .close").onclick = function () {
  document.querySelector(".rules-bonus").classList.remove("appear-scale");
  document.querySelector(".layout").classList.remove("appear");
  document.querySelector(".bonus").classList.remove("pointer-disenable");
};

threeImgDivsNormal.forEach((div) => {
  div.addEventListener("click", (e) => {
    document.querySelector(".play").classList.add("appear-flex");
    let div = document.createElement("div");
    let divClass;
    if (e.target.parentElement.classList.contains("paper")) {
      div.className = "paper";
      divClass = "paper";
    }
    if (e.target.parentElement.classList.contains("rock")) {
      div.className = "rock";
      divClass = "rock";
    }
    if (e.target.parentElement.classList.contains("scissers")) {
      div.className = "scissers";
      divClass = "scissers";
    }
    div.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;";
    e.target.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90px;  pointer-events: none;";
    div.appendChild(e.target);
    document.querySelector(".choosen-img").textContent = "";
    document.querySelector(".choosen-img").appendChild(div);
    let ranDiv = document.createElement("div");
    let img = document.createElement("img");
    let randomSrc = srcArr[Math.floor(Math.random() * srcArr.length)];
    img.src = `${randomSrc}`;
    let ranDivClass;
    if (randomSrc === "./images/icon-paper.svg") {
      ranDiv.className = "paper";
      ranDivClass = "paper";
    } else if (randomSrc === "./images/icon-scissors.svg") {
      ranDiv.className = "scissers";
      ranDivClass = "scissers";
    } else if (randomSrc === "./images/icon-rock.svg") {
      ranDiv.className = "rock";
      ranDivClass = "rock";
    }
    ranDiv.appendChild(img);
    ranDiv.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;";
    img.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90px;  pointer-events: none;";
    setTimeout(() => {
      document.querySelector(".house-choosen-img").appendChild(ranDiv);
    }, 1000);
    document.querySelector(".game").classList.add("none");
    if (divClass == ranDivClass) {
      setTimeout(() => {
        playAgain.classList.remove("hidden");
        playAgainP.textContent = "Draw";
      }, 1000);
    } else if (divClass == "paper" && ranDivClass == "rock") {
      setTimeout(() => {
        document.querySelector(".normal .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgain.classList.remove("hidden");
        playAgainP.textContent = "You Win";
      }, 1000);
    } else if (divClass == "paper" && ranDivClass == "scissers") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgain.classList.remove("hidden");
        playAgainP.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "rock" && ranDivClass == "paper") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgain.classList.remove("hidden");
        playAgainP.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "rock" && ranDivClass == "scissers") {
      setTimeout(() => {
        document.querySelector(".normal .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgain.classList.remove("hidden");
        playAgainP.textContent = "You Win";
      }, 1000);
    } else if (divClass == "scissers" && ranDivClass == "paper") {
      setTimeout(() => {
        document.querySelector(".normal .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgain.classList.remove("hidden");
        playAgainP.textContent = "You Win";
      }, 1000);
    } else if (divClass == "scissers" && ranDivClass == "rock") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgain.classList.remove("hidden");
        playAgainP.textContent = "You Lose";
      }, 1000);
    }
  });
});

playAgainBtn.onclick = function () {
  playAgain.classList.add("hidden");
  playAgainP.textContent = "";
  document.querySelector(".normal .game").classList.remove("none");
  document.querySelector(".normal .choosen-img").textContent = "";
  document.querySelector(".normal .choosen-img").classList.remove("win");
  document.querySelector(".normal .house-choosen-img").textContent = "";
  document.querySelector(".normal .house-choosen-img").classList.remove("win");
  document.querySelector(".normal .play").classList.remove("appear-flex");
  let paperImg = document.createElement("img");
  paperImg.src = "./images/icon-paper.svg";
  document.querySelector(".normal .game .paper").textContent = "";
  document.querySelector(".normal .game .paper").appendChild(paperImg);
  let rockImg = document.createElement("img");
  rockImg.src = "./images/icon-rock.svg";
  document.querySelector(".normal .game .rock").textContent = "";
  document.querySelector(".normal .game .rock").appendChild(rockImg);
  let scissersImg = document.createElement("img");
  scissersImg.src = "./images/icon-scissors.svg";
  document.querySelector(".normal .game .scissers").textContent = "";
  document.querySelector(".normal .game .scissers").appendChild(scissersImg);
};

threeImgDivsBonus.forEach((div) => {
  div.addEventListener("click", (e) => {
    document.querySelector(".bonus .play").classList.add("appear-flex");
    let div = document.createElement("div");
    let divClass;
    if (e.target.parentElement.classList.contains("paper")) {
      div.className = "paper";
      divClass = "paper";
    }
    if (e.target.parentElement.classList.contains("rock")) {
      div.className = "rock";
      divClass = "rock";
    }
    if (e.target.parentElement.classList.contains("scissers")) {
      div.className = "scissers";
      divClass = "scissers";
    }
    if (e.target.parentElement.classList.contains("lizard")) {
      div.className = "lizard";
      divClass = "lizard";
    }
    if (e.target.parentElement.classList.contains("spock")) {
      div.className = "spock";
      divClass = "spock";
    }
    div.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;";
    e.target.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90px;  pointer-events: none;";
    div.appendChild(e.target);
    document.querySelector(".bonus .choosen-img").textContent = "";
    document.querySelector(".bonus .choosen-img").appendChild(div);
    let ranDiv = document.createElement("div");
    let img = document.createElement("img");
    let secRandomSrc =
      srcArrBonus[Math.floor(Math.random() * srcArrBonus.length)];
    img.src = `${secRandomSrc}`;
    let ranDivClass;
    console.log(secRandomSrc);
    if (secRandomSrc === "./images/icon-paper.svg") {
      ranDiv.className = "paper";
      ranDivClass = "paper";
    } else if (secRandomSrc === "./images/icon-scissors.svg") {
      ranDiv.className = "scissers";
      ranDivClass = "scissers";
    } else if (secRandomSrc === "./images/icon-rock.svg") {
      ranDiv.className = "rock";
      ranDivClass = "rock";
    } else if (secRandomSrc === "./images/icon-lizard.svg") {
      ranDiv.className = "lizard";
      ranDivClass = "lizard";
    } else if (secRandomSrc === "./images/icon-spock.svg") {
      ranDiv.className = "spock";
      ranDivClass = "spock";
    }
    ranDiv.appendChild(img);
    ranDiv.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 100%; height: 100%;";
    img.style.cssText =
      "position: relative; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90px;  pointer-events: none;";
    setTimeout(() => {
      document.querySelector(".bonus .house-choosen-img").appendChild(ranDiv);
    }, 1000);
    document.querySelector(".bonus .game").classList.add("none");
    if (divClass == ranDivClass) {
      setTimeout(() => {
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "Draw";
      }, 1000);
    } else if (divClass == "paper" && ranDivClass == "rock") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "paper" && ranDivClass == "scissers") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "paper" && ranDivClass == "lizard") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "paper" && ranDivClass == "spock") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "rock" && ranDivClass == "paper") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "rock" && ranDivClass == "scissers") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "rock" && ranDivClass == "lizard") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "rock" && ranDivClass == "spock") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "scissers" && ranDivClass == "paper") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "scissers" && ranDivClass == "rock") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "scissers" && ranDivClass == "lizard") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "scissers" && ranDivClass == "spock") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "lizard" && ranDivClass == "paper") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "lizard" && ranDivClass == "rock") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "lizard" && ranDivClass == "scissers") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "lizard" && ranDivClass == "spock") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "spock" && ranDivClass == "paper") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    } else if (divClass == "spock" && ranDivClass == "rock") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "spock" && ranDivClass == "scissers") {
      setTimeout(() => {
        document.querySelector(".bonus .score p").textContent++;
        div.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Win";
      }, 1000);
    } else if (divClass == "spock" && ranDivClass == "lizard") {
      setTimeout(() => {
        ranDiv.parentElement.classList.add("win");
        playAgainBonus.classList.remove("hidden");
        playAgainPBonus.textContent = "You Lose";
      }, 1000);
    }
  });
});

playAgainBtnBonus.addEventListener("click", (e) => {
  playAgainBonus.classList.add("hidden");
  playAgainPBonus.textContent = "";
  document.querySelector(".bonus .game").classList.remove("none");
  document.querySelector(".bonus .choosen-img").textContent = "";
  document.querySelector(".bonus .choosen-img").classList.remove("win");
  document.querySelector(".bonus .house-choosen-img").textContent = "";
  document.querySelector(".bonus .house-choosen-img").classList.remove("win");
  document.querySelector(".bonus .play").classList.remove("appear-flex");
  let paperImg = document.createElement("img");
  paperImg.src = "./images/icon-paper.svg";
  document.querySelector(".bonus .game .paper").textContent = "";
  document.querySelector(".bonus .game .paper").appendChild(paperImg);
  let rockImg = document.createElement("img");
  rockImg.src = "./images/icon-rock.svg";
  document.querySelector(".bonus .game .rock").textContent = "";
  document.querySelector(".bonus .game .rock").appendChild(rockImg);
  let scissersImg = document.createElement("img");
  scissersImg.src = "./images/icon-scissors.svg";
  document.querySelector(".bonus .game .scissers").textContent = "";
  document.querySelector(".bonus .game .scissers").appendChild(scissersImg);
  let lizardImg = document.createElement("img");
  lizardImg.src = "./images/icon-lizard.svg";
  document.querySelector(".bonus .game .lizard").textContent = "";
  document.querySelector(".bonus .game .lizard").appendChild(lizardImg);
  let spockImg = document.createElement("img");
  spockImg.src = "./images/icon-spock.svg";
  document.querySelector(".bonus .game .spock").textContent = "";
  document.querySelector(".bonus .game .spock").appendChild(spockImg);
});

document.querySelector(".normal-btn").onclick = function () {
  document.querySelector(".normal").classList.add("hidden");
  document.querySelector(".rules-bonus-btn").classList.remove("hidden");
  document.querySelector(".bonus").classList.remove("hidden");
};

document.querySelector(".bonus-btn").onclick = function () {
  document.querySelector(".normal").classList.remove("hidden");
  document.querySelector(".bonus").classList.add("hidden");
  document.querySelector(".rules-bonus-btn").classList.add("hidden");
};
