var rows = 10;
var columns = 10;

width = 100;
height = 50;

var createGrid = function(row2,columns){
    $('.grid').empty();

    var $row = $("<div />", {
        class: 'row'
    });

    var $square = $("<div />", {
        class: 'cell'
    });

    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < row2; i++) {
        $(".grid").append($row.clone());
    }

    $('.grid').css("height", (row2*10)+'px');
    $('.grid').css("width",(columns*10)+'px');


}

var etch_sketch = function(r,c){

    createGrid(r,c);

    $('.cell').hover(function(){
        $(this).css('background-color','#FFF');

    })



}


var changeGridSize= function (){
    width= prompt("What grid width do you want? Minumum 10 Maximum 200.");
    height= prompt("What grid height do you want? Minumum 10 Maximum 200.");

    try{
        width = parseint(width);
        height = parseint(height);
    }
    catch(err){
        alert("Invalid input");
    } 

    etch_sketch(height,width);



}

$(document).ready(function () {
    
    etch_sketch(height,width)

    $('#erase-button').click(function(){
        $('.grid').empty();
        etch_sketch(height,width)
    })





    



});