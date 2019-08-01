// create array with list of objects
import ProductSet from './product-set.js';
import store from './data/store.js';
import renderProductInHtml, { renderResultsTable } from './render-product-html.js';

const productRenderSection = document.getElementById('product-render-section');
const form = document.getElementById('form');
const productChoiceDiv = document.getElementById('product-choice-div');
const resultsDiv = document.getElementById('results-div');
const resultsTableBody = document.getElementById('results-table-body');
const resetSurveyButton = document.getElementById('reset-survey-button');

store.resetProductsList();

let products = store.getProducts();
let turns = 1;



productSurveyRound();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const inputValue = formData.get('product');
    store.incrementChosenTally(inputValue);
    productSurveyRound();
});

resetSurveyButton.addEventListener('click', () => {
    productChoiceDiv.classList.remove('hidden');
    resultsDiv.classList.add('hidden');
    store.resetProductsList();
    products = store.getProducts();
    turns = 1;
    removeHTMLOfPreviousItemsRendered(resultsTableBody);
    productSurveyRound();
});


function productSurveyRound() {
    let lastThreeProductsRendered = store.get('last-three-items');
    let iterationProductsSet = new ProductSet(products);

    if(turns <= 2) {
        lastThreeProductsRendered = updateIterationProductsSet(lastThreeProductsRendered, iterationProductsSet);

        removeHTMLOfPreviousItemsRendered(productRenderSection);

        randomlyGetThreeProducts(iterationProductsSet, lastThreeProductsRendered);

        store.save('last-three-items', lastThreeProductsRendered);
        turns++;
        return lastThreeProductsRendered;
    }
    else {
        afterSurveyResults();
    }
}

function updateIterationProductsSet(lastThreeProductsRendered, iterationProductsSet) {
    if(!lastThreeProductsRendered) {
        lastThreeProductsRendered = [];
    }
    else {
        for(let i = 0; i < lastThreeProductsRendered.length; i++) {
            const previousProductRendered = lastThreeProductsRendered[i];
            iterationProductsSet.removeProductById(previousProductRendered.id);
        }
        lastThreeProductsRendered = [];
    }
    return lastThreeProductsRendered;
}

function removeHTMLOfPreviousItemsRendered(parentOfSectionToRemove) {
    while(parentOfSectionToRemove.firstChild) {
        parentOfSectionToRemove.removeChild(parentOfSectionToRemove.firstChild);
    }
}

function randomlyGetThreeProducts(iterationProductsSet, lastThreeProductsRendered) {
    for(let i = 0; i < 3; i++) {
        const product = iterationProductsSet.getRandomProduct();
        iterationProductsSet.removeProductById(product.id);
        const dom = renderProductInHtml(product);
        productRenderSection.appendChild(dom);
        store.incrementShownTally(product.id);
        lastThreeProductsRendered.push(product);
    }
}

function afterSurveyResults() {
    productChoiceDiv.classList.add('hidden');
    resultsDiv.classList.remove('hidden');

    const allProducts = store.getProducts();
    for(let i = 0; i < allProducts.length; i++) {
        const dom = renderResultsTable(allProducts[i]);
        resultsTableBody.appendChild(dom);
    }
}
