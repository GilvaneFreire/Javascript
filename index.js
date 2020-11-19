//Pedidos de Venda
var dadosVenda = document.querySelector("#venda");

var xhr = new XMLHttpRequest();

xhr.onload = function(){
    var resObj = JSON.parse(this.responseText);
    var i;

    for(i = 0; i < resObj.length; i++){
        var id = resObj[i].MaterialID;
        var name = resObj[i].MaterialName;
        var qtd = resObj[i].Quantity;
        var tr = document.createElement("tr");
        var tdI = document.createElement("td");
        var tdN = document.createElement("td");
        var tdQ = document.createElement("td");
        tdI.textContent = ("#"+id);
        tdN.textContent = name;
        tdQ.textContent = ("Qtd:"+" "+qtd+" "+"pç");
        tr.appendChild(tdI);
        tr.appendChild(tdN);
        tr.appendChild(tdQ);
        dadosVenda.appendChild(tr);
    };  
};

xhr.open('get', './data/sales_orders.json');
xhr.send();

//Pedidos de Compra
var dadosCompra = document.querySelector("#compra");

var xhr = new XMLHttpRequest();

xhr.onload = function(){
    var resObj = JSON.parse(this.responseText);
    var i;

    for(i = 0; i < resObj.length; i++){
        var id = resObj[i].PurchaseOrderID;
        var name = resObj[i].MaterialName;
        var qtd = resObj[i].Quantity;
        var tr = document.createElement("tr");
        var tdI = document.createElement("td");
        var tdN = document.createElement("td");
        var tdQ = document.createElement("td");
        tdI.textContent = ("#"+id);
        tdN.textContent = name;
        tdQ.textContent = ("Qtd:"+" "+qtd+" "+"pç");
        tr.appendChild(tdI);
        tr.appendChild(tdN);
        tr.appendChild(tdQ);
        dadosCompra.appendChild(tr);
    };
};

xhr.open('get', './data/purchase_orders.json');
xhr.send();

//Produtos
var dadosProd = document.querySelector("#produtos");

var xhr = new XMLHttpRequest();

xhr.onload = function(){
    var resObj = JSON.parse(this.responseText);
    var i;

    for(i = 0; i < resObj.length; i++){
        var id = resObj[i].MaterialID;
        var name = resObj[i].MaterialName;
        var tr = document.createElement("tr");
        var tdI = document.createElement("td");
        var tdN = document.createElement("td");
        tdI.textContent = ("#"+id);
        tdN.textContent = name;
        tr.appendChild(tdI);
        tr.appendChild(tdN);
        dadosProd.appendChild(tr);
    };
};

xhr.open('get', './data/materials.json');
xhr.send();

// Equipamentos
var dadosEquip = document.querySelector("#equip");

var xhr = new XMLHttpRequest();

xhr.onload = function(){
    var resObj = JSON.parse(this.responseText);
    var i;

    for(i = 0; i < resObj.length; i++){
        var id = resObj[i].EquipmentID;
        var name = resObj[i].EquipmentName;
        var tr = document.createElement("tr");
        var tdI = document.createElement("td");
        var tdN = document.createElement("td");
        tdI.textContent = ("#"+id);
        tdN.textContent = name;
        tr.appendChild(tdI);
        tr.appendChild(tdN);
        dadosEquip.appendChild(tr);
    };
};

xhr.open('get', './data/equipments.json');
xhr.send();

//Mão de obra
var dadosMdo = document.querySelector("#mdo");

var xhr = new XMLHttpRequest();

xhr.onload = function(){
    var resObj = JSON.parse(this.responseText);
    var i;

    for(i = 0; i < resObj.length; i++){
        var id = resObj[i].WorkforceID;
        var name = resObj[i].Name;
        var tr = document.createElement("tr");
        var tdI = document.createElement("td");
        var tdN = document.createElement("td");
        tdI.textContent = ("#"+id);
        tdN.textContent = name;
        tr.appendChild(tdI);
        tr.appendChild(tdN);
        dadosMdo.appendChild(tr);
    };
};

xhr.open('get', './data/workforce.json');
xhr.send();



