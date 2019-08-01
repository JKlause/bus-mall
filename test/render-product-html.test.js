import renderProductInHtml, { renderResultsTable } from '../src/render-product-html.js';


const test = QUnit.test;

QUnit.module('render product in html');

test('rendering product in html', assert => {
    // arrange
    const expected = '<label class="product"><p class="product-title">Star Wars Suitcase</p><input type="radio" name="product" value="bag" required=\"\"><img src="./assets/products/bag.jpg"><p class="description">description of product</p></label>';
    const product = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'description of product'
    };
    // act
    const dom = renderProductInHtml(product);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});

test('rendering results table', assert => {
    // arrange
    const expected = '<tr><td class="left-justification">Star Wars Suitcase</td><td>2</td><td>1</td><td>50%</td></tr>';
    const product = {
        id: 'bag',
        name: 'Star Wars Suitcase',
        image: './assets/products/bag.jpg',
        description: 'description of product',
        shownTally: 2,
        chosenTally: 1,
        ViewedChosenPercent: 50
    };
    // act
    const dom = renderResultsTable(product);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});