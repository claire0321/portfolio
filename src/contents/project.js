const projects = [
    {
        image: "../src/assets/img/project_portfolio.png",
        name: "Website",
        description: "Claire's portfolio website",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/claire0321/portfolio",
    },
    {
        image: "../src/assets/img/orac.png",
        name: "Orac",
        description: "Mini game platform",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/skim411/Orac",
    },
];

const projectContainer = document.querySelector(".project-container");

projects.forEach((project) => {
    // Create the main list item div
    const projectListItem = document.createElement("div");
    projectListItem.className = "project-list-item grey-background";

    // Create the image element
    const projectImg = document.createElement("img");
    projectImg.className = "project-img";
    projectImg.src = project.image;

    // Create the project info container
    const projectInfo = document.createElement("div");
    projectInfo.className = "project-info";

    // Create and append name and description spans
    const projectName = document.createElement("span");
    projectName.className = "font-white project-name";
    projectName.textContent = project.name;

    const projectDescription = document.createElement("span");
    projectDescription.className = "font-grey project-discription";
    projectDescription.textContent = project.description;

    projectInfo.appendChild(projectName);
    projectInfo.appendChild(projectDescription);

    // Create the technologies container
    const techListContainer = document.createElement("div");
    techListContainer.className = "project-st-lists-container";

    // loop through the tech array and create spans
    project.tech.forEach((tech) => {
        const techSpan = document.createElement("span");
        techSpan.className = "font-white st-lists-item-small";
        techSpan.textContent = tech;
        techListContainer.appendChild(techSpan);
    });

    // ---- HOVER OVERLAY ----
    const overlay = document.createElement("div");
    overlay.className = "project-overlay";

    const githubProject = document.createElement("p");
    githubProject.className = "project-title font-white";
    githubProject.textContent = project.name;

    overlay.appendChild(githubProject);

    const githubBtn = document.createElement("a");
    githubBtn.className = "project-github-btn";
    githubBtn.textContent = "Github";
    githubBtn.href = project.github;
    githubBtn.target = "_blank";

    overlay.appendChild(githubBtn);

    // Append everything to the main list item
    projectListItem.appendChild(projectImg);
    projectListItem.appendChild(projectInfo);
    projectListItem.appendChild(techListContainer);
    projectListItem.appendChild(overlay);

    // Append the full project list item to the main container
    projectContainer.appendChild(projectListItem);
});
