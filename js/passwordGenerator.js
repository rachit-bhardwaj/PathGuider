function generatePassword() {
    const length = document.getElementById('passwordLength').value;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // For checking consecutive letters
    let password = '';
    let name = document.getElementById('nameInput').value; // Get name from input

    // Ensure password length is a valid number
    if (length < 6 || length > 20) {
        alert('Password length should be between 6 and 20 characters.');
        return;
    }

    // Start with the name (if provided)
    password += name;

    // Adjust the password length after adding the name
    let remainingLength = length - name.length;

    // Ensure remaining length is valid
    if (remainingLength < 1) {
        alert('Password length should be longer than the name length.');
        return;
    }

    // Function to check if two consecutive characters are from the alphabet
    function isConsecutive(char1, char2) {
        const index1 = alphabet.indexOf(char1);
        const index2 = alphabet.indexOf(char2);
        return Math.abs(index1 - index2) === 1;
    }

    // Add random characters, ensuring no consecutive alphabet letters
    while (remainingLength > 0) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        const randomChar = characters[randomIndex];
        
        // Check if the character is not consecutive with the last character in the password
        if (password.length === 0 || !isConsecutive(password[password.length - 1], randomChar)) {
            password += randomChar;
            remainingLength--;
        }
    }

    document.getElementById('passwordDisplay').textContent = password;
}