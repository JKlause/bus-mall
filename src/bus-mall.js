// create array with list of objects
import ProductSet from './product-set.js';
import store from './data/store.js';
import renderProductInHtml, { renderResultsTable } from './render-product-html.js';

const productRenderSection = document.getElementById('product-render-section');
const form = document.getElementById('form');
const productChoiceDiv = document.getElementById('product-choice-div');
const resultsDiv = document.getElementById('results-div');
const resultsTableBody = document.getElementById('results-table-body');

store.resetShownTally();
store.resetChosenTally();
const products = store.getProducts();
let turns = 1

productChoiceRound();

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const inputValue = formData.get('product')
    store.updateChosenTally(inputValue);
    productChoiceRound();
})

function productChoiceRound() {
    let lastThreeProductsRendered = store.get('last-three-items');
    let iterationProductsSet = new ProductSet(products);

    if(turns <= 5) {
        if (!lastThreeProductsRendered) {
            lastThreeProductsRendered = [];
            }
        else {
            for (let i = 0; i < lastThreeProductsRendered.length; i++) {
                const previousProductRendered = lastThreeProductsRendered[i];
                iterationProductsSet.removeProductById(previousProductRendered.id);
            } 
            lastThreeProductsRendered = [];
        }

        while(productRenderSection.firstChild) {
            productRenderSection.removeChild(productRenderSection.firstChild);
        }

        for (let i = 0; i < 3; i++) {
            const product = iterationProductsSet.getRandomProduct();
            iterationProductsSet.removeProductById(product.id);
            const dom = renderProductInHtml(product);
            productRenderSection.appendChild(dom);
            store.updateShownTally(product.id);
            lastThreeProductsRendered.push(product);
        }

        store.save('last-three-items', lastThreeProductsRendered);
        turns++;
    }
    else {
        productChoiceDiv.classList.add('hidden');
        resultsDiv.classList.remove('hidden');
        const productsWithShownTally = [];
        const productsToSave = [];
        const allProducts = store.getProducts();
        for(let i = 0; i < allProducts.length; i++) {

            const shownTally = store.getShownTally();
            for(let j = 0; j < shownTally.length; j++) {
                if(allProducts[i].id === shownTally[j].id) {
                    allProducts[i].shownTally = shownTally[j].shownTally;
                } else {
                    allProducts[i].shownTally = 0;
                } productsWithShownTally.push(allProducts[i])
            }
        }
        for(let i = 0; i < productsWithShownTally.length; i++) {
            const chosenTally = store.getChosenTally()
            for(let j = 0; j < chosenTally.length; j++) {
                if(productsWithShownTally[i].id === chosenTally[j].id) {
                    productsWithShownTally[i].chosenTally = chosenTally[j].chosenTally;
                } else {
                    productsWithShownTally[i].chosenTally = 0;
                } productsToSave.push(productsWithShownTally[i])
            }
        }
        store.save('products', productsToSave)
        const dom = renderResultsTable(allProducts[i]);
        resultsTableBody.appendChild(dom);
    }
}



 //loop through shown tally
        //if products.code=showntally product.code
//products.shownTally= 
// {id: "pet-sweep", shownTally: 1}
//loop through results tally

//             calculate results:
//                 get product chosen tally
//                 get product shown
//                 find percentage shown/chosen
//             reveal results


//make button

//saving three products in local storage
//each time compare iteration list with three products
//splice out three products
//clear products in local storage
//run function


//     remove 3 products from next turn list
//         if not first turn, return previous items into next turn list

// render 3 products on screen (doesn't need to be random)
//     create event listeners
//     set button value equal to name of product
// get user update choice
//     update chosen tally
//         push to local storage
//     are we done?
//         no
//             choose 3 products at random from from next turn list (beginning of loop)
//         yes
//             hide product images
//             calculate results:
//                 get product chosen tally
//                 get product shown
//                 find percentage shown/chosen
//             reveal results
            
