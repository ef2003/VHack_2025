const organizerScroll = document.querySelector('.project-container');

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

document.addEventListener("DOMContentLoaded", () => {
    const projectsData = [
        {
            name: "Save the Rainforest",
            organization: "Green Peace",
            image: "../images/rainforest.jpg",
            tags: ["all", "environment"],
            rating: "★★★★★",
            description: "A conservation project focused on protecting rainforests, preventing deforestation, restoring ecosystems, and preserving wildlife for future generations."
        },
        {
            name: "Community Flood Resilience Program",
            organization: "Red Crescent Society",
            image: "../images/flood.jpeg",
            tags: ["all", "environment"],
            rating: "★★★★☆",
            description: "A community-driven initiative focused on flood preparedness, emergency response training, and post-flood recovery support to minimize disaster impact."
        },
        {
            name: "Forest Rebuild",
            organization: "Green Earth Org",
            image: "../images/rainforest2.jpg",
            tags: ["all", "environment"],
            rating: "★★★★☆",
            description: "The world's rainforests are disappearing at an alarming rate due to deforestation, illegal logging, and climate change. This project focuses on preserving the remaining rainforests by funding reforestation initiatives, wildlife protection programs, and local community engagement to ensure sustainable conservation. Your donation will help protect biodiversity, absorb carbon emissions, and preserve the lungs of our planet for future generations."
        },
        {
            name: "Rescue Abandoned Pets",
            organization: "Four Paws International",
            image: "../images/rescue_pets.jpg",
            tags: ["all", "animal rescue"],
            rating: "★★★★☆",
            description: "A project dedicated to rescuing, rehabilitating, and rehoming abandoned pets, ensuring their safety, health, and a loving future."
        },
        {
            name: "We Care Pets",
            organization: "Animal Care Foundation",
            image: "../images/dog_shelter.jpg",
            tags: ["all", "animal rescue"],
            rating: "★★★★☆",
            description: "Education is the key to breaking the cycle of poverty, yet millions of children worldwide lack access to basic schooling. This project provides free educational resources, school supplies, and scholarships to underprivileged children, empowering them with knowledge and skills for a brighter future. Your donation helps fund school programs, teacher training, and infrastructure improvements in disadvantaged communities."
        },
        {
            name: "Educate a Child",
            organization: "UNICEF (United Nations Children's Fund)",
            image: "../images/educate_child.jpg",
            tags: ["all", "children welfare"],
            rating: "★★★★★",
            description: "A project providing education, resources, and opportunities to underprivileged children, empowering them for a brighter future."
        },
        {
            name: "Educate a Child",
            organization: "Future Bright",
            image: "../images/child_edu.jpg",
            tags: ["all", "children welfare"],
            rating: "★★★★☆",
            description: "Food insecurity affects millions of families worldwide, leaving children and adults malnourished and vulnerable to diseases. This project provides emergency food assistance, nutritional education, and sustainable agricultural solutions to help families gain long-term food security. Your donation will help distribute essential meals, support community kitchens, and fund programs that teach self-sufficiency."
        },
        {
            name: "Zero Hunger Children",
            organization: "Global FoodBanking Network (GFN)",
            image: "../images/hunger_relief",
            tags: ["all", "hunger relief", "children welfare"],
            rating: "★★★★☆",
            description: "A project to eliminate hunger through sustainable food distribution, reducing waste, and ensuring access to nutritious meals for all."
        },
        {
            name: "Feed the Hungry",
            organization: "Global Food Aid",
            image: "../images/feed_the_hungry.jpg",
            tags: ["all", "hunger relief"],
            rating: "★★★★★",
            description: "Hunger is a daily reality for millions of people, with children and the elderly being the most vulnerable. This project distributes emergency food packs, supports local food banks, and funds sustainable agricultural initiatives to combat malnutrition. Your donation will help provide meals to families in crisis, invest in farming programs, and create long-term solutions to food insecurity."
        },
        {
            name: "Clean Water for All",
            organization: "Water for Life",
            image: "../images/clean_water.jpg",
            tags: ["all", "environment"],
            rating: "★★★★☆",
            description: "Access to clean water is a basic human right, yet millions still suffer from waterborne diseases due to contaminated sources. This project funds the construction of wells, purification systems, and water distribution in remote and underserved areas. Your contribution can bring safe, drinkable water to families, improving their health, education, and overall quality of life."
        },
        {
            name: "Protect Endangered Species",
            organization: "Wildlife Conservation Network",
            image: "../images/endangered.jpg",
            tags: ["all", "animal rescue"],
            rating: "★★★★☆",
            description: "Poaching, habitat destruction, and climate change are driving many species towards extinction. This initiative works to protect endangered animals by funding anti-poaching units, habitat restoration projects, and conservation education programs. Your support helps safeguard iconic species like elephants, tigers, and sea turtles, preserving them for generations to come."
        },
        {
            name: "Thermo Health",
            organization: "World Health Organization (WHO)",
            image: "../images/thermo_health.jpg",
            tags: ["all", "health research"],
            rating: "★★★★☆",
            description: "A research project exploring thermotherapy’s impact on pain relief, healing, and overall health using advanced thermal treatment technologies."
        },
        {
            name: "Support Mental Health Awareness",
            organization: "Mind & Wellness Initiative",
            image: "../images/mental-health.jpg",
            tags: ["all", "health research"],
            rating: "★★★★☆",
            description: "Mental health issues affect millions, yet access to proper care and resources remains a challenge. This project funds free counseling services, crisis hotlines, and community outreach programs to promote mental well-being. Your support can make a difference in reducing stigma, providing therapy, and ensuring no one struggles alone."
        },
    ];

    const projectsContainer = document.getElementById("projects-container");
    const tagButtons = document.querySelectorAll(".tag");

    function displayProjects(tag) {
        projectsContainer.innerHTML = "";
        const filteredProjects = projectsData.filter(project => project.tags.includes(tag));

        filteredProjects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project-item");
            projectElement.innerHTML = `
                <div>
                    <h3>${project.name}</h3>
                    <p><strong>Organization:</strong> ${project.organization}</p>
                    <p>${project.description}</p>
                    <p><strong>Rating:</strong> ${project.rating}</p>
                    <a href="#" class="donate-btn">Donate Now</a>
                </div>
                <img src="${project.image}" alt="${project.name}">
            `;
            projectsContainer.appendChild(projectElement);
        });
    }

    const defaultTag = "all";
    displayProjects(defaultTag);

    const defaultTagButton = document.querySelector(`.tag[data-tag="${defaultTag}"]`);
    defaultTagButton.classList.add("active");

    tagButtons.forEach(button => {
        button.addEventListener("click", () => {
            tagButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
            displayProjects(button.dataset.tag);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollLeftBtn = document.querySelector(".scroll-left");
    const scrollRightBtn = document.querySelector(".scroll-right");

    let scrollAmount = 300; 

    scrollLeftBtn.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
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