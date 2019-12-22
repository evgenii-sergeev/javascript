'use strict';

    const chessField = {
    rowCount: 8,
    colCount: 8,
    blackCellColor: '#000',
    whiteCellColor: '#fff',
    containerElement: null,
    cellLetters: ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    cellSize: '80px',

    initCells() {
        this.containerElement = document.getElementById('field');
        this.containerElement.innerHTML = '';
        let lines = 8;

        for (let row = 0; row < this.rowCount; row++) {

            const trElem = document.createElement('tr');
            this.containerElement.appendChild(trElem);
            const firstCell = document.createElement('td');
            firstCell.innerText = '' + lines;
            trElem.appendChild(firstCell);
            lines--;
            let colorCode = 8;

            for (let col = 0; col < this.colCount; col++) {
                const cell = document.createElement('td');
                cell.style.height = this.cellSize;
                cell.style.width = this.cellSize;
                if (lines % 2 > 0) {
                if (colorCode % 2 > 0) {
                    cell.style.backgroundColor = this.blackCellColor;}}
                else {if (colorCode % 2 === 0) {
                    cell.style.backgroundColor = this.blackCellColor;}};
                trElem.appendChild(cell);
                colorCode--;
            }
        }

        const letterLine = document.createElement('tr');
        this.containerElement.appendChild(letterLine);
        for (let col = 0; col < this.cellLetters.length; col++) {
            const cell = document.createElement('td');
            cell.innerText = '' + this.cellLetters[col];
            cell.style.textAlign = 'center';
            letterLine.appendChild(cell);
        }
    },

};

chessField.initCells();

const customerBasket = {

    basketItems: [
        ['apple', 5, 20],
        ['watermelon', 1, 90],
        ['peach', 3, 25],
        ['grapes', 1, 40],
        ['pineapple', 1, 50],
        ['orange', 10, 30],
        ['lemon', 2, 20],
    ],

    countBasketCost () {
        let sum = 0;
        for (let i = 0; i < this.basketItems.length; i++) {
            sum = sum + this.basketItems[i][1]*this.basketItems[i][2];
        }
        return sum;
    },

};

for (let i = 0; i < customerBasket.basketItems.length; i++) {
    const line = document.createElement('p');
    line.innerText = '' + customerBasket.basketItems[i][0] + ': ' + customerBasket.basketItems[i][1] + 'pc.';
    console.log(line);
    document.querySelector('.cart').appendChild(line);
};

const total = document.createElement('p');
if (customerBasket.countBasketCost() > 0) {
total.innerText = 'Total cost of your basket is ' + customerBasket.countBasketCost() + '$';} else {total.innerText = 'Your cart is empty...'}

document.querySelector('.cart').appendChild(document.createElement('hr'));
document.querySelector('.cart').appendChild(total);