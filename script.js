var rows = 10;
var columns = 10;


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
    $('.grid').css("width",(row2*10)+'px');

    $('.cell').hover(function(){
        $(this).css('background-color','rgb(0,0,0)');

    })


}


$(document).ready(function () {
    
    createGrid(rows,columns);

    $('.button').click(function(){
        $('.grid').empty();
        createGrid(50,50)
    })




    



});