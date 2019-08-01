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
})

test('get trees uses bootstrapped trees', (assert) => {
    //arrange 
    //import products data to compare
    
    //act
    const products = store.getProducts();

    //assert
    assert.deepEqual(products, productsData);
})

test('get product shown tally, return [] if empty', (assert) => {
    //arrange
    const expected = [];

    //act
    const shownTally = store.getShownTally();

    //assert
    assert.deepEqual(expected, shownTally);
})

test('find product', (assert) => {
    //arrange
    const id = 'bag';
    const expected = {
                id: 'bag',
                name: 'Star Wars Suitcase',
                image: './assets/products/bag.jpg',
                description: 'description of product'
            };
    //imported productsData

    //act
    const product = store.findProduct(productsData, id);

    //assert
    assert.deepEqual(expected, product);
})


test('update shown tally', (assert) => {
    //arrange
    const expected = [{ id: 'bag', shownTally: 1 }];
    const product = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
    };

    //act
    store.updateShownTally(product.id);
    const shownTally = store.getShownTally();

    //assert
    assert.deepEqual(expected, shownTally);
})