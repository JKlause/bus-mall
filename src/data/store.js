import productsData from "./products.js";

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getProducts() {
        let products = store.get('products');
        if(!products) {
            store.save('products', productsData);
            products = productsData;
        }
        return products;
    },
    findProduct(products, id) {
        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            if(product.id === id) {
                return product;
            } 
        }
        return null;
    },
    getProductById(id) {
        const products = store.get('products');
        const product = store.findProduct(products, id);
        return product;
    },
    getShownTally() {
        let shownTally = store.get('shown-tally')
        if(!shownTally) {
            shownTally = [];
        }
        return shownTally;
    },
    updateShownTally(id) {
        let shownTally = store.getShownTally();
        const product = store.findProduct(shownTally, id);
        if(product) {
            product.shownTally = +product.shownTally + 1;
        }
        else {
                const newShownTally = {
                    id: id,
                    shownTally: 1
                }
                shownTally.push(newShownTally);
            store.save('shown-tally', shownTally);
        }
    },
    getChosenTally() {
        let chosenTally = store.get('chosen-tally')
        if(!chosenTally) {
            chosenTally = [];
        }
        return chosenTally;
    },
    updateChosenTally(id) {
        let chosenTally = store.getChosenTally();
        const product = store.findProduct(chosenTally, id);
        if(product) {
            console.log(product.chosenTally);
            product.chosenTally = +product.chosenTally + 1;
            console.log(product.chosenTally);
        }
        else {
                const newChosenTally = {
                    id: id,
                    chosenTally: 1
                }
            chosenTally.push(newChosenTally);
        }
        store.save('chosen-tally', chosenTally);
    },
};

export default store;