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
let iterationProductsSet = masterProductsSet

for(let i = 0; i < 3; i ++) {
    console.log(iterationProductsSet)
    const product = iterationProductsSet.getRandomProduct();
    iterationProductsSet.removeProductById(product.id);
    const dom = renderProductInHtml(product, i);
    productRenderSection.appendChild(dom);
    store.updateShownTally(product.id);
}


const product1 = iterationProductsSet.getRandomProduct();
iterationProductsSet.removeProductById(product1.id);
// productShownTally = {
//     code: product1.code,
//     shownTally: 1
// }


const product2 = iterationProductsSet.getRandomProduct();
iterationProductsSet.removeProductById(product2.id);


const product3 = iterationProductsSet.getRandomProduct();
iterationProductsSet.removeProductById(product3.id);




//     update product shown tally
//         push to local storage
// update turn tracker
let turns = 0
turns++
if(turns >1) {

}
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
            
