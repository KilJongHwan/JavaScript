let guguElement = document.getElementById("gugu");

for (let i = 2; i <= 9; i++) {
    let table = document.createElement('table');
    let caption = document.createElement('caption');
    caption.innerHTML = `${i} 단`;
    table.appendChild(caption);

    for (let j = 1; j <= 9; j++) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = `${i} * ${j}`;
        cell2.innerHTML = `${i * j}`;
    }

    guguElement.appendChild(table);
}