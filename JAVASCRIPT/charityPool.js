// Scroll to staking form
function scrollToForm() {
    document.querySelector(".staking-form").scrollIntoView({ behavior: "smooth" });
}


// Simulate staking process
function stakeFunds() {
    let amount = document.getElementById("amount").value;
    let cause = document.getElementById("cause").value;
    let confirmationMessage = document.getElementById("confirmation-message");


    if (amount > 0) {
        confirmationMessage.innerHTML = `✅ You have successfully staked $${amount} USDT for ${cause}!`;
        confirmationMessage.style.color = "green";


        // Simulate increasing funds raised
        let fundsRaisedElement = document.getElementById("funds-raised");
        let currentFunds = parseInt(fundsRaisedElement.innerText.replace("$", ""));
        fundsRaisedElement.innerText = `$${currentFunds + (amount * 0.1)}`; // Assume 10% APY donation
    } else {
        confirmationMessage.innerHTML = "⚠️ Please enter a valid amount.";
        confirmationMessage.style.color = "red";
    }
}


function showDetails(stepNumber) {
    let steps = document.querySelectorAll(".step");
    steps.forEach((step, index) => {
        if (index === stepNumber - 1) {
            step.classList.toggle("active");
            let detail = step.querySelector(".step-detail");
            detail.style.display = detail.style.display === "block" ? "none" : "block";
        } else {
            step.classList.remove("active");
            step.querySelector(".step-detail").style.display = "none";
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    const statsSection = document.querySelector(".stats");
    const statsNumbers = document.querySelectorAll(".stat-box span");


    function animateNumbers() {
        statsNumbers.forEach(stat => {
            let targetValue = parseFloat(stat.dataset.value);
            let startValue = 0;
            let increment = targetValue / 100;
           
            let counter = setInterval(() => {
                startValue += increment;
                if (startValue >= targetValue) {
                    startValue = targetValue;
                    clearInterval(counter);
                }
                stat.innerText = stat.id === "apy" ? Math.floor(startValue) + "%" : "$" + Math.floor(startValue);
            }, 20);
        });
    }


    function handleScroll() {
        let sectionPosition = statsSection.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;


        if (sectionPosition < screenPosition) {
            statsSection.classList.add("show");
            animateNumbers();
            window.removeEventListener("scroll", handleScroll);
        }
    }


    window.addEventListener("scroll", handleScroll);
});
