document.addEventListener("DOMContentLoaded", () => {
    const projectsData = [
        {
            name: "Save the Rainforest",
            organization: "Green Earth Org",
            image: "../images/rainforest2.jpg",
            tags: ["environment"],
            rating: "★★★★★",
            description: "The world's rainforests are disappearing at an alarming rate due to deforestation, illegal logging, and climate change. This project focuses on preserving the remaining rainforests by funding reforestation initiatives, wildlife protection programs, and local community engagement to ensure sustainable conservation. Your donation will help protect biodiversity, absorb carbon emissions, and preserve the lungs of our planet for future generations."
        },
        {
            name: "Rescue Abandoned Pets",
            organization: "Animal Care Foundation",
            image: "../images/dog_shelter.jpg",
            tags: ["animal welfare"],
            rating: "★★★★☆",
            description: "Education is the key to breaking the cycle of poverty, yet millions of children worldwide lack access to basic schooling. This project provides free educational resources, school supplies, and scholarships to underprivileged children, empowering them with knowledge and skills for a brighter future. Your donation helps fund school programs, teacher training, and infrastructure improvements in disadvantaged communities."
        },
        {
            name: "Educate a Child",
            organization: "Future Bright",
            image: "../images/child_edu.jpg",
            tags: ["children welfare"],
            rating: "★★★★★",
            description: "Food insecurity affects millions of families worldwide, leaving children and adults malnourished and vulnerable to diseases. This project provides emergency food assistance, nutritional education, and sustainable agricultural solutions to help families gain long-term food security. Your donation will help distribute essential meals, support community kitchens, and fund programs that teach self-sufficiency."
        },
        {
            name: "Feed the Hungry",
            organization: "Global Food Aid",
            image: "../images/feed_the_hungry.jpg",
            tags: ["hunger relief"],
            rating: "★★★★★",
            description: "Hunger is a daily reality for millions of people, with children and the elderly being the most vulnerable. This project distributes emergency food packs, supports local food banks, and funds sustainable agricultural initiatives to combat malnutrition. Your donation will help provide meals to families in crisis, invest in farming programs, and create long-term solutions to food insecurity."
        },
        {
            name: "Clean Water for All",
            organization: "Water for Life",
            image: "../images/clean_water.jpg",
            tags: ["water access"],
            rating: "★★★★☆",
            description: "Access to clean water is a basic human right, yet millions still suffer from waterborne diseases due to contaminated sources. This project funds the construction of wells, purification systems, and water distribution in remote and underserved areas. Your contribution can bring safe, drinkable water to families, improving their health, education, and overall quality of life."
        },
        {
            name: "Disaster Relief Fund",
            organization: "Global Emergency Response",
            image: "../images/disaster_relief.jpg",
            tags: ["disaster relief"],
            rating: "★★★★★",
            description: "Natural disasters strike without warning, leaving communities devastated and in urgent need of food, shelter, and medical assistance. This fund provides immediate aid to affected areas, supplying essential resources and supporting rebuilding efforts. Your donation ensures quick response to emergencies and helps communities recover faster, bringing hope in times of crisis."
        },
        {
            name: "Protect Endangered Species",
            organization: "Wildlife Conservation Network",
            image: "../images/endangered.jpg",
            tags: ["wildlife conservation"],
            rating: "★★★★☆",
            description: "Poaching, habitat destruction, and climate change are driving many species towards extinction. This initiative works to protect endangered animals by funding anti-poaching units, habitat restoration projects, and conservation education programs. Your support helps safeguard iconic species like elephants, tigers, and sea turtles, preserving them for generations to come."
        },
        {
            name: "Empower Women Entrepreneurs",
            organization: "Women’s Economic Fund",
            image: "../images/women_entrepreneur.jpeg",
            tags: ["women empowerment"],
            rating: "★★★★★",
            description: "Empowering women means strengthening entire communities. This project provides micro-loans, business training, and mentorship to women in underserved regions, helping them launch their own businesses and achieve financial independence. Your donation supports women entrepreneurs, fosters economic growth, and promotes gender equality worldwide."
        },
        {
            name: "Support Mental Health Awareness",
            organization: "Mind & Wellness Initiative",
            image: "../images/mental-health.jpg",
            tags: ["mental health"],
            rating: "★★★★☆",
            description: "Mental health issues affect millions, yet access to proper care and resources remains a challenge. This project funds free counseling services, crisis hotlines, and community outreach programs to promote mental well-being. Your support can make a difference in reducing stigma, providing therapy, and ensuring no one struggles alone."
        },
        {
            name: "Rebuild Homes for the Homeless",
            organization: "Housing for Hope",
            image: "../images/happy_home.jpeg",
            tags: ["homeless aid"],
            rating: "★★★★★",
            description: "Having a safe home is a basic necessity, yet thousands of families are forced to live on the streets. This initiative helps build affordable housing, support homeless shelters, and provide job training programs to help people regain independence. Your donation gives warmth, dignity, and a second chance to those in need."
        }
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
                    <button class="donate-button">Donate</button>
                </div>
                <img src="${project.image}" alt="${project.name}">
            `;
            projectsContainer.appendChild(projectElement);
        });
    }

    tagButtons.forEach(button => {
        button.addEventListener("click", () => {
            displayProjects(button.dataset.tag);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector(".scroll-container");
    const scrollLeftBtn = document.querySelector(".scroll-left");
    const scrollRightBtn = document.querySelector(".scroll-right");

    let scrollAmount = 300; // Adjust scroll distance per click

    scrollLeftBtn.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    scrollRightBtn.addEventListener("click", function () {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
});

