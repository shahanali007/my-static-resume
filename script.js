var toggelButton = document.getElementById('toggel-skills');
var skills = document.getElementById('skills');
toggelButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
