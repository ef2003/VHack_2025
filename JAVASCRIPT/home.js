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


let index = 0;
        const reviewWrapper = document.getElementById("donorReviewWrapper");
        const reviewCards = document.querySelectorAll(".donor-review-card");
        const cardWidth = reviewCards[0].offsetWidth + 20;
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
