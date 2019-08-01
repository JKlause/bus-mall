import store from '../src/data/store.js';
import productsData from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('basic get and save', (assert) => {
    //arrange
    const key = 'dog';
    const dog = { name: 'max' };

    //act
    store.save(key, dog);
    const got = store.get(key);
    //assert
    assert.deepEqual(got, dog);
});

test('get productsData uses bootstrapped products', (assert) => {
    //arrange 
    //import products data to compare
    
    //act
    const products = store.getProducts();

    //assert
    assert.deepEqual(products, productsData);
});


test('find product', (assert) => {
    //arrange
    const id = 'bag';
    const expected = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'Pack your bags and explore the galaxy with this incredible R2D2 luggage set.',
        shownTally: 0,
        chosenTally: 0
    };
    //imported productsData

    //act
    const product = store.findProduct(productsData, id);

    //assert
    assert.deepEqual(expected, product);
});

test('find product by Id', (assert) => {
    //arrange
    const id = 'bag';
    const expected = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'Pack your bags and explore the galaxy with this incredible R2D2 luggage set.',
        shownTally: 0,
        chosenTally: 0
    };
    //imported productsData

    //act
    const product = store.findProductById(id);

    //assert
    assert.deepEqual(expected, product);
});

test('increment shown tally', (assert) => {
    //arrange
    const expected = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'Pack your bags and explore the galaxy with this incredible R2D2 luggage set.',
        shownTally: 1,
        chosenTally: 0
    };
    const product = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'Pack your bags and explore the galaxy with this incredible R2D2 luggage set.',
        shownTally: 0,
        chosenTally: 0
    };

    //act
    store.incrementShownTally(product.id);
    const newProduct = store.findProductById(product.id);

    //assert
    assert.deepEqual(newProduct, expected);
});

test('increment chosen tally', (assert) => {
    //arrange
    const expected = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'Pack your bags and explore the galaxy with this incredible R2D2 luggage set.',
        shownTally: 1,
        chosenTally: 1
    };
    const product = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'Pack your bags and explore the galaxy with this incredible R2D2 luggage set.',
        shownTally: 1,
        chosenTally: 0
    };

    //act
    store.incrementChosenTally(product.id);
    const newProduct = store.findProductById(product.id);

    //assert
    assert.deepEqual(expected, newProduct);
});

test('get productsData uses bootstrapped products', (assert) => {
    //arrange 
    //import products data to compare
    let products = [{
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'Pack your bags and explore the galaxy with this incredible R2D2 luggage set.',
        shownTally: 3,
        chosenTally: 2,
    },
    {
        id: 'banana',
        name: 'Banana Slicer',
        image: './assets/products/banana.jpg',
        description: 'Never cut your bananas the same way again!',
        shownTally: 1,
        chosenTally: 1,
    }];
    
    //act
    store.resetProductsList();
    products = store.getProducts();

    //assert
    assert.deepEqual (products, productsData);
});

