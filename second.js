document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form element
    let form = event.target;

    // Collect user's answers
    let answers = {
        q1: form.elements['q1'].value,
        q2: form.elements['q2'].value,
        q3: form.elements['q3'].value,
        q4: form.elements['q4'].value,
        q5: form.elements['q5'].value
    };

    // Calculate the score
    let marks = calculateScore(answers);

    // Store the quiz marks in session storage
    sessionStorage.setItem('quizMarks', marks);

    // Redirect to the results page
    window.location.href = 'third.html';
});

// Function to calculate the score based on user's answers
function calculateScore(answers) {
    let marks = 0;

    // Add your scoring logic here
    if (answers.q1 === '2') {
        marks += 1;
    }
    if (answers.q2 === 'Paris') {
        marks += 1;
    }
    if (answers.q3 === 'William Shakespeare') {
        marks += 1;
    }
    if (answers.q4 === 'Mars') {
        marks += 1;
    }
    if (answers.q5 === '7') {
        marks += 1;
    }

    return marks;
}
