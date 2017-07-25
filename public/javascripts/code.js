var osoite;


function sendStuff(){

    var year = document.getElementById("vuodet");
    var month = document.getElementById("kuukaudet");
    var stuff = {year: year.options[year.selectedIndex].value,
                month: month.options[month.selectedIndex].value
            };
    $.post(window.location.href,
        stuff,
        function(data, status){;
            generateList.call(data);
        }
    );
}
function sendday(){


    var stuff = {day:this.id
            };
    $.post(window.location.href,
        stuff,
        function(data, status){
            generateDay.call(data);
        }
    );
}

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
    var kuukaudet = ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kesäkuu",
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
    sub.setAttribute("onclick", "sendStuff(); return false;");

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




    var table = document.getElementById("kdata");
    var table2 = document.getElementById("ddata");
    if (table != null){
        table.parentNode.removeChild(table);
    }
    if (table2 != null){
        table2.parentNode.removeChild(table2);
    }
    var pos = document.getElementById("taulut");




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
    for (var i = 1; i <= Object.keys(this).length; i++){
        cell = document.createElement("tr");
        for (var j = 0; j < 2; j++){
            var td = document.createElement("td");
            if(j == 0){
                b = document.createElement("button");
                b.setAttribute("class", "dateButton");
                b.setAttribute("id", this[i]["date"]);
                b.appendChild(document.createTextNode(this[i]["date"]));
                b.onclick  = sendday;
                td.appendChild(b);
            }
            else{
                total = 0
                for (var h = 0; h < 24; h++){
                    total = total + this[i][h]
                }
                td.appendChild(document.createTextNode(total.toFixed(2) + " kWh"));
            }
            cell.appendChild(td);
        }
        body.appendChild(cell);
    }
    table.appendChild(body);
    pos.appendChild(table);
}



function generateDay(){



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
    head.appendChild(document.createTextNode(osoite + " " + this.date));
    cell.appendChild(head);
    body.appendChild(cell);
    for (var i = 0; i < Object.keys(this).length - 1; i++){
        cell = document.createElement("tr");
        for (var j = 0; j < 2; j++){
            var td = document.createElement("td");
            if(j == 0){
                td.appendChild(document.createTextNode(i));
            }
            else{
                td.appendChild(document.createTextNode(this[i]));
            }
            cell.appendChild(td);
        }
        body.appendChild(cell);
    }
    table.appendChild(body);
    pos.appendChild(table);

}
