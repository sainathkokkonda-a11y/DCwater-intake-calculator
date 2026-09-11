function calculateWater() {
  const weight = parseFloat(document.getElementById('waterWeight').value);
  const exercise = parseFloat(document.getElementById('exerciseTime').value) || 0;
  const climate = document.getElementById('climate').value;

  if (isNaN(weight) || weight <= 0) {
    alert("Please enter a valid positive number for weight.");
    return;
  }

  // Base calculation: Weight in kg * 0.033 Liters
  let waterLiters = weight * 0.033;

  // Add water for exercise: approx 0.35 Liters per 30 mins of exercise
  if (exercise > 0) {
    waterLiters += (exercise / 30) * 0.35;
  }

  // Add extra water for hot climate
  if (climate === 'hot') {
    waterLiters += 0.5;
  }

  const glasses = Math.round(waterLiters * 1000 / 250);

  document.getElementById('waterResult').innerText = waterLiters.toFixed(2) + " Liters";
  document.getElementById('glassesResult').innerText = glasses + " Glasses (250ml each)";
}

// Initial calculation on page load
calculateWater();
