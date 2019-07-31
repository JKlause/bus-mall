import store from '../src/data/store.js';
import productsData from '../src/data/products.js';

const test = QUnit.test;

QUnit.module('Data Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('basic get and save', (assert) =>{
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