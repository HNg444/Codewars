// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const BMIfat = weight / (height ** 2)
  if (BMIfat <= 18.5) return "Underweight"
  if (BMIfat <= 25.0) return "Normal"
  if (BMIfat <= 30.0) return "Overweight"
  return "Obese"

}