import store from './data/store.js';
import { renderResultsTable } from './render-product-html.js';

const historicResultsTableBody = document.getElementById('historic-results-table-body');

const historicResults = store.getHistoricResults();

for(let i = 0; i < historicResults.length; i++) {
    const dom = renderResultsTable(historicResults[i]);
    historicResultsTableBody.appendChild(dom);
}

const historicResultsCtx = document.getElementById('historic-results-chart').getContext('2d');

const productLabels = [];
const shownData = [];
const chosenData = [];

for(let i = 0; i < historicResults.length; i++) {
    const product = historicResults[i];
    productLabels.push(product.name);
    shownData.push(product.shownTally);
    chosenData.push(product.chosenTally);
}

// eslint-disable-next-line no-unused-vars
const historicResultsChart = new Chart(historicResultsCtx, {
    type: 'bar',
    data: {
        labels: productLabels,
        datasets: [
            {
                label: 'Times Product Was Shown',
                data: shownData,
                backgroundColor: 'red'
            },
            {
                label: 'Times Product was Chosen',
                data: chosenData,
                backgroundColor: 'blue'
            }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});