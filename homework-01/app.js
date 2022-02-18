// Всі дії виконувати з допомогою модулів (вручну нічого не створюємо)
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.
//
// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
// (ті, що були в папці inPerson будуть в папці online)
//----------------------------------------------------------------------


const path = require('path');
const fs = require('fs');

console.log(__dirname);
console.log(__filename);

//======================================================================
// Потім створити в вашому головному файлі (для прикладу app.js) два масиви з обєктами user
// ({. name: "Andrii", age: 22, city: "Lviv" }),  відповідно перший - onlineUsers, другий - inPersonUsers;
const users = [
    {name: "Bogdan", age: 22, city: "Odessa"},
    {name: "Stepan", age: 26, city: "Lviv"},
    {name: "Olena", age: 26, city: "Dnipro"},
    {name: "Roman", age: 32, city: "Kyiv"},
    {name: "Andrii", age: 22, city: "Lviv"},
    {name: "Pavlo", age: 41, city: "Lviv"},
    {name: "Taniy", age: 24, city: "Odessa"},
    {name: "Iryna", age: 25, city: "Kyiv"},
    {name: "Ostap", age: 29, city: "Kharkiv"},
    {name: "Polina", age: 22, city: "Kyiv"},
];
const inPersonUsers = [
    {name: "Ivan", age: 22, city: "Odessa"},
    {name: "Oleg", age: 26, city: "Rivno"},
    {name: "Volodymyr", age: 26, city: "Dnipro"},
    {name: "Taras", age: 32, city: "Poltava"},
    {name: "Alina", age: 22, city: "Lviv"},
    {name: "Veronika", age: 41, city: "Poltava"},
    {name: "Stepan", age: 24, city: "Rivno"},
    {name: "Iryna", age: 25, city: "Odessa"},
    {name: "Pavlo", age: 29, city: "Kharkiv"},
    {name: "Karolina", age: 22, city: "Odessa"},
];


//======================================================================
// Створити основну папку (main), в яку покласти дві інші папки: перша - online, друга - inPerson
fs.mkdirSync(path.join(__dirname, 'main', 'online'), {recursive: true})

fs.mkdirSync(path.join(__dirname, 'main', 'inPerson'), err => {
    if (err) throw err; // folder not created
    console.log('Folder "created"');
});

// і створити файли txt в папках (online, inPerson) в яких як дату покласти юзерів з ваших масивів,
// але щоб ваш файл виглядав як NAME: ім'я з обєкту і т.д і всі пункти з нового рядка.

fs.writeFileSync(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), "OnlineUsers:\n");

for (const user of users) {
    const data = `Name: ${user.name}, Age: ${user.age}, City: ${user.city}\n`;
    fs.appendFileSync(path.join(__dirname, 'main', 'online', 'onlineUsers.txt'), data);
}


fs.writeFileSync(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), "PersonUser:\n");

for (const user of inPersonUsers) {
    const data = `Name: ${user.name}, Age: ${user.age}, City: ${user.city}\n`
    fs.appendFileSync(path.join(__dirname, 'main', 'inPerson', 'inPersonUsers.txt'), data);
}

// Коли ви це виконаєте напишіть функцію яка буде міняти місцями юзерів з одного файлу і папки в іншу.
const dataReplace = (path1, path2) => {
    let data1 = '', data2 = '';
    data1 = fs.readFileSync(path1, 'utf8');
    data2 = fs.readFileSync(path2, 'utf8');
    fs.writeFileSync(path1, data2);
    fs.writeFileSync(path2, data1);
}

dataReplace(
    path.join(__dirname, 'main', 'online', 'onlineUsers.txt'),
    path.join(__dirname, 'main', 'inPerson', `inPersonUsers.txt`)
);






