let navEl = document.getElementById("navLinks")
let mainPart = document.getElementById("main-part")
let tipsEl = document.getElementById("tips")
let tips = [
    "The most important thing is to start working out!",
    "Don't Stress if You Go Beyond Your Calorie Needs",
    "On every exercise focus on full range of motion!",
    "Running won't kill your gains!",
    "Track the food condiments that you are using",
    "Quantity of food(calories) is more important than the type of food!",
    "You can overeat healthy food!",
    "Nutrition is as important as training!",
    "If you are heaving a dinner/party, save calories through out the day!",
    "The only bad workout is the one that you haven't done!",
    "Use artificial, zero calorie sweeteners",
    "Find low calorie swaps for you favourite meals",
    "Stay hydrated!",
    "Plan your meals ahead of time!",
    "Add spices on your meals, they are almost calorie free",
    "Focus on quality reps/sets over the number of reps/sets/weight!"
]
let i = 0

function showMenu() {
    navEl.style.right = "0"
}

function hideMenu() {
    navEl.style.right = "-400px"
}

function learnMore() {
    mainPart.style.opacity = "100%"
}

setInterval(bannerChange, 4000);

function bannerChange() {
    tipsEl.classList.remove("fade-in");
    tipsEl.classList.add("fade-out");

    setTimeout(function () {
        tipsEl.innerText = tips[i];
        tipsEl.classList.remove("fade-out");
        tipsEl.classList.add("fade-in");

        i++;
        if (i === tips.length) {
            i = 0;
        }
    }, 2000); // Adjust the delay to match the transition duration
}