const body = document.querySelector("body")

const footer = document.createElement("footer");

body.appendChild(footer);


const today = new Date();

const thisYear = today.getFullYear();

const selectedFooter = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = `© Gabriel Palma ${thisYear}`

selectedFooter.appendChild(copyright);



const skills = ["Python","SQL","JavaScript","HTML","CSS","GitHub","Git"]

const skillsSection = document.querySelector("#skills")

const skillsList = skillsSection.querySelector("ul")

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");

  skill.innerText = skills[i];

  skillsList.appendChild(skill);
}