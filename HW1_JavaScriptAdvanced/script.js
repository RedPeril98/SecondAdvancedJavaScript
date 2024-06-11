// Задание 1 "Музыкальная коллекция"
// const musicCollection = {

//     albums: [
//         {
//             artist: "Imagine Dragons",
//             title: "Origins",
//             year: "2018"
//         },
//         {
//             artist: "The Killers",
//             title: "Battle Born",
//             year: "2012"
//         },
//         {
//             artist: "Måneskin",
//             title: "Il ballo della vita",
//             year: "2018"
//         }
//     ],

//     [Symbol.iterator]: function() {
//         let index = 0;
//         const albums = this.albums;
//         return {
//             next: function() {
//                 if (index < albums.length) {
//                     return { value: albums[index++], done: false };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };

// for (const album of musicCollection) {
//     console.log(`${album.artist} - ${album.title} (${album.year})`);
// }

// Задание 2 "Управление рестораном"
const chefs = new Map([
    ['Виктор', 'Пиццайоло'],
    ['Ольга', 'Сушист'],
    ['Дмитрий', 'Кондитер']
]);

const dishes = new Map([
    ['Пицца "Маргарита"', 'Виктор'],
    ['Пицца "Пепперони"', 'Виктор'],
    ['Суши "Филадельфия"', 'Ольга'],
    ['Суши "Калифорния"', 'Ольга'],
    ['Тирамису', 'Дмитрий'],
    ['Чизкейк', 'Дмитрий']
]);

const orders = new Map();

orders.set('Алексей', ['Пицца "Пепперони"', 'Тирамису']);
orders.set('Мария', ['Суши "Калифорния"', 'Пицца "Маргарита"']);
orders.set('Ирина', ['Чизкейк']);

console.log('Заказы:');
for (const [client, order] of orders) {
    console.log(`${client} заказал: ${order.join(', ')}`);
}

console.log('\nПовара и их специализации:');
for (const [chef, specialty] of chefs) {
    console.log(`${chef} - специализация: ${specialty}`);
}

console.log('\nБлюда и их повара:');
for (const [dish, chef] of dishes) {
    console.log(`${dish} - повар: ${chef}`);
}