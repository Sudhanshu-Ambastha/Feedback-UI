document.addEventListener('DOMContentLoaded', function() {
    const feedbackOptions = document.querySelectorAll('.feedback-option');
    const sendReviewButton = document.querySelector('.send-review-btn');
    let selectedFeedback = '';

    feedbackOptions.forEach(function(option) {
        option.addEventListener('click', function() {
            feedbackOptions.forEach(function(btn) { btn.classList.remove('selected'); });
            option.classList.add('selected');
            selectedFeedback = option.getAttribute('data-feedback');
        });
    });

    sendReviewButton.addEventListener('click', function() {
        if (selectedFeedback) {
            document.querySelector('.feedback-container').innerHTML = `
                <h1 class="confirmation-heading">Thank you!</h1>
                <div class="confirmation-message">
                    <p>Your feedback: <strong>${selectedFeedback}</strong></p>
                    <p>We'll use your feedback to improve our customer support.</p>
                </div>
            `;
        } else {
            alert('Please select a feedback option before sending your review.');
        }
    });
});
