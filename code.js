var osoite;
var date = "22.3.1490"

function checkAddress(){
    osoite = document.place.Osoite.value;
    generateForm();

}

function generateForm(){
    var fo = document.getElementById("vuodet");
    var kuut = document.getElementById("kuukaudet");
    var sub = document.getElementById("button");
    var table = document.getElementById("kdata");
    var table2 = document.getElementById("ddata");
    if (fo != null){
        fo.parentNode.removeChild(fo);
        kuut.parentNode.removeChild(kuut);
        sub.parentNode.removeChild(sub);
        if (table != null){
            table.parentNode.removeChild(table);
        }
        if (table2 != null){
            table2.parentNode.removeChild(table2);
        }
    }
    var vuodet = [2017, 2016, 2015, 2014, 2013, 2012, 2011];
    var kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuukuu", "Huhtikuu", "Toukokuu", "Kesäkuu",
                    "Heinäkuu", "Elokuu", "Syyskuu",
                    "Lokakuu", "Marraskuu", "Joulukuu"];

    var f = document.createElement("form");
    f.setAttribute('method',"post");
    f.setAttribute('name',"time");

    fo = document.createElement("select");
    kuut = document.createElement("select");
    fo.setAttribute("id", "vuodet");
    kuut.setAttribute("id", "kuukaudet");
    fo.setAttribute("form", "time");
    kuut.setAttribute("form", "time");
    for (var i = 0; i < vuodet.length; i++) {
        var option = document.createElement("option");
        option.value = vuodet[i];
        option.text = vuodet[i];
        fo.appendChild(option);
    }
    for (var i = 0; i < kuukaudet.length; i++){
        var option = document.createElement("option");
        option.value = kuukaudet[i];
        option.text = kuukaudet[i];
        kuut.appendChild(option);
    }

    sub = document.createElement("input");
    sub.setAttribute("id", "button")
    sub.setAttribute("type", "submit");
    sub.setAttribute("value", "Näytä");
    sub.setAttribute("onclick", "generateList(); return false;");

    var posi = document.getElementById("dates");
    posi.appendChild(fo);
    posi.appendChild(kuut);
    posi.appendChild(sub);
    /*
    document.getElementsByTagName('body')[0].appendChild(fo);
    document.getElementsByTagName('body')[0].appendChild(kuut);
    document.getElementsByTagName('body')[0].appendChild(sub);*/

    document.place.reset();
}

function generateList(){

    var year = document.getElementById("vuodet");
    var month = document.getElementById("kuukaudet");
    alert(year.options[year.selectedIndex].value + " " + month.options[month.selectedIndex].value);

    var table = document.getElementById("kdata");
    var table2 = document.getElementById("ddata");
    if (table != null){
        table.parentNode.removeChild(table);
        table2.parentNode.removeChild(table2);
    }
    var pos = document.getElementById("taulut");
    var dates = ["10.1.2016",
                    "11.1.2016",
                    "12.1.2016",
                    "13.1.2016",
                    "14.1.2016",
                    "15.1.2016",
                    "16.1.2016",
                    "17.1.2016",
                    "18.1.2016",
                    "19.1.2016",
                    "20.1.2016",
                    "21.1.2016",
                    "22.1.2016",
                    "23.1.2016",
                    "24.1.2016",
                    "25.1.2016",
                    "26.1.2016",
                    "27.1.2016",
                    "28.1.2016",
                    "29.1.2016",
                    "30.1.2016",
                    "31.1.2016",
                    "1.2.2016",
                    "2.2.2016",
                    "3.2.2016",
                    "4.2.2016",
                    "5.2.2016",
                    "6.2.2016",
                    "7.2.2016",
                    "8.2.2016"];
    var summat = [];
    for (var i = 1; i<=30; i++){
        summat.push(Math.floor(Math.random()*50)+ " kWh");
    }

    table = document.createElement("table");
    table.setAttribute("border", "1");
    table.setAttribute("id", "kdata");
    table.setAttribute("style", "float:left")
    var body = document.createElement("tbody");
    var cell = document.createElement("tr");
    var head = document.createElement("th");
    head.setAttribute("align", "center");
    head.setAttribute("colspan", "2");
    head.appendChild(document.createTextNode(osoite));
    cell.appendChild(head);
    body.appendChild(cell);
    for (var i = 0; i < summat.length; i++){
        cell = document.createElement("tr");
        for (var j = 0; j < 2; j++){
            var td = document.createElement("td");
            if(j == 0){
                b = document.createElement("button");
                b.setAttribute("class", "dateButton");
                b.setAttribute("id", dates[i]);
                b.appendChild(document.createTextNode(dates[i]));
                b.onclick  = generateDay;
                td.appendChild(b);
            }
            else{
                td.appendChild(document.createTextNode(summat[i]));
            }
            cell.appendChild(td);
        }
        body.appendChild(cell);
    }
    table.appendChild(body);
    pos.appendChild(table);
}



function generateDay(){

    var hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09",
                "10", "11", "12", "13", "14", "15", "16", "17", "18", "19",
                "20", "21", "22", "23"];
    var summat = [];
    for (var i = 1; i<=24; i++){
        summat.push(Math.floor(Math.random()*5)+ " kWh");
    }

    var table = document.getElementById("ddata");
    if (table != null){
        table.parentNode.removeChild(table);
    }
    var pos = document.getElementById("taulut")

    table = document.createElement("table");
    table.setAttribute("border", "1");
    table.setAttribute("id", "ddata");
    table.setAttribute("style", "float:left")
    var body = document.createElement("tbody");
    var cell = document.createElement("tr");
    var head = document.createElement("th");
    head.setAttribute("align", "center");
    head.setAttribute("colspan", "2");
    head.appendChild(document.createTextNode(osoite + " " + this.id));
    cell.appendChild(head);
    body.appendChild(cell);
    for (var i = 0; i < summat.length; i++){
        cell = document.createElement("tr");
        for (var j = 0; j < 2; j++){
            var td = document.createElement("td");
            if(j == 0){
                td.appendChild(document.createTextNode(hours[i]));
            }
            else{
                td.appendChild(document.createTextNode(summat[i]));
            }
            cell.appendChild(td);
        }
        body.appendChild(cell);
    }
    table.appendChild(body);
    pos.appendChild(table);

}
