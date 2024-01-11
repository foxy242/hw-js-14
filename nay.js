// task 1

// const user = {
//     name: "Georgiy",
//     age: 13,
//     hobby: "play Volleyball",
//     premium: true
//   };

//   user.mood = "happy";

//   user.hobby = "play Football";

//   user.premium = false;

//   for (const key of Object.keys(user)) {
//     console.log(`${key}: ${user[key]}`);
//   }

//   Напиши скрипт, який, для об'єкта user, послідовно:
//   додає поле mood зі значенням 'happy'
//   замінює значення hobby на 'skydiving'
//   замінює значення premium на false
//   виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of.

// task 2

// function countProps(obj) {
//     return Object.keys(obj).length;
//   }
  
//   const user = {
//     name: "georgiy",
//     age: 13,
//     hobby: "play Football"
//   };
  
//   const numberOfProps = countProps(user);
//   console.log(`Кількість властивостей в об'єкті: ${numberOfProps}`);

//   Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті.
//   Функція повертає число — кількість властивостей.

// task 3

// function findBestEmployee(employees) {
//     let maxTasks = 0;
//     let bestEmployee = "";
  
//     for (const employee in employees) {
//       if (employees[employee] > maxTasks) {
//         maxTasks = employees[employee];
//         bestEmployee = employee;
//       }
//     }
  
//     return bestEmployee;
//   }
  
//   const teamTasks = {
//     Georgiy: 13,
//     Sasha: 11,
//     Tihon: 8,
//     Denis: 10
//   };
  
//   const bestEmployeeName = findBestEmployee(teamTasks);
//   console.log(`Найпродуктивніший співробітник: ${bestEmployeeName}`);

// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого
// (який виконав більше всіх задач). Співробітники і кількість виконаних завдань 
// містяться як властивості об'єкта в форматі "ім'я":"кількість задач".

// task 4

// function countTotalSalary(employees) {
//     let totalSalary = 0;
  
//     for (const salary of Object.values(employees)) {
//       totalSalary += salary;
//     }
  
//     return totalSalary;
//   }
  
//   // Приклад використання:
//   const salaries = {
//     Homs: 5000,
//     Watson: 4000,
//     Moriarti: 3000,
//     Monalit: 3000
//   };
  
//   const totalSalary = countTotalSalary(salaries);
//   console.log(`Загальна сума зарплати: ${totalSalary}`);

//   Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. 
//   Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, 
//   переданого в функцію, має вигляд "ім'я":"зарплата".

// task 5

// function getAllPropValues(arr, prop) {
//     const propValues = [];
  
//     for (const obj of arr) {
//       if (prop in obj) {
//         propValues.push(obj[prop]);
//       }
//     }
  
//     return propValues;
//   }

//   const products = [
//     { name: 'Laptop', price: 1200 },
//     { name: 'Smartphone', price: 800 },
//     { name: 'Tablet', price: 500 }
//   ];
  
//   const prices = getAllPropValues(products, 'price');
//   console.log(`Масив цін продуктів:`, prices);

// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. 
// Повертає масив значень певної властивості prop з кожного об'єкта в масиві.

// task 6

// function calculateTotalPrice(allProducts, productName) {
//     for (const product of allProducts) {
//       if (product.name === productName) {
//         return product.price * product.quantity;
//       }
//     }
//     return null;
//   }

//   const products = [
//     { name: 'Laptop', price: 1200, quantity: 2 },
//     { name: 'Smartphone', price: 800, quantity: 3 },
//     { name: 'Tablet', price: 500, quantity: 1 }
//   ];
  
//   const totalCost = calculateTotalPrice(products, 'Smartphone');
//   console.log(`Загальна вартість продукту: ${totalCost}`);

// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту 
// (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).