import productsData from '../src/data/products.js';
import ProductSet from '../src/product-set.js';

const test = QUnit.test;

QUnit.module('product set');

test('create a master list from source list', assert => {
    // arrange
    //import productData

    // act
    const productSet = new ProductSet(productsData);
    
    // assert
    assert.deepEqual(productSet.list, productsData);
    assert.notEqual(productSet.list, productsData);
});

test('get random product from productSet', assert => {
    // arrange
    const productSet = new ProductSet(productsData);
    
    // act
    const product = productSet.getRandomProduct();

    // assert
    
    assert.ok(productsData.includes(product));
});

test('remove product by id', assert => {
    //arrange
    const productSet = new ProductSet(productsData);
    const productToRemove = productsData[0];

    //act
    productSet.removeProductById(productToRemove.id);

    //assert
    assert.notOk(productSet.list.includes(productToRemove));

})