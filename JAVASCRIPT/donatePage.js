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
            name: "Planet Revive",
            organization: "Greenpeace",
            image: "../images/ad2.jpg",
            tags: ["all", "environment"],
            amount: ["RM 500,000"],
            rating: "★★★★☆",
            description: "Preserving nature through reforestation, sustainable living initiatives, and climate change awareness. Our mission is to create a greener future by reducing pollution and protecting biodiversity."
        },
        {
            name: "Save the Rainforest",
            organization: "Greenpeace",
            image: "../images/rainforest.jpg",
            tags: ["all", "environment"],
            amount: ["RM 97,620"],
            rating: "★★★★★",
            description: "A conservation project focused on protecting rainforests, preventing deforestation, restoring ecosystems, and preserving wildlife for future generations."
        },
        {
            name: "Community Flood Resilience Program",
            organization: "Red Crescent Society",
            image: "../images/flood.jpeg",
            tags: ["all", "environment"],
            amount: ["RM 265,301"],
            rating: "★★★★☆",
            description: "A community-driven initiative focused on flood preparedness, emergency response training, and post-flood recovery support to minimize disaster impact."
        },
        {
            name: "Forest Rebuild",
            organization: "Green Earth Org",
            image: "../images/rainforest2.jpg",
            tags: ["all", "environment"],
            amount: ["RM 41,860"],
            rating: "★★★★☆",
            description: "The world's rainforests are disappearing at an alarming rate due to deforestation, illegal logging, and climate change. This project focuses on preserving the remaining rainforests by funding reforestation initiatives, wildlife protection programs, and local community engagement to ensure sustainable conservation. Your donation will help protect biodiversity, absorb carbon emissions, and preserve the lungs of our planet for future generations."
        },
        {
            name: "Deep Blue Hope",
            organization: "Coral Reef Alliance",
            image: "../images/ad3.jpg",
            tags: ["all", "ocean conservation"],
            amount: ["RM 300,000"],
            rating: "★★★★☆",
            description: "Restore marine ecosystems, combat ocean pollution, and protect endangered sea life. Through cleanup drives, awareness campaigns, and conservation efforts, we aim to safeguard our oceans for future generations."
        },
        {
            name: "Hope for Paws",
            organization: "ASPCA",
            image: "../images/ad1.jpeg",
            tags: ["all", "animal rescue"],
            amount: ["RM 102,090"],
            rating: "★★★★☆",
            description: "Rescuing, rehabilitating, and rehoming stray and endangered animals. We work to prevent animal cruelty, promote responsible pet ownership, and advocate for stronger animal protection laws."
        },
        {
            name: "Rescue Abandoned Pets",
            organization: "Four Paws International",
            image: "../images/rescue_pets.jpg",
            tags: ["all", "animal rescue"],
            amount: ["RM 185,333"],
            rating: "★★★★☆",
            description: "A project dedicated to rescuing, rehabilitating, and rehoming abandoned pets, ensuring their safety, health, and a loving future."
        },
        {
            name: "Educate a Child",
            organization: "UNICEF (United Nations Children's Fund)",
            image: "../images/educate_child.jpg",
            tags: ["all", "children welfare"],
            amount: ["RM 54,982"],
            rating: "★★★★★",
            description: "A project providing education, resources, and opportunities to underprivileged children, empowering them for a brighter future."
        },
        
        
        {
            name: "Children Education",
            organization: "Future Bright",
            image: "../images/child_edu.jpg",
            tags: ["all", "children welfare"],
            amount: ["RM 33,300"],
            rating: "★★★★☆",
            description: "Education is the key to breaking the cycle of poverty, yet millions of children worldwide lack access to basic schooling. This project provides free educational resources, school supplies, and scholarships to underprivileged children, empowering them with knowledge and skills for a brighter future. Your donation helps fund school programs, teacher training, and infrastructure improvements in disadvantaged communities."
        },
        {
            name: "Zero Hunger Children",
            organization: "Global FoodBanking Network (GFN)",
            image: "../images/hunger_relief",
            tags: ["all", "hunger relief", "children welfare"],
            amount: ["RM 478,122"],
            rating: "★★★★☆",
            description: "A project to eliminate hunger through sustainable food distribution, reducing waste, and ensuring access to nutritious meals for all."
        },
        {
            name: "Feed the Hungry",
            organization: "Global Food Aid",
            image: "../images/feed_the_hungry.jpg",
            tags: ["all", "hunger relief"],
            amount: ["RM 576,800"],
            rating: "★★★★★",
            description: "Hunger is a daily reality for millions of people, with children and the elderly being the most vulnerable. This project distributes emergency food packs, supports local food banks, and funds sustainable agricultural initiatives to combat malnutrition. Your donation will help provide meals to families in crisis, invest in farming programs, and create long-term solutions to food insecurity."
        },
    
        {
            name: "Protect Endangered Species",
            organization: "Wildlife Conservation Network",
            image: "../images/endangered.jpg",
            tags: ["all", "animal rescue"],
            amount: ["RM 66,777"],
            rating: "★★★★☆",
            description: "Poaching, habitat destruction, and climate change are driving many species towards extinction. This initiative works to protect endangered animals by funding anti-poaching units, habitat restoration projects, and conservation education programs. Your support helps safeguard iconic species like elephants, tigers, and sea turtles, preserving them for generations to come."
        },
        {
            name: "Thermo Health",
            organization: "World Health Organization (WHO)",
            image: "../images/thermo_health.jpg",
            tags: ["all", "health research"],
            amount: ["RM 32,321"],
            rating: "★★★★☆",
            description: "A research project exploring thermotherapy’s impact on pain relief, healing, and overall health using advanced thermal treatment technologies."
        },
        {
            name: "Support Mental Health Awareness",
            organization: "Mind & Wellness Initiative",
            image: "../images/mental-health.jpg",
            tags: ["all", "health research"],
            amount: ["RM 88,666"],
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
                    <div style="display: flex; align-items: center; gap: 10px;">
                        <h3>${project.name}</h3>
                        <i class="fas fa-sync-alt refresh-icon"></i>
                    </div>
                    <p><strong>Organization:</strong> ${project.organization}</p>
                    <p>${project.description}</p>
                    <p>current funding amount: <strong>${project.amount}</strong></p>
                    <p><strong>Rating:</strong> ${project.rating}</p>
                    <a href="#" class="donate-btn">Donate Now</a>
                </div>
                <img src="${project.image}" alt="${project.name}">
            `;
            projectsContainer.appendChild(projectElement);
        });
    }

    function getUrlParameter(name) {
        name = name.replace(/[[]/, '\\[').replace(/[\]]/, '\\]');
        const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        const results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    const topicFromUrl = getUrlParameter('topic');
    const defaultTag = topicFromUrl || "all"; 

    const projectTagsSection = document.getElementById("project-tags");
    if (projectTagsSection) {
        projectTagsSection.scrollIntoView({ behavior: "smooth" });
    }
 
    displayProjects(defaultTag);

    const defaultTagButton = document.querySelector(`.tag[data-tag="${defaultTag}"]`);
    if (defaultTagButton) {
        defaultTagButton.classList.add("active");
    }

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