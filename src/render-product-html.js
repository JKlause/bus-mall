
export default function renderProductInHtml(product) {
    const button = document.createElement('button');
    const img = document.createElement('img');
    img.id = 'image-one'
    button.appendChild(img);
    
    return button;
}

