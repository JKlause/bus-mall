import { getRandomInt } from './data/get-random-int.js';

class ProductSet {
    constructor(products) {
        this.list = products.slice();
    }

    getRandomProduct() {
        const index = getRandomInt(this.list.length);
        const product = this.list[index]
        return product;
    }

    removeProductById(productId) {
        const list = this.list;
        for(let i = 0; i < list.length; i++) {
            const product = list[i];
            if(productId === list[i].id) {
                list.splice(i, 1);
                return list;
            }
        }
    }
}

export default ProductSet;