import store from "./data/store.js";

export default function renderProductInHtml(product, i) {
    const button = document.createElement('button');
    button.value = product.id

    const img = document.createElement('img');
    img.id = 'image-' + i;
    img.src = product.image;
    button.appendChild(img);

    button.addEventListener('click', () => {
        store.updateChosenTally(product.id);
        return;
    })

    return button;
}

