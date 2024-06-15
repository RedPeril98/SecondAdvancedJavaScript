//  Задание 1 "Управление библиотекой"
// class Library {
//     #books;

//     constructor(initialBooks = []) {
//         // Проверяем, что предоставленный массив не содержит дубликатов
//         if (new Set(initialBooks).size !== initialBooks.length) {
//             throw new Error('Указанный список книг содержит дубликаты');
//         }

//         this.#books = [...initialBooks];
//     }

//     get allBooks() {
//         return this.#books;
//     }

//     addBook(title) {
//         if (this.#books.includes(title)) {
//             throw new Error(`Книга "${title}" уже существует!`);
//         }
//         this.#books.push(title);
//     }

//     removeBook(title) {
//         const index = this.#books.indexOf(title);
//         if (index === -1) {
//             throw new Error(`Книга "${title}" не найдена`);
//         }
//         this.#books.splice(index, 1);
//     }

//     hasBook(title) {
//         return this.#books.includes(title);
//     }
// }

// // Создаем объект класса Library
// const library = new Library(['Book 1', 'Book 2', 'Book 3']);

// // Пример использования методов
// console.log(library.allBooks);
// library.addBook('Book 4'); // Добавляет книгу
// console.log(library.allBooks);
// library.removeBook('Book 2');
// console.log(library.allBooks);
// console.log(library.hasBook('Book 3'));

// Задание 2 "Система отзывов для веб-сайта"


const reviewsContainer = document.getElementById('reviewsContainer');

        function addReview(name, reviewText, id) {
            const reviewElement = document.createElement('div');
            reviewElement.innerHTML = `
                <p><strong>${name}:</strong> ${reviewText}</p>
                <p>ID: ${id}</p>
                <hr>
            `;
            reviewsContainer.appendChild(reviewElement);
        }

        function saveReview(name, reviewText, id) {
            let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
            reviews.push({ name, reviewText, id });
            localStorage.setItem('reviews', JSON.stringify(reviews));
        }

        function loadReviews() {
            let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
            reviews.forEach(review => {
                addReview(review.name, review.reviewText, review.id);
            });
        }

        window.onload = function () {
            loadReviews();
            const initialData = [
                {
                    adopter: "Анна",
                    reviews: [
                        {
                            id: "1",
                            text: "Я познакомилась с Лапа Лапой примерно 6 лет назад, когда в первый раз привезла туда котёнка Лули. Для меня существование такого приюта было открытием и радостью, что, оказывается, не всё потеряно для уличных животных и у них есть возможность обрести настоящий дом. "
                        },
                        {
                            id: "2",
                            text: "Очень благодарна приюту за возможность взять питомца. Условия содержания животных на высоте."
                        },
                    ],
                },
                {
                    adopter: "Мария",
                    reviews: [
                        {
                            id: "3",
                            text: "Отличный приют. Видно, что люди занимаются делом с любовью и заботой о котиках и их здоровье. Серьезный подход к бушующим хозяевам пушистиков."
                        },
                    ],
                },
                {
                    adopter: "Алексей",
                    reviews: [
                        {
                            id: "4",
                            text: "Прекрасные люди организовали великолепный приют! Брала здесь кошечку и нахожу, что сотрудники приюта очень ответственно относятся к судьбе животных."
                        },
                    ],
                },
            ];

            initialData.forEach(item => {
                item.reviews.forEach(review => {
                    addReview(item.adopter, review.text, review.id);
                    saveReview(item.adopter, review.text, review.id);
                });
            });
        };

        const reviewForm = document.getElementById('reviewForm');
        reviewForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const nameInput = document.getElementById('name');
            const reviewInput = document.getElementById('review');
            const name = nameInput.value.trim();
            const reviewText = reviewInput.value.trim();
            if (reviewText.length < 50 || reviewText.length > 500) {
                alert('Отзыв должен содержать от 50 до 500 символов.');
                return;
            }
            const id = new Date().getTime();
            addReview(name, reviewText, id);
            saveReview(name, reviewText, id);
            nameInput.value = '';
            reviewInput.value = '';
        });