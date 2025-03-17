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

   