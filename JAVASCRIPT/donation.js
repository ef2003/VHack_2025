
document.addEventListener("DOMContentLoaded", function () {
    const oneTimeBtn = document.getElementById("oneTimeBtn");
    const monthlyBtn = document.getElementById("monthlyBtn");

    function setActive(button, inactiveButton) {
        button.classList.remove("inactive-btn");
        button.classList.add("active-btn");

        inactiveButton.classList.remove("active-btn");
        inactiveButton.classList.add("inactive-btn");
    }

    oneTimeBtn.addEventListener("click", function () {
        setActive(oneTimeBtn, monthlyBtn);
    });

    monthlyBtn.addEventListener("click", function () {
        setActive(monthlyBtn, oneTimeBtn);
    });
});

function setAmount(value) {
    document.getElementById("amountInput").value = value;

    document.querySelectorAll(".amount-btn").forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}

document.getElementById("currencySelect").addEventListener("change", function () {
    const currency = this.value;
    const currencySymbols = {
        MYR: 'RM',
        USD: '$',
        CNY: '¥'
    };

    const amountContainer = document.getElementById("amountContainer");
    const buttons = document.querySelectorAll(".amount-btn");

    buttons.forEach(btn => {
        const amount = btn.getAttribute("onclick").match(/\d+/)[0];
        btn.innerText = `${currencySymbols[currency]} ${parseInt(amount).toLocaleString()}`;
    });

    amountContainer.classList.remove("d-none");
});


document.getElementById("amountInput").addEventListener("input", function () {
    let inputValue = this.value.trim(); 
    let buttons = document.querySelectorAll(".amount-btn");

    let isMatched = false;

    buttons.forEach(btn => {
        let btnValue = btn.innerText.replace("RM", "").trim(); 
        if (btnValue === inputValue) { 
            btn.classList.add("active");
            isMatched = true;
        } else {
            btn.classList.remove("active");
        }
    });

    if (!isMatched) {
        buttons.forEach(btn => btn.classList.remove("active"));
    }
});