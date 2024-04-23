document.getElementById('studentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form values
    let rollNumber = document.querySelector('.rollNumber').value;
    let name = document.querySelector('.name').value;
    let batch = document.querySelector('.batch').value;
    let section = document.querySelector('.section').value;

    // Create an object to store student details
    let studentDetails = {
        rollNumber: rollNumber,
        name: name,
        batch: batch,
        section: section
    };

    // Convert object to JSON string
    let studentDetailsJSON = JSON.stringify(studentDetails);

    // Store data in Session Storage
    sessionStorage.setItem('studentDetails', studentDetailsJSON);

    window.location.href = 'second.html';
});
