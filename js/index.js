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

const messageForm = document.forms["leave_message"];

messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const usersName = event.target.usersName.value;
  const usersEmail = event.target.usersEmail.value;
  const usersMessage = event.target.usersMessage.value;

  console.log(usersName, usersEmail, usersMessage);

  const messageSection = document.getElementById("messages");
  messageSection.style.display = "block";

  const messageList = messageSection.querySelector("ul");
  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
  <a href="mailto:${usersEmail}">${usersName}</a>
  <span>${usersMessage}</span>
`;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", function (event) {
  const entry = event.target.parentNode;
  entry.remove();

  if (messageList.children.length === 0) {
  messageSection.style.display = "none";
  }
});

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();

});