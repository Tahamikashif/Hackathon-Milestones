var toggleSkills = document.getElementById('toggle-skills');
var skills = document.getElementById('Skills');
toggleSkills.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = 'none';
    }
});
