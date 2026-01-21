const careers = [
    {
        date: "2024.12 - 2025.02",
        institution: "Timegate",
        role: "@ Internship",
        description: [
            "FastAPI",
            "Integrated MYSQL",
            "CI/CD",
            "Authorisation & Authentication Middleware",
            "Docker",
        ],
        skills: ["Python", "MySQL", "Docker", "Jenkins", "Harbor", "ArgoCD"],
    },
];

const careerContainer = document.querySelector(".career-container");

careers.forEach((career) => {
    // Create the main list item div
    const careerListItem = document.createElement("div");
    careerListItem.className = "career-list-item grey-background";

    // Create a wrapper div for date, institution, role, and description
    const careerInfo = document.createElement("div");
    careerInfo.className = "container-info";

    // Create and append the date span
    const careerDate = document.createElement("span");
    careerDate.className = "font-grey date";
    careerDate.textContent = career.date;
    careerInfo.appendChild(careerDate);

    // Create and append the institution span
    const careerInstitution = document.createElement("span");
    careerInstitution.className = "font-white institution";
    careerInstitution.textContent = career.institution;
    careerInfo.appendChild(careerInstitution);

    // Create and append the role span
    const careerRole = document.createElement("span");
    careerRole.className = "font-white role";
    careerRole.textContent = career.role;
    careerInfo.appendChild(careerRole);

    // Create description list
    const descriptionList = document.createElement("div");
    descriptionList.className = "font-grey description-list";
    career.description.forEach((item) => {
        const descriptionItem = document.createElement("span");
        descriptionItem.className = "description-list-item";
        descriptionItem.textContent = item;
        descriptionList.appendChild(descriptionItem);
    });
    careerInfo.appendChild(descriptionList);

    // Append careerInfo to the careerListItem
    careerListItem.appendChild(careerInfo);

    // Create and append the skills section
    const skillsSection = document.createElement("div");
    skillsSection.className = "skills-section";

    // Create and append the skills heading
    const skillsHeading = document.createElement("p");
    skillsHeading.className = "font-grey st-lists-heading";
    skillsHeading.textContent = "Skills & Tools";
    skillsSection.appendChild(skillsHeading);

    // Create skills list
    const skillsContainer = document.createElement("div");
    skillsContainer.className = "st-lists-container";
    career.skills.forEach((skill) => {
        const skillSpan = document.createElement("span");
        skillSpan.className = "font-white st-lists-item-small";
        skillSpan.textContent = skill;
        skillsContainer.appendChild(skillSpan);
    });
    skillsSection.appendChild(skillsContainer);

    // Append skillsSection to the careerListItem
    careerListItem.appendChild(skillsSection);

    // Append the career list item to the main container
    careerContainer.appendChild(careerListItem);
});
