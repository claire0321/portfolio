const educations = [
    {
        date: "2022.02 - 2025.11",
        institution: "University of Auckland",
        role: "@ Bachelor of Engineering Science",
        description: [
            "Operations Research (OR)",
            "Computational Mechanics",
            "Data Science",
            "First in Course Award in Object-Oriented Programming",
        ],
        skills: ["Python", "RStudio", "Matlab", "Java", "Excel", "Github"],
    },
    {
        date: "2017.02 - 2021.12",
        institution: "Westlake Girls High School",
        role: "@ Student",
        description: [
            "Encellence Endorsement in Level 3: Chenistry, Calculus, Physics",
            "Merit Endorsement in Level 3: Statistics",
        ],
        skills: ["Python", "HTML", "CSS", "PhotoShop", "Calculus", "Github"],
    },
];

const educationsContainer = document.querySelector(".education-container");

educations.forEach((education) => {
    // Create the main list item div
    const educationListItem = document.createElement("div");
    educationListItem.className = "education-list-item grey-background";

    // Create a wrapper div for date, institution, role, and description
    const educationInfo = document.createElement("div");
    educationInfo.className = "container-info";

    // Create and append the date span
    const educationDate = document.createElement("span");
    educationDate.className = "font-grey date";
    educationDate.textContent = education.date;
    educationInfo.appendChild(educationDate);

    // Create and append the institution span
    const educationInstitution = document.createElement("span");
    educationInstitution.className = "font-white institution";
    educationInstitution.textContent = education.institution;
    educationInfo.appendChild(educationInstitution);

    // Create and append the role span
    const educationRole = document.createElement("span");
    educationRole.className = "font-white role";
    educationRole.textContent = education.role;
    educationInfo.appendChild(educationRole);

    // Create description list
    const descriptionList = document.createElement("div");
    descriptionList.className = "font-grey description-list";
    education.description.forEach((item) => {
        const descriptionItem = document.createElement("span");
        descriptionItem.className = "description-list-item";
        descriptionItem.textContent = item;
        descriptionList.appendChild(descriptionItem);
    });
    educationInfo.appendChild(descriptionList);

    // Append educationInfo to the educationListItem
    educationListItem.appendChild(educationInfo);

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
    education.skills.forEach((skill) => {
        const skillSpan = document.createElement("span");
        skillSpan.className = "font-white st-lists-item-small";
        skillSpan.textContent = skill;
        skillsContainer.appendChild(skillSpan);
    });
    skillsSection.appendChild(skillsContainer);

    // Append skillsSection to the educationListItem
    educationListItem.appendChild(skillsSection);

    // Append the education list item to the main container
    educationsContainer.appendChild(educationListItem);
});
