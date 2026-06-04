import { saveGame, loadGame } from "./storage.js";

export const player = {
  score: 0,
  clickPower: 1,
  passiveIncome: 0,
  aiCost: 10,

  isMidlle: false,
  isSenior: false,
  isTeamLead: false,
  isST: false,
  isCTO: false,
  isVPOF: false,
  isInvestor: false,
  isAIOverlord: false,

  click() {
    this.score += this.clickPower;
    this.save();
  },

  buyAI() {
    if (this.score >= this.aiCost) {
      this.score -= this.aiCost;
      const incomeBoost = Math.max(1, Math.round(this.aiCost * 0.02));
      this.passiveIncome += incomeBoost;
      this.aiCost = Math.round(this.aiCost * 1.5);
      this.save();
    }
  },

  save() {
    saveGame(this);
  },

  load() {
    const saved = loadGame();
    if (saved) Object.assign(this, saved);
  },
};
