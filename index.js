
document.addEventListener('DOMContentLoaded', function() {
    // Attach click event listeners to the buttons
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', function() {
            const popupId = this.classList[1].split('-')[0];
            const popup = document.getElementById(`${popupId}-popup`);
            const isActive = popup.classList.contains('active');

            // Deactivate all popups and buttons
            document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.button').forEach(b => b.classList.remove('clicked'));

            // If the clicked button was not active, activate it
            if (!isActive) {
                popup.classList.add('active');
                this.classList.add('clicked');
            }
        });
    });

    // Close popup if clicked outside
    document.addEventListener('click', function(event) {
        const isClickInside = event.target.closest('.popup') || event.target.closest('.button');
        if (!isClickInside) {
            document.querySelectorAll('.popup').forEach(p => p.classList.remove('active'));
            document.querySelectorAll('.button').forEach(b => b.classList.remove('clicked'));
        }
    });
});

let currentPopup = null; // To keep track of the currently opened pop-up

function togglePopup(popupId) {
    const popup = document.getElementById(`${popupId}-popup`);

    // Hide the currently visible pop-up if it's not the one being clicked
    if (currentPopup && currentPopup !== popup) {
        currentPopup.style.display = 'none';
    }

    // Toggle the display of the clicked pop-up
    if (popup.style.display === 'block') {
        popup.style.display = 'none';
        currentPopup = null; // Reset the current pop-up
    } else {
        popup.style.display = 'block';
        currentPopup = popup; // Set the new current pop-up
    }
}

window.addEventListener("load", () => {
    const isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    const isTablet = navigator.userAgent.toLowerCase().match(/tablet/i);
    const isAndroid = navigator.userAgent.toLowerCase().match(/android/i);
    const isiPhone = navigator.userAgent.toLowerCase().match(/iphone/i);
    const isiPad = navigator.userAgent.toLowerCase().match(/ipad/i);

    console.log("Mobile:", isMobile);
    console.log("Tablet:", isTablet);
    console.log("Android:", isAndroid);
    console.log("iPhone:", isiPhone);
    console.log("iPad:", isiPad);

    if (isMobile || isTablet || isAndroid || isiPhone || isiPad) {
        window.location.href = 'mobile.html';
    }
});


