import renderProductInHtml from '../src/render-product-html.js';
import productsData from '../src/data/products.js'

const test = QUnit.test;

QUnit.module('render product in html');

test('rendering product in html', assert => {
    // arrange
    const expected = '<button><img id="image-one" src="./assets/products/bag.jpg"></button>';
    const product = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
    };
    // act
    const dom = renderProductInHtml(product);
    
    // assert
    assert.equal(dom, expected);
});