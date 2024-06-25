function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'yourpassword';  // Replace with your actual password

    if (password === correctPassword) {
        document.getElementById('password-section').style.display = 'none';
        document.getElementById('protected-content').style.display = 'block';
    } else {
        alert('Incorrect password. Please try again.');
    }
}
