function checkPassword() {
    const password = document.getElementById('body').value.trim();
    const correctPassword = 'yourpassword';  // Replace with your actual password

    if (password === correctPassword) {
        document.getElementById('email-draft-section').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
