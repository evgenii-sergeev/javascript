//Задание 1

let i = 2;
let prime;

while (i < 100) {
    let j = 1;
    while (j < i) {
        if(i % j !== 0 || j == 1) prime = i; else {prime = 0; break;}
        j++;
    }
if (prime !==0)console.log(prime);
i++;
}


//Задание 2

const customerBasket = [
    ['apple', 5, 20],
    ['watermelon', 1, 90],
    ['peach', 3, 25],
    ['grapes', 1, 40],
    ['pineapple', 1, 50],
    ['orange', 10, 30],
    ['lemon', 2, 20],
];

function countBasketCost (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i][1]*arr[i][2];
    }
    return sum;
}

console.log('Total cost of your basket is ' + countBasketCost(customerBasket) + '$');


//Задание 3

for(let i = 0; i < 10; console.log(i++));


//Задание 4

let stars = 'x';
for (let i = 0; i < 50; i++) {
    console.log(stars);
    stars = stars + 'x';
}
