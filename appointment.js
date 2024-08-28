// appointment.js
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('YOUR_USER_ID'); // Replace with your EmailJS user ID

    document.getElementById('appointmentForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get user input values
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const email = document.getElementById('email').value;

        // Debugging: Check if values are correct
        console.log('Date:', date);
        console.log('Time:', time);
        console.log('Email:', email);

        // EmailJS send function
        emailjs.send('RGN-APPOINTMENT', 'template_n2qa7tl', {
            date: date,
            time: time,
            user_email: email
        })
        .then(function(response) {
            alert('Appointment booked successfully!');
            console.log('EmailJS Response:', response);
            document.getElementById('appointmentForm').reset(); // Reset the form
        }, function(error) {
            alert('Failed to book appointment. Please try again.');
            console.error('Error:', error);
        });
    });
});

