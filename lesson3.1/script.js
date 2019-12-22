<<<<<<< HEAD
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

const customerBasket = {

    basket: [
        ['apple', 5, 20],
        ['watermelon', 1, 90],
        ['peach', 3, 25],
        ['grapes', 1, 40],
        ['pineapple', 1, 50],
        ['orange', 10, 30],
        ['lemon', 2, 20],
    ],

    countBasketCost() {
        let sum = 0;
        for (let i = 0; i < this.basket.length; i++) {
            sum = sum + this.basket[i][1] * this.basket[i][2];
        }
        return sum;
    },

};

console.log('Total cost of your basket is ' + customerBasket.countBasketCost() + '$');


//Задание 3

for(let i = 0; i < 10; console.log(i++));


//Задание 4

let stars = 'x';
for (let i = 0; i < 50; i++) {
    console.log(stars);
    stars = stars + 'x';
}
=======
//Задание 1

function getNumber (number) {

    let hundreds, tens, units;

    const object = {
        hundreds: null,
        tens: null,
        units: null,
    };

    if (number > 999) {
        return 'Enter a number < 999! Object is empty - ' + object;
    } else {
        object.hundreds = Math.floor(number / 100);
        object.tens = Math.floor((number - object.hundreds * 100) / 10);
        object.units = (number - (object.hundreds * 100 + object.tens * 10));
        return object;
    };
};

console.log(getNumber(245));

//Задание 2

const customerBasket = [
    {
        product_id: '1',
        product_name: 'Apple',
        product_quantity: 5,
        product_price: 20,
    },
    {
        product_id: '2',
        product_name: 'Watermelon',
        product_quantity: 1,
        product_price: 90,
    },
    {
        product_id: '3',
        product_name: 'Peach',
        product_quantity: 3,
        product_price: 25,
    },
    {
        product_id: '4',
        product_name: 'Grapes',
        product_quantity: 1,
        product_price: 40,
    },
    {
        product_id: '5',
        product_name: 'Pineapple',
        product_quantity: 1,
        product_price: 50,
    },
    {
        product_id: '6',
        product_name: 'Orange',
        product_quantity: 10,
        product_price: 30,
    },
    {
        product_id: '7',
        product_name: 'Lemon',
        product_quantity: 2,
        product_price: 20,
    },
];

function countBasketCost (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i].product_quantity*arr[i].product_price;
    }
    return sum;
}

console.log('Total cost of your basket is ' + countBasketCost(customerBasket) + '$');

//Задание 3

const product = {
    product_id: null,
    product_name: null,
    addToCart() {},
    changeProperty() {},
};

const catalog = {
    product,
    addToCart() {},
    setQuantity() {},
}

const cart = {
    product,
    deleteFromCart() {},
    increaseQuantity() {},
    clearCart() {},
    totalCost() {},
};



>>>>>>> lesson4
