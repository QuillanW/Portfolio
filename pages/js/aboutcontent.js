window.onload = change1();

function change1() {
    document.getElementById('content1').style.display = 'block';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
    document.getElementById('content4').style.display = 'none';
    document.getElementById('content5').style.display = 'none';
}

function change2() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'block';
    document.getElementById('content3').style.display = 'none';
    document.getElementById('content4').style.display = 'none';
    document.getElementById('content5').style.display = 'none';
}

function change3() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'block';
    document.getElementById('content4').style.display = 'none';
    document.getElementById('content5').style.display = 'none';
}

function change4() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
    document.getElementById('content4').style.display = 'block';
    document.getElementById('content5').style.display = 'none';
}

function change5() {
    document.getElementById('content1').style.display = 'none';
    document.getElementById('content2').style.display = 'none';
    document.getElementById('content3').style.display = 'none';
    document.getElementById('content4').style.display = 'none';
    document.getElementById('content5').style.display = 'block';
}

let sortDirection = false;
let tableData = [
    { Game: 'Stormworks', Hours: 1990 },
    { Game: 'Farming Simulator 17', Hours: 412 },
    { Game: 'Farming Simulator 19', Hours: 1117 },
    { Game: 'Farming Simulator 22', Hours: 8 },
    { Game: 'Euro Truck Simulator 2', Hours: 555 },
    { Game: 'American Truck Simulator 2', Hours: 321 },
    { Game: 'Scrap Mechanic', Hours: 335 }
];

window.onload = () => {
    loadTableData(tableData);
};

function loadTableData(tableData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for(let data of tableData) {
        dataHtml += `<tr><td>${data.Game}</td><td>${data.Hours}</td></tr>`;
    }

    tableBody.innerHTML = dataHtml;
}

function sortColumn(columnName) {
    const dataType = typeof tableData[0][columnName];
    sortDirection = !sortDirection;

    switch(dataType) {
        case 'number':
        sortNumberColumn(sortDirection, columnName);
        break;
    }
    loadTableData(tableData)
}

function sortNumberColumn(sort, columnName) {
    tableData = tableData.sort((p1, p2) => {
        return sort ? p1[columnName] - p2[columnName] : p2[columnName] - p1[columnName]
    });
}