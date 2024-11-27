document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    let formValid = true;

    // Validate each required field
    const requiredFields = document.querySelectorAll('[required]');
    requiredFields.forEach(function(field) {
        if (!field.value.trim()) {
            formValid = false;
            const errorElement = document.getElementById(field.id + 'Error');
            field.classList.add('input-error');
            errorElement.style.display = 'block';
        } else {
            const errorElement = document.getElementById(field.id + 'Error');
            field.classList.remove('input-error');
            errorElement.style.display = 'none';
        }
    });

    // If form is valid, save data and redirect
    if (formValid) {
        // Create an object to hold the form data
        const formData = {
            lastName: document.getElementById('lastName').value,
            firstName: document.getElementById('firstName').value,
            middleName: document.getElementById('middleName').value,
            birthMonth: document.getElementById('birthMonth').value,
            birthDate: document.getElementById('birthDate').value,
            birthYear: document.getElementById('birthYear').value,
            age: document.getElementById('age').value,
            gender: document.getElementById('gender').value,
            civilStatus: document.getElementById('civilStatus').value,
            contactNumber: document.getElementById('contactNumber').value,
            email: document.getElementById('email').value,
            permanentAddress: document.getElementById('permanentAddress').value,
            temporaryAddress: document.getElementById('temporaryAddress').value,
            idNumber: document.getElementById('idNumber').value,
            program: document.getElementById('program').value,
            college: document.getElementById('college').value,
            yearLevel: document.getElementById('yearLevel').value,
            guardianName: document.getElementById('guardianName').value,
            guardianContact: document.getElementById('guardianContact').value,
            guardianRelationship: document.getElementById('guardianRelationship').value
        };

        // Save data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));

        // Redirect to submit.html
        window.location.href = 'submit.html';
    } else {
        alert('Please fill in all required fields.');
    }
});
