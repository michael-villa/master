var staticUrl = 'https://project-ytapi-default-rtdb.firebaseio.com/users.json';


$.getJSON(staticUrl, function(data) {
    for (i = 0; i < data.length; i++) {
        $('#usersList').append($('<option></option>').text(data[i].name).attr('ID', data[i].name));
    }
});


function setCc() {
    var nombre = document.getElementById("usersList").value;

    $.getJSON(staticUrl, function(data) {
        for (i = 0; i < data.length; i++) {
            if (data[i].name == nombre) {
                document.getElementById("cc").setAttribute('value', data[i].cc);
            }

        }
    });
}

function on() {
    var nombre = document.getElementById("usersList").value;

    document.getElementById("overlay").style.display = "block";
    document.getElementById("success").innerHTML = "La información de " + nombre + " ha sido enviada a marketing@zlivio.com";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}