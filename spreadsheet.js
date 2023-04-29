fetch("https://api.apispreadsheets.com/data/WBQG74ZiTFSzutWs/").then(res => {
    if (res.status === 200) {
        // SUCCESS
        res.json().then(data => {
            const yourData = data.data
            populateTable(yourData)
        }).catch(err => console.log(err))
    }
    else console.error("Error: " + res.status + " (" + res.statusText + ")")
})


const populateTable = (data) => {
    var table = document.getElementById("myTable");

    console.log(data.length)
    
    var tr = document.createElement("tr");
    var th1 = document.createElement("th");
    var th2 = document.createElement("th");
    th1.innerHTML = "Nome";
    th2.innerHTML = "Link";
    tr.appendChild(th1);
    tr.appendChild(th2);
    table.appendChild(tr);

    for (var i = 0; i < data.length; i++) {
        var row = data[i];
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        td1.innerHTML = row.Nome;

        var a = document.createElement('a');
        var linkText = document.createTextNode(row.Descrizione);
        a.appendChild(linkText);
        a.title = "Link";
        a.href = row.Link;
        td2.appendChild(a);

        tr.appendChild(td1);
        tr.appendChild(td2);
        table.appendChild(tr);
   }
}