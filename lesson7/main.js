const catalogue = {
    catalogueContainer: null,
    cart: {},
    list: [
        {
            id: 1,
            name: 'Keyboard',
            price: 10,
        },
        {
            id: 2,
            name: 'Mouse',
            price: 5,
        },
        {
            id: 3,
            name: 'Processor',
            price: 350,
        },
        {
            id: 4,
            name: 'Printer',
            price: 120,
        },
        {
            id: 5,
            name: 'Router',
            price: 30,
        },
    ],

    init (element, cart) {
        this.catalogueContainer = document.querySelector(element);
        this.cart = cart;
        this.catalogueRender();
        this.eventHandler();
    },

    catalogueRender () {
        this.list.forEach(item => this.catalogueContainer.insertAdjacentHTML('beforeend', this.productRender(item)));
    },

    eventHandler () {
        this.catalogueContainer.addEventListener('click', event => this.addToCart(event));
    },

    getCatalogueLength () {
        return this.list.length;
    },

    addToCart (event) {
        if(!event.target.classList.contains('button__buy')) return;
        const product_id = +event.target.dataset.product_id;
        this.cart.addToCart(product_id);
    },

    productRender (item) {
        return `<div class="product">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                    <button class = "button__buy" data-product_id = "${item.id}">Add to cart</button>
                </div>`
    },

};

const cart = {
    cartContainer: null,
    catalogue: null,
    cartContent: [],

    init(element, catalogue) {
        this.cartContainer = document.querySelector(element);
        this.catalogue = catalogue;
        this.cartRender();
        this.eventHandler();
        this.cartRemoveHandler();
        this.cartSummaryInsert();
    },

    eventHandler () {
        document.querySelector('.button__clear').addEventListener('click', event => this.cartClear());
    },

    cartRemoveHandler () {
        this.cartContainer.addEventListener('click', event => this.cartDelete(event));
    },

    cartDelete (event) {
        if (!event.target.classList.contains('button__delete')) return;
        const idToRemove = +event.target.dataset.product_id;
        this.cartRemove(idToRemove);
    },

    cartRemove (item) {
        const index = this.productFindCart(item);
        this.cartContent.splice(index, 1);
        this.cartRender();
        this.cartSummaryInsert();
    },

    productFindCart (product_id) {
        for (let i = 0; i < this.cartContent.length; i++) {
            if (product_id === this.cartContent[i].id) return i;
        };
    },

    cartClear () {
        this.cartContent = [];
        this.cartRender();
        this.cartSummaryInsert();
    },

    productFind (product_id) {
        return this.catalogue.find(item => item.id === product_id);
    },

    addToCart (item) {
        const product = this.productFind(item);
        this.cartContent.push(product);
        this.cartRender();
        this.cartSummaryInsert();
    },

    cartRender () {
        this.clearContainer(this.cartContainer);
        if (this.cartContentLength() === 0) {
            this.cartContainer.insertAdjacentHTML('beforeend', this.emptyCartRender());
        } else {
            this.cartContent.forEach(item => this.cartContainer.insertAdjacentHTML('beforeend', this.cartItemRender(item)));
            this.cartContainer.insertAdjacentHTML('beforeend', `<button class = "button__next">Next</button>`);
            this.nextHandler();
        }
    },

    cartItemRender (product) {
        return `<div>
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button class="button__delete" data-product_id = "${product.id}">Remove</button>
                </div>`
    },

    emptyCartRender () {
        return `Your cart is empty`;
    },

    cartCost () {
        let sum = 0;
        this.cartContent.forEach(item => {sum = sum + item.price});
        return sum;
    },

    cartContentLength () {
        return this.cartContent.length;
    },

    cartSummaryRender () {
        return `You have ${this.cartContentLength()} items in the cart for total cost of ${this.cartCost()}`
    },

    cartSummaryInsert () {
        this.clearContainer(document.querySelector('.total'));
        if (this.cartContentLength() === 0) return;
        document.querySelector('.total').insertAdjacentHTML('beforeend', this.cartSummaryRender());
    },

    clearContainer (element) {
       return element.innerHTML='';
    },

    nextHandler () {
        document.querySelector('.button__next').addEventListener('click', event => this.toShipping(event));
    },

    toShipping (event) {
        this.clearContainer(this.cartContainer);
        this.cartContainer.insertAdjacentHTML('beforeend', this.shippingRender());
        this.commentHandler ();
    },

    shippingRender () {
        return `<form action="index.html">
                    <p><b>Please enter your address</b></p>
                    <input type="text" name="address">
                    <button class="button__continue">Done</button>
                </form>`
    },

    commentHandler () {
        document.querySelector('.button__continue').addEventListener('click', event => this.addComment(event));
    },

    addComment () {
        this.clearContainer(this.cartContainer);
        this.cartContainer.insertAdjacentHTML('beforeend', this.commentRender());
    },

    commentRender () {
        return `<form action="index.html">
                    <p><b>Add Comment</b></p>
                    <textarea rows="10" cols="45" name="comment"></textarea>
                    <button class="button__finish">Finish</button>
                </form>`
    },

};

catalogue.init('.catalogue', cart);
cart.init('.cart', catalogue.list);