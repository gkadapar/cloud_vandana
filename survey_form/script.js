function validateForm() {
    // Add your form validation logic here

    // Example: Check if the email is valid
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    if (!validateEmail(email)) {
        emailError.textContent = 'Invalid email address';
        return false;
    } else {
        emailError.textContent = '';
    }

    // Validate the mobile number
    const mobileNumber = document.getElementById('mobile-number').value;
    const mobileNumberError = document.getElementById('mobile-number-error');
    if (!validateMobileNumber(mobileNumber)) {
        mobileNumberError.textContent = 'Please enter 10 digits.';
        return false;
    } else {
        mobileNumberError.textContent = '';
    }

    // Continue validation for other fields

    // If no errors, display the popup
    displayPopup();
    return false;
}

function validateEmail(email) {
    // Add your email validation logic here
    return /\S+@\S+\.\S+/.test(email);
}

function validateMobileNumber(mobileNumber) {
    // Validate mobile number (10 digits)
    return /^\d{10}$/.test(mobileNumber);
}

function displayPopup() {
    const form = document.getElementById('survey-form');
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popup-content');

    // Get all the form data and create the content to display in the popup
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dateOfBirth = document.getElementById('date-of-birth').value;
    const country = document.getElementById('country').value;
    const gender = document.querySelectorAll('input[name="gender"]:checked').length > 0 ? "Male" : "Female";
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobileNumber = document.getElementById('mobile-number').value;

    // Create the popup content
    popupContent.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dateOfBirth}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
    `;

    // Display the popup
    popup.style.display = 'block';

    // Reset the form after displaying the popup
    form.reset();
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
