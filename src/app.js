import { player } from './player.js';

const scoreDisplay = document.getElementById("linesOfCode");
const clickBtn = document.getElementById("Clicker");
const hireAiBtn = document.getElementById("hire_btn");
const costDisplay = document.getElementById("cost");
const linesOfCode = document.getElementById("name");
const info = document.querySelector('#info')

function updateUI() {
  scoreDisplay.textContent = player.score;
  costDisplay.textContent = "Cost: " + player.aiCost;

  let currentRank = "Junior Developer";

  if (player.score >= 500000 || player.isAIOverlord) {
    if (!player.isAIOverlord) {
      alert("CONGRATULATIONS! You achieved the ultimate title: AI Overlord!");
      player.isAIOverlord = true;
      player.passiveIncome += 1000;
      player.clickPower = 256;
    }
    currentRank = "AI Overlord";
  } else if (player.score >= 100000 || player.isInvestor) {
    if (!player.isInvestor) {
      alert("Congratulations! You are a Silicon Valley Investor now!");
      player.isInvestor = true;
      player.passiveIncome += 500;
      player.clickPower = 128;
    }
    currentRank = "Silicon Valley Investor";
  } else if (player.score >= 30000 || player.isVPOF) {
    if (!player.isVPOF) {
      alert("Congratulations! You are VP of Engineering now!");
      player.isVPOF = true;
      player.passiveIncome += 200;
      player.clickPower = 64;
    }
    currentRank = "VP of Engineering";
  } else if (player.score >= 15000 || player.isCTO) {
    if (!player.isCTO) {
      alert("Congratulations! You are a Chief Technology Officer now!");
      player.isCTO = true;
      player.passiveIncome += 100;
      player.clickPower = 32;
    }
    currentRank = "Chief Technology Officer";
  } else if (player.score >= 5000 || player.isST) {
    if (!player.isST) {
      alert("Congratulations! You are a Software Architect now!");
      player.isST = true;
      player.passiveIncome += 50;
      player.clickPower = 16;
    }
    currentRank = "Software Architect";
  } else if (player.score >= 1500 || player.isTeamLead) {
    if (!player.isTeamLead) {
      alert("Congratulations! You are a TeamLead now!");
      player.isTeamLead = true;
      player.passiveIncome += 25;
      player.clickPower = 8;
    }
    currentRank = "Team Lead";
  } else if (player.score >= 500 || player.isSenior) {
    if (!player.isSenior) {
      alert("Congratulations! You are a Senior Developer now!");
      player.isSenior = true;
      player.passiveIncome += 15;
      player.clickPower = 4;
    }
    currentRank = "Senior Developer";
  } else if (player.score >= 200 || player.isMidlle) {
    if (!player.isMidlle) {
      alert("Congratulations! You are a Middle Developer now!");
      player.isMidlle = true;
      player.passiveIncome += 10;
      player.clickPower = 2;
    }
    currentRank = "Middle Developer";
  }

  linesOfCode.textContent = currentRank;
}

player.load();
updateUI();

clickBtn.addEventListener("click", () => {
  player.click();
  updateUI();
});

hireAiBtn.addEventListener("click", () => {
  player.buyAI();
  updateUI();
});

setInterval(() => {
  player.score += player.passiveIncome;
  updateUI();
  player.save();
}, 1000);

info.addEventListener("click", () => {
  alert(
    "GAMEPLAY & CAREER PROGRESSION\n\n• Middle Developer (200 LoC)\n  +10 Passive Income / +2 Click Power\n\n• Senior Developer (500 LoC)\n  +15 Passive Income / +4 Click Power\n\n• Team Lead (1,500 LoC)\n  +25 Passive Income / +8 Click Power\n\n• Software Architect (5,000 LoC)\n  +50 Passive Income / +16 Click Power\n\n• Chief Technology Officer (15,000 LoC)\n  +100 Passive Income / +32 Click Power\n\n• VP of Engineering (30,000 LoC)\n  +200 Passive Income / +64 Click Power\n\n• Silicon Valley Investor (100,000 LoC)\n  +500 Passive Income / +128 Click Power\n\n• AI Overlord (500,000 LoC)\n  +1,000 Passive Income / +256 Click Power",
  );
});