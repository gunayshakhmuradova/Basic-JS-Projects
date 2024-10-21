function calculateBMI() {
    // Get the height and weight input values
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (!isNaN(height) && !isNaN(weight) && height > 0 && weight > 0) {
        // Calculate BMI
        var heightInMeters = height / 100;
        var bmi = weight / (heightInMeters * heightInMeters);

        // Determine the BMI range
        var bmiRange = getBMIRange(bmi);

        // Display the BMI and its range
        var outputElement = document.getElementById("output");
        outputElement.textContent = `BMI: ${bmi.toFixed(2)} (${bmiRange})`;
    } else {
        // Handle invalid input
        alert("Please enter valid height and weight values.");
    }
}

function getBMIRange(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal Weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
