document.getElementById('avatar').addEventListener('click', function() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = (dropdown.style.display === 'none' || dropdown.style.display === '') ? 'block' : 'none';
});

document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('dropdown');
    const avatar = document.getElementById('avatar');
    if (!dropdown.contains(e.target) && !avatar.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});
