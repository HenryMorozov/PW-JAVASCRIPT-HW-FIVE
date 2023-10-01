const users = {};

for (let i = 1; i <= 3; i++) {
  let { name, age } = prompt("Enter the name and age of the user: " + i);
  users[i] = { name, age };
}

for (let id in users) {
  console.log("User - " + id);
  console.log("Username - " + users[id].name);
  console.log("Userage - " + users[id].age);
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