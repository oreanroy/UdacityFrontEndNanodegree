/*
 Select color input
 Select size input

 When size is submitted by the user, call makeGrid()
*/



document.addEventListener("DOMContentLoaded", function() {
  var submit = document.querySelector("input[type = 'submit']");
    submit.addEventListener('click', function(e){
      e.preventDefault();

    makeGrid();
    });
});
table.addEventListener('click', function(event) {
  var color = document.getElementById('colorPicker').value;
  if (event.target.nodeName == "TD") {
    if(event.target.style.backgroundColor === color){
      event.target.style.backgroundColor = 'white';
    }else{
       event.target.style.backgroundColor = color;
      }
}});
function makeGrid() {
  // Your code goes here!
    var table = document.getElementById('pixelCanvas');
  var height = document.getElementById('inputHeight').value;
  var width = document.getElementById('inputWidth').value;
    table.innerHTML = "";
  for( var i=0; i<height;i++){
    var row = document.createElement('tr');
    for(var j=0;j<width;j++){
      var cell = document.createElement('td');
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}



 



