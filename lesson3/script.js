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

customerBasket = [
    ['apple', 'watermelon', 'peach', 'grapes', 'pineapple', 'orange', 'lemon'],
    [5, 1, 3, 1, 1, 10, 2],
    [20, 90, 25, 40, 50, 30, 20],
];

function countBasketCost (arr) {
    let sum = 0;
    for (let i = 0; i < arr[0].length; i++) {
        sum = sum + arr[1][i]*arr[2][i];
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
