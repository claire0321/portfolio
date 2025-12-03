const data = {
    Skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 60 },
        { name: "RStudio", level: 80 },
        { name: "HTML/CSS", level: 50 },
        { name: "MYSQL", level: 60 },
    ],
    Tools: [
        { name: "Matlab", level: 90 },
        { name: "Kubernetes", level: 40 },
        { name: "Docker", level: 60 },
        { name: "CI/CD", level: 30 },
        { name: "Jenkins", level: 40 },
    ],
};

function renderSkillsTools() {
    const container = document.getElementById("skills-tools-container");
    container.innerHTML = "";

    Object.entries(data).forEach(([title, items]) => {
        const section = document.createElement("div");
        section.className = "skills-tools";

        section.innerHTML = `
      <span class="st-heading font-white font-bold underline">${title}</span>
      <div class="skills-tools-list font-white font-bold">
        ${items
            .map(
                (item) => `
          <div class="st-list-item">
            <span>${item.name}</span>
            <div class="bar">
              <div class="progress" style="width: ${item.level}%"></div>
            </div>
          </div>
        `
            )
            .join("")}
      </div>
    `;
        container.appendChild(section);
    });
}

renderSkillsTools();
