export default function renderProductInHtml(product) {
    const label = document.createElement('label');
    label.className = 'product';

    const pTitle = document.createElement('p');
    pTitle.className = 'product-title';
    pTitle.textContent = product.name;
    label.appendChild(pTitle);

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'product';
    input.value = product.id;
    input.required = true;
    label.appendChild(input);

    const img = document.createElement('img');
    img.src = product.image;
    label.appendChild(img);

    const pDescription = document.createElement('p');
    pDescription.className = 'description';
    pDescription.textContent = product.description;
    label.appendChild(pDescription);

    return label;
}

export function renderResultsTable(product) {

    const tr = document.createElement('tr');

    const tdName = document.createElement('td');
    tdName.className = 'left-justification';
    tdName.textContent = product.name;
    tr.appendChild(tdName);

    const tdShownTally = document.createElement('td');
    tdShownTally.textContent = product.shownTally;
    tr.appendChild(tdShownTally);

    const tdResultsTally = document.createElement('td');
    tdResultsTally.textContent = product.chosenTally;
    tr.appendChild(tdResultsTally);
    
    const tdViewedChosenPercent = document.createElement('td');
    if(product.shownTally === 0) {
        tdViewedChosenPercent.textContent = 'N/A';
    } else {
        tdViewedChosenPercent.textContent = (((+product.chosenTally) / (+product.shownTally) * 100).toFixed(1) + '%');
    }
    tr.appendChild(tdViewedChosenPercent);



    return tr;
}