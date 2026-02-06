const form = document.getElementById("coverForm");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

function generateLetter(name, role, company, skills) {
  return `Dear Hiring Manager at ${company},

I am ${name}, and I am excited to apply for the position of ${role}. 
With my skills in ${skills}, I am confident in my ability to contribute effectively to your team.

I am eager to bring my dedication and enthusiasm to ${company} and grow professionally while adding value to your organization.

Thank you for considering my application.

Sincerely,
${name}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const company = document.getElementById("company").value;
  const skills = document.getElementById("skills").value;

  result.value = generateLetter(name, role, company, skills);
});

copyBtn.addEventListener("click", function () {
  result.select();
  document.execCommand("copy");
  alert("Copied to clipboard!");
});
