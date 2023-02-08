let selectRow = null;
function onFormSubmit() {

    let formData = readData();

    if (selectRow == null) {
        insertNewRecord(formData);
    }
    else {
        onUpdateRecord(formData);
    }

    resetForm();
}

function readData() {
    let formData = {}
    formData["name"] = document.getElementById("uName").value
    formData["email"] = document.getElementById('uEmail').value
    formData["password"] = document.getElementById('uPassword').value
    formData["gender"] = document.querySelector('input[name= "gen"]:checked').value
    formData["date"] = document.getElementById('myDate').value
    formData["country"] = document.getElementById('uCountry').value
    formData["cb"] = document.querySelector('input[name= "uCheck"]:checked').value

    return formData;

}

function insertNewRecord(data) {
    let table = document.getElementById('tb1').getElementsByTagName('tbody')[0];

    let newRow = table.insertRow(table.length);

    cel1 = newRow.insertCell(0);
    cel1.innerHTML = data.name;

    cel2 = newRow.insertCell(1);
    cel2.innerHTML = data.email;

    cel3 = newRow.insertCell(2);
    cel3.innerHTML = data.password;

    cel4 = newRow.insertCell(3);
    cel4.innerHTML = data.gender

    cel5 = newRow.insertCell(4);
    cel5.innerHTML = data.date

    cel6 = newRow.insertCell(5);
    cel6.innerHTML = data.country

    cel7 = newRow.insertCell(6);
    cel7.innerHTML = data.cb

    cel8 = newRow.insertCell(7)
    cel8.innerHTML = `<a class="button" onclick="onEdit(this)"> Edit</a>
                    <a class="button" onclick="onDelete(this)"> Delete</a>`
}


function onDelete(td) {

    if (confirm("are you sure??")) {
        row = td.parentElement.parentElement;
        document.getElementById("tb1").deleteRow(row.rowIndex)
    }
}
function resetForm(){
    document.getElementById("uName").value = "";
    document.getElementById('uEmail').value = "";
    document.getElementById('uPassword').value = "";
    document.querySelector('input[name= "gen"]:checked').value = "";
    document.getElementById('myDate').value = "";
    document.getElementById('uCountry').value = "";
    document.getElementById("uCheck").value = "";
}


function onEdit(td) {
    selectRow = td.parentElement.parentElement;

    document.getElementById("uName").value = selectRow.cells[0].innerHTML
    document.getElementById('uEmail').value = selectRow.cells[1].innerHTML
    document.getElementById("uPassword").value = selectRow.cells[2].innerHTML
    if (selectRow.cells[3].innerHTML == "Male") {
        document.getElementById("male").checked = true;
    } else {
        document.getElementById("female").checked = true;
    }
    document.getElementById("myDate").value = selectRow.cells[4].innerHTML
    document.getElementById("uCountry").value = selectRow.cells[5].innerHTML
    
    document.getElementById("uCheck").value = selectRow.cells[6].innerHTML
    

}

function onUpdateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.name;
    selectRow.cells[1].innerHTML = formData.email;
    selectRow.cells[2].innerHTML = formData.password;
    selectRow.cells[3].innerHTML = formData.gender;
    selectRow.cells[4].innerHTML = formData.date;
    selectRow.cells[5].innerHTML = formData.country;
    selectRow.cells[6].innerHTML = formData.cb;

}