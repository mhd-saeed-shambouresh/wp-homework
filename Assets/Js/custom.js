// Email validation function
function validateEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}

// Handle form submission
document.getElementById('emailForm')?.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    const emailInput = document.getElementById('email').value;
    const errorMessage = document.getElementById('errorMessage');

    if (validateEmail(emailInput)) {
        errorMessage.style.display = 'none';  
        alert('Email is valid!');
    } else {
        errorMessage.style.display = 'block';  
    }
});
// Handle form submission
document.getElementById('sendForm')?.addEventListener('submit', function (event) {
    event.preventDefault();  // Prevent form submission

    const emailInput = document.getElementById('email1').value;
    const errorMessage = document.getElementById('errorMessage1');

    if (validateEmail(emailInput)) {
        errorMessage.style.display = 'none';  
        alert('Email is valid!');
    } else {
        errorMessage.style.display = 'block';  
    }
});


function scrollToTop() {
    articlesContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
document.addEventListener('DOMContentLoaded', function () {
    const articles = document.querySelectorAll('.articles-warrper');  
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;  // Start at the first article
    const articlesPerPage = 6;

    function showArticles() {
        articles.forEach((article, index) => {
            article.classList.add('hidden');  
            if (index >= currentIndex && index < currentIndex + articlesPerPage) {
                article.classList.remove('hidden');  
            }
        });

        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex + articlesPerPage >= articles.length;
    }

    // "Next" button click event
    nextBtn?.addEventListener('click', function () {
        if (currentIndex + articlesPerPage < articles.length) {
            currentIndex += articlesPerPage; 
            showArticles();
            scrollToTop(); 

        }
    });

    prevBtn?.addEventListener('click', function () {
        if (currentIndex - articlesPerPage >= 0) {
            currentIndex -= articlesPerPage;  
            showArticles();
            scrollToTop(); 
        }
    });

    showArticles();
});
