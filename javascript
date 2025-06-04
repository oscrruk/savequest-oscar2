let totalSaved = parseFloat(localStorage.getItem("totalSaved")) || 0;

function calculateEXP(savedAmount) {
  return Math.floor(savedAmount / 0.5);
}

function expForLevel(level) {
  return 50 * level * (level - 1);
}

function getLevel(exp) {
  let level = 1;
  while (exp >= expForLevel(level + 1)) {
    level++;
  }
  return level;
}

function updateDisplay() {
  const exp = calculateEXP(totalSaved);
  const level = getLevel(exp);
  const nextLevelExp = expForLevel(level + 1);
  const currentLevelExp = expForLevel(level);
  const progress = ((exp - currentLevelExp) / (nextLevelExp - currentLevelExp)) * 100;

  document.getElementById("totalSaved").innerText = totalSaved.toFixed(2);
  document.getElementById("exp").innerText = exp;
  document.getElementById("level").innerText = level;
  document.getElementById("expToNext").innerText = ${nextLevelExp - exp};
  document.getElementById("progressFill").style.width = ${progress}%;
}

function addSavings() {
  const input = document.getElementById("saveInput");
  const value = parseFloat(input.value);
  if (isNaN(value) || value <= 0) return;

  totalSaved += value;
  localStorage.setItem("totalSaved", totalSaved);
  input.value = "";
  updateDisplay();
}

updateDisplay();
