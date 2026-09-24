const fitnessForm = document.getElementById("fitnessForm");

fitnessForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get user details
    const age = Number(document.getElementById("age").value);
    const weight = Number(document.getElementById("weight").value);
    const height = Number(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const activity = document.getElementById("activity").value;
    const goal = document.getElementById("goal").value;

    // Basic validation
    if (age <= 0 || weight <= 0 || height <= 0) {
        alert("Please enter valid details.");
        return;
    }

    // -------------------------
    // BMI
    // -------------------------

    const heightInMeters = height / 100;

    const bmi =
        weight / (heightInMeters * heightInMeters);

    const roundedBMI = bmi.toFixed(1);


    // -------------------------
    // BMR
    // -------------------------

    let bmr;

    if (gender === "male") {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) +
            5;

    } else {

        bmr =
            (10 * weight) +
            (6.25 * height) -
            (5 * age) -
            161;
    }


    // -------------------------
    // Activity
    // -------------------------

    let activityMultiplier;

    if (activity === "sedentary") {
        activityMultiplier = 1.2;
    }

    else if (activity === "light") {
        activityMultiplier = 1.375;
    }

    else if (activity === "moderate") {
        activityMultiplier = 1.55;
    }

    else {
        activityMultiplier = 1.725;
    }


    // Daily calories

    const dailyCalories =
        Math.round(bmr * activityMultiplier);


    // -------------------------
    // Goal
    // -------------------------

    let goalName;

    if (goal === "lose") {
        goalName = "Weight Loss";
    }

    else if (goal === "gain") {
        goalName = "Weight Gain";
    }

    else {
        goalName = "Maintain Weight";
    }


    // -------------------------
    // Activity Name
    // -------------------------

    let activityName;

    if (activity === "sedentary") {
        activityName = "Sedentary";
    }

    else if (activity === "light") {
        activityName = "Lightly Active";
    }

    else if (activity === "moderate") {
        activityName = "Moderately Active";
    }

    else {
        activityName = "Very Active";
    }


    // -------------------------
    // Save Data
    // -------------------------

    const fitnessData = {

        age: age,

        weight: weight,

        height: height,

        gender: gender,

        bmi: roundedBMI,

        calories: dailyCalories,

        goal: goalName,

        activity: activityName
    };


    localStorage.setItem(
        "fitnessData",
        JSON.stringify(fitnessData)
    );


    // -------------------------
    // Go to Summary
    // -------------------------

    window.location.href = "summary.html";

});