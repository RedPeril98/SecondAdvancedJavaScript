//  Задание создать интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

document.addEventListener('DOMContentLoaded', function() {
    const reviewForm = document.getElementById('reviewForm');
    const productList = document.getElementById('productList');

    function loadReviews() {
        return JSON.parse(localStorage.getItem('reviews')) || [];
    }

    function renderProductList(reviews) {
        productList.innerHTML = '';
        const products = new Set(reviews.map(review => review.productName));
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.textContent = product;
            productItem.classList.add('product-item');
            productItem.addEventListener('click', () => renderReviewsByProduct(product, reviews));
            productList.appendChild(productItem);
        });
    }

    function renderReviewsByProduct(productName, reviews) {
        const reviewList = document.createElement('div');
        reviewList.classList.add('review-list');
        const filteredReviews = reviews.filter(review => review.productName === productName);
        filteredReviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.textContent = `Reviewer: ${review.reviewerName}, Review: ${review.reviewText}`;
            reviewItem.classList.add('review-item');
            reviewList.appendChild(reviewItem);
        });
        productList.appendChild(reviewList);
    }

    function saveReview(productName, reviewerName, reviewText, id) {
        const reviews = loadReviews();
        reviews.push({ productName, reviewerName, reviewText, id });
        localStorage.setItem('reviews', JSON.stringify(reviews));
        renderProductList(reviews);
    }

    function addReview(productName, reviewerName, reviewText, id) {
        const reviewList = document.createElement('div');
        reviewList.classList.add('review-list');
        const reviewItem = document.createElement('div');
        reviewItem.textContent = `Reviewer: ${reviewerName}, Review: ${reviewText}`;
        reviewItem.classList.add('review-item');
        reviewList.appendChild(reviewItem);
        productList.appendChild(reviewList);
    }

    reviewForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const productName = document.getElementById('productName').value;
        const reviewerName = document.getElementById('reviewerName').value;
        const reviewText = document.getElementById('reviewText').value;
        const id = new Date().getTime();
        addReview(productName, reviewerName, reviewText, id);
        saveReview(productName, reviewerName, reviewText, id);
        reviewForm.reset(); // Очистка формы после отправки
    });

    const reviews = loadReviews();
    renderProductList(reviews);
});
