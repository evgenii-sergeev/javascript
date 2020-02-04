const cart = {
    catalog: [
        {
            id: 1,
            name: 'apple',
            price: 2,
        },
        {
            id: 2,
            name: 'peach',
            price: 5,
        },
        {
            id: 3,
            name: 'watermelon',
            price: 10,
        },
        {
            id: 4,
            name: 'lemon',
            price: 1,
        },
        {
            id: 5,
            name: 'pineapple',
            price: 9,
        },
        {
            id: 6,
            name: 'plum',
            price: 1,
        },
    ],

    cartContent: [],

    init () {
        const catalogContainer = document.querySelector('.catalog');
        for (let i = 0; i < this.catalog.length; i++) {
            catalogContainer.insertAdjacentHTML("beforeend",
                `<div class="product">
                            <h3>${this.catalog[i].name}</h3>
                            <p>${this.catalog[i].price} $</p>
                            <button data-item = '${i}' class="buy">Buy</button>
                       </div>
            `);
        }

        this.cartRender();
        window.addEventListener('load', this.addToCartSelector())

    },

    addToCartSelector () {
        const button = document.querySelector('.catalog');
        button.addEventListener('click', event => {
            this.addToCart(event);
        })
    },

    addToCart (event) {
        if(event.target.tagName !== 'BUTTON') return;
        this.cartContent.push(this.catalog[event.target.dataset.item]);
        document.querySelector('.cart').innerHTML ='';
        this.cartRender();
    },

    cartSum () {
        let sum = 0;
        for (let i = 0; i < this.cartContent.length; i++) {
            sum = sum + this.cartContent[i].price;
        }

        return sum;

       },

    cartRender() {
        const cartRenderContainer = document.querySelector('.cart');
        if(this.cartContent.length === 0) {
            cartRenderContainer.insertAdjacentHTML('beforeend', `<p>Your cart is empty</p>`)
        }
        else {
            cartRenderContainer.insertAdjacentHTML('beforeend', `
                <p>Your have ${this.cartContent.length} items in your cart</p>
                <p>Total cost of your cart is ${this.cartSum()}$</p>
                `)
            }
        },

}


cart.init();
