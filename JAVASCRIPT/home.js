document.addEventListener("DOMContentLoaded", function () {
    const donateButtons = document.querySelectorAll(".donate-btn");
    const donationModal = new bootstrap.Modal(document.getElementById("donationModal"));

    donateButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();
            donationModal.show();
        });
    });
});

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

let index = 0;
        const reviewWrapper = document.getElementById("donorReviewWrapper");
        const reviewCards = document.querySelectorAll(".donor-review-card");
        const cardWidth = reviewCards[0].offsetWidth + 20; // Adjust for margin
        const maxIndex = reviewCards.length - 3;

        document.getElementById("nextBtn").addEventListener("click", function() {
            if (index < maxIndex) {
                index++;
                reviewWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
            }
        });

        document.getElementById("prevBtn").addEventListener("click", function() {
            if (index > 0) {
                index--;
                reviewWrapper.style.transform = `translateX(-${index * cardWidth}px)`;
            }
        });

const organizerScroll = document.querySelector('.organizer-container');

let isDragging = false;
let startX;
let scrollLeft;

organizerScroll.addEventListener('mousedown', (e) => {
    isDragging = true;
    organizerScroll.classList.add('active');
    startX = e.pageX - organizerScroll.offsetLeft;
    scrollLeft = organizerScroll.scrollLeft;
});

organizerScroll.addEventListener('mouseleave', () => {
    isDragging = false;
    organizerScroll.classList.remove('active');
});

organizerScroll.addEventListener('mouseup', () => {
    isDragging = false;
    organizerScroll.classList.remove('active');
});

organizerScroll.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - organizerScroll.offsetLeft;
    const move = (x - startX) * 2; 
    organizerScroll.scrollLeft = scrollLeft - move;
});
