document.addEventListener('DOMContentLoaded', function() {
        // Retrieve student details and quiz marks from session storage
        let studentDetailsJSON = sessionStorage.getItem('studentDetails');
        let quizMarks = sessionStorage.getItem('quizMarks');
    
        // Parse student details JSON string to object
        let studentDetails = JSON.parse(studentDetailsJSON);
    
        // Display student details and quiz marks
        document.getElementById('rollNumber').innerText = studentDetails.rollNumber;
        document.getElementById('name').innerText = studentDetails.name;
        document.getElementById('batch').innerText = studentDetails.batch;
        document.getElementById('section').innerText = studentDetails.section;
        document.getElementById('quizMarks').innerText = stdentDetails.quizMarks;
    });
    
