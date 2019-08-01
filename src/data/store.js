import productsData from './products.js';

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
    getHistoricResults() {
        let historicResults = store.get('historic-results');
        if(!historicResults) {
            store.save('historic-results', productsData);
            historicResults = productsData;
        }
        return historicResults;
    },
    resetProductsList() {
        store.save('products', productsData);
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
    findProductById(id) {
        const products = store.getProducts();
        const product = store.findProduct(products, id);
        return product;
    },
    incrementShownTally(id) {
        let products = store.getProducts();
        let product = store.findProduct(products, id);
        product.shownTally = +product.shownTally + 1;
        store.save('products', products);
    },
    incrementChosenTally(id) {
        let products = store.getProducts();
        let product = store.findProduct(products, id);
        product.chosenTally = +product.chosenTally + 1;
        store.save('products', products);
    },
    updateHistoricResults() {
        let products = store.getProducts();
        let historicResults = store.getHistoricResults();
        
        for(let i = 0; i < products.length; i++) {
            for(let j = 0; j < historicResults.length; j++) {
                historicResults[i].shownTally = +historicResults[i].shownTally + +products[i].shownTally;
                historicResults[i].chosenTally = +historicResults[i].chosenTally + +products[i].chosenTally;
            }
        }
        
        store.save('historic-results', historicResults);
    }

};

export default store;
    