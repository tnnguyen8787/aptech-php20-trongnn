function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", "text.txt", true);
    xhttp.send();

}



function loadDoc1() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(http.responseText);
            document.getElementById("demo").innerHTML = data;
        }
    };
    xhttp.open("GET", "https://namcoi.com/projects/users-crud-laravel/public/api/users", true);
    xhttp.send();

}



// //print ot html
//
// $("button").click(function(){
//     $.get("text.txt", function(data, status){
//         alert("Data: " + data + "\nStatus: " + status);
//     });
// });