document.getElementById("languageToggle").addEventListener("click", function() {
    let langText = this.querySelector(".language-text");
    let currentLang = langText.textContent;
    
    if (currentLang === "EN") {
        langText.textContent = "中文";
    } else if (currentLang === "中文") {
        langText.textContent = "BM";
    } else {
        langText.textContent = "EN";
    }
    
    this.classList.toggle("active");
});

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