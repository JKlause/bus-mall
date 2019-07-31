import renderProductInHtml from '../src/render-product-html.js';


const test = QUnit.test;

QUnit.module('render product in html');

test('rendering product in html', assert => {
    // arrange
    const expected = '<button value="bag"><img id="image-1" src="./assets/products/bag.jpg"></button>';
    const i = 1;
    const product = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
    };
    // act
    const dom = renderProductInHtml(product, i);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});