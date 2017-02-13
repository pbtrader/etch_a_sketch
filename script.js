$(document).ready(function(){
	
	newGrid(16);

	$(document).on('mouseover','.block',function() {
        $(this).css('background-color','grey');
    });

    $('#reset').click(function(){
    	$('.block').css('background-color','white');
    })
    
    $('#changeGrid').click(function(){ 
		var gridSize=prompt("Enter number of squares per size");
		newGrid(gridSize);
		var squareSize = (320/gridSize);
       $('.block').css({'height': squareSize + 'px', 'width': squareSize + 'px'});
    })

    function newGrid(gridSize){
    	var numSquares=gridSize * gridSize;
    	$('#grid').empty();    	
    	for (var j = 0; j < numSquares; j++){
    		$("#grid").append("<div class='block'></div>");
    		}
    	}
    
});




