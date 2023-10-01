let users = {};

for (let i = 1; i <= 3; i++) {
  let name = prompt("Enter the username: " + i);
  let age = prompt("Enter the userage " + i);
  users[i] = { name, age };
}

for (let key in users) {
  console.log(`User - ${key}`);
  console.log(`Username - ${users[key].name}`);
  console.log(`Userage - ${users[key].age}`);
}
console.log(users);

let rec = receipt();
let productList = '';
let totalPrice = 0
for (let key in rec) {
    productList += key + ', ';
    totalPrice += rec[key].price;
    info = rec[key].info
}
productList = productList.slice(0, -2);
totalPrice += 9000
console.log(`You ordered ${productList} ${info} | total cost ${totalPrice} amount with delivery 9000`);
