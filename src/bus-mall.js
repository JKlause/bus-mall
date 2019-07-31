// create array with list of objects
import ProductSet from './product-set.js';
import store from './data/store.js';
import renderProductInHtml from './render-product-html.js';

const productRenderSection = document.getElementById('product-render-section');

//    bootstrap master list into local storage
const products = store.getProducts();

// create master list of products
const masterProductsSet = new ProductSet(products);

//create iteration list of products
let turns = 1
if(turns <= 25) {
productChoiceRound();
}


function productChoiceRound() {
    let lastThreeProductsRendered = store.get('last-three-items');
    let iterationProductsSet = masterProductsSet;
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
    for (let i = 0; i < 3; i++) {
        const product = iterationProductsSet.getRandomProduct();
        iterationProductsSet.removeProductById(product.id);
        const dom = renderProductInHtml(product, i);
        // productRenderSection.appendChild(dom);
        store.updateShownTally(product.id);
        lastThreeProductsRendered.push(product);
    }
    store.save('last-three-items', lastThreeProductsRendered);
    turns++;
}


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
            
